/**
 * AI Service - powered by Pollinations.ai (default) with optional API key override.
 * Supports: Pollinations.ai (free, no key), Groq, OpenRouter.
 * API keys are stored in localStorage - private to the user's browser only.
 */
const aiService = {
    isAvailable: true,

    // Returns the display name of the currently active AI provider
    getProviderName() {
        const map = {
            pollinations: 'Pollinations.ai',
            groq: 'Groq',
            openrouter: 'OpenRouter'
        };
        return map[localStorage.getItem('ai-provider')] || 'Pollinations.ai';
    },
    // ── Provider-aware fetch ─────────────────────────────────────────────────
    async fetchAI(prompt) {
        const provider = localStorage.getItem('ai-provider') || 'pollinations';
        const apiKey = localStorage.getItem('ai-api-key');

        try {
            if (provider === 'groq' && apiKey) {
                return await this.fetchOpenAICompat(prompt, apiKey, 'groq');
            } else if (provider === 'openrouter' && apiKey) {
                return await this.fetchOpenAICompat(prompt, apiKey, 'openrouter');
            } else {
                return await this.fetchPollinations(prompt);
            }
        } catch (e) {
            console.warn(`[aiService] Provider "${provider}" failed, falling back to Pollinations.ai`, e);
            return await this.fetchPollinations(prompt);
        }
    },

    // ── Pollinations.ai (default, no key) ───────────────────────────────────
    async fetchPollinations(prompt) {
        const encodedPrompt = encodeURIComponent(prompt);
        const url = `https://text.pollinations.ai/${encodedPrompt}?t=${Date.now()}`;

        const makeRequest = async () => {
            const response = await fetch(url);
            if (response.status === 429) throw new Error('429');
            if (!response.ok) throw new Error(`Pollinations error: ${response.status}`);
            return response.text();
        };

        return this.retry(makeRequest, 3, 1000);
    },

    // ── Groq / OpenRouter (OpenAI-compatible) ────────────────────────────────
    async fetchOpenAICompat(prompt, apiKey, provider) {
        const config = {
            groq: {
                url: 'https://api.groq.com/openai/v1/chat/completions',
                models: ['llama-3.3-70b-versatile', 'llama-3.1-70b-versatile', 'mixtral-8x7b-32768']
            },
            openrouter: {
                url: 'https://openrouter.ai/api/v1/chat/completions',
                // Multiple free models — tries next if upstream is rate-limited
                models: [
                    'meta-llama/llama-3.3-70b-instruct:free',
                    'google/gemma-3-12b-it:free',
                    'mistralai/mistral-7b-instruct:free',
                    'meta-llama/llama-3.1-8b-instruct:free'
                ]
            }
        };

        const { url, models } = config[provider];
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            ...(provider === 'openrouter' ? { 'HTTP-Referer': window.location.origin } : {})
        };

        for (const model of models) {
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    model,
                    messages: [{ role: 'user', content: prompt }],
                    temperature: 0.7,
                    max_tokens: 1024
                })
            });

            if (response.status === 429 || response.status === 503 ||
                response.status === 404 || response.status >= 500) {
                console.warn(`[aiService] ${provider} model ${model} unavailable (${response.status}), trying next...`);
                continue;
            }

            if (!response.ok) {
                const err = await response.json().catch(() => ({}));
                // Also retry on upstream provider errors (OpenRouter-specific)
                if (err?.error?.code === 429) {
                    console.warn(`[aiService] ${provider} upstream rate-limit on ${model}, trying next...`);
                    continue;
                }
                throw new Error(`${provider} error: ${response.status} — ${err?.error?.message || ''}`);
            }

            const data = await response.json();
            return data.choices?.[0]?.message?.content || '';
        }

        // All models exhausted — throw to trigger Pollinations fallback
        throw new Error(`${provider}: all models rate-limited. Falling back to Pollinations.`);
    },

    // ── Retry helper ─────────────────────────────────────────────────────────
    async retry(fn, retries = 3, delay = 1000) {
        try {
            return await fn();
        } catch (err) {
            if (err.message === '429' && retries > 0) {
                console.warn(`[aiService] Rate limited. Retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                return this.retry(fn, retries - 1, delay * 2);
            }
            throw err;
        }
    },

    // ── Public methods (unchanged — all call fetchAI internally) ─────────────

    async checkText(text, context) {
        try {
            const prompt = `
You are a supportive Dutch language tutor for A2 level students.
Task Context: ${context}
Student Answer: "${text}"

Please analyze the student's answer.
1. Correct any grammar mistakes.
2. Give a short, encouraging comment in English.
3. If the text is perfect, just say "Perfect job!".
4. Keep it concise (max 3-4 bullet points).
            `.trim();
            return await this.fetchAI(prompt);
        } catch (e) {
            console.error('AI checkText failed:', e);
            return "Sorry, I couldn't connect to the AI. Please check your settings and try again.";
        }
    },

    async checkSentence(studentText, originalDutch, englishSource) {
        try {
            const prompt = `
Act as a strict Dutch teacher.
English Source: "${englishSource}"
Teacher's Translation: "${originalDutch}"
Student's Translation: "${studentText}"

Is the Student's Translation grammatically correct and does it mean the same thing?
Answer ONLY "YES" or "NO".
            `.trim();
            const text = await this.fetchAI(prompt);
            return text.trim().toUpperCase().includes('YES');
        } catch (e) {
            console.error('AI checkSentence failed:', e);
            return false;
        }
    },

    async analyzeSentence(studentText, originalDutch, englishSource) {
        try {
            const prompt = `
Act as a helpful Dutch tutor. The student made a mistake in translating this sentence.
English Source: "${englishSource}"
Correct Dutch: "${originalDutch}"
Student Wrote: "${studentText}"

Please provide:
1. The corrected version of the student's sentence.
2. Bullet points explaining the grammar mistakes.
3. A short encouraging comment.

Keep it concise and helpful. Use markdown for bolding key words.
            `.trim();
            return await this.fetchAI(prompt);
        } catch (e) {
            console.error('AI analyzeSentence failed:', e);
            return 'Could not load AI analysis. Please try again.';
        }
    },

    async smartAnalyze(studentText, originalDutch, englishSource) {
        try {
            const prompt = `
Dutch Tutor Mode.
Target: "${originalDutch}"
Student: "${studentText}"
Context: "${englishSource}"

Checks:
1. Leftover Placeholders -> FAIL.
2. English words -> FAIL.
3. Grammar Errors -> FAIL.

Critical Rule:
- If it is correct Dutch grammar, it is VALID (PASS).
- IGNORE content differences (e.g. "water" vs "coffee", or adding negation).
- Target is ONLY for reference.

Feedback Rules:
- FAIL (Grammar/English): Explain the error.
- PASS (Creative): GENERATE a unique, enthusiastic comment analyzing the specific changes. Do not use a fixed template.
- PASS (Exact Match): Praise the structure and suggest an advanced variation.

Reply JSON ONLY: {"isValid":boolean,"feedback":"HTML string with <b> tags"}
            `.trim();

            const response = await this.fetchAI(prompt);
            const cleanResponse = response.replace(/```json/g, '').replace(/```/g, '').trim();

            try {
                return JSON.parse(cleanResponse);
            } catch (parseError) {
                const isLikelyValid = response.toLowerCase().includes('true');
                return { isValid: isLikelyValid, feedback: response };
            }
        } catch (e) {
            console.error('Smart Analyze Failed:', e);
            return { isValid: false, feedback: 'Error analyzing sentence. Please try again.' };
        }
    },

    async getVerbHint(verb, tense, sentence) {
        try {
            const prompt = `
Act as a Dutch tutor.
Task: Give a subtle hint for conjugating the verb "${verb}" in the "${tense}" tense.
Context Sentence: "${sentence}"

Rules:
1. DO NOT give the answer.
2. Mention if it is a strong (sterk) or weak (zwak) verb if relevant.
3. Mention the rule (e.g. "'t kofschip", vowel change).
4. Max 1 sentence.
            `.trim();
            return await this.fetchAI(prompt);
        } catch (e) {
            return `Hint: Conjugate "${verb}" in ${tense}.`;
        }
    },

    async explainVerbError(verb, tense, userAnswer, correctAnswer, sentence) {
        try {
            const prompt = `
Dutch Tutor Mode.
Target Verb: "${verb}" (${tense})
Context: "${sentence}"
Student Answer: "${userAnswer}"
Correct Answer: "${correctAnswer}"

Task: Analyze the student's answer.

Scenario A: The student wrote a grammatically correct Dutch sentence but used a DIFFERENT verb than the target.
- Feedback: "Good sentence! However, you used '[UserVerb]', but we are practicing '[TargetVerb]'. Please try again."

Scenario B: The student made a mistake (grammar/spelling).
- Feedback: Identify the mistake and explain the rule. Keep it encouraging and short (max 3 lines).
            `.trim();
            return await this.fetchAI(prompt);
        } catch (e) {
            return `Incorrect. The correct answer is "${correctAnswer}".`;
        }
    }
};
