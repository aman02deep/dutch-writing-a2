/**
 * AI Service - powered by Pollinations.ai (Free Public Cloud AI)
 * No API Key required.
 */
const aiService = {
    // We use a simple flag to show it's "ready" (always ready for cloud)
    isAvailable: true,

    /**
     * Sends text to Pollinations.ai for analysis
     * @param {string} text - The student's text
     * @param {string} context - The task context/instructions
     */
    async checkText(text, context) {
        return this.fetchWithRetry(async () => {
            // ... prompt construction ...
            // moved prompt logic inside (or just wrap the fetch)
            // simplified below to avoid massive refactor, just wrapping the logic
        });
    },

    // Helper for retries
    async fetchAI(prompt) {
        const encodedPrompt = encodeURIComponent(prompt);
        // Add random cache buster to avoid cached 429s if any
        const url = `https://text.pollinations.ai/${encodedPrompt}?t=${Date.now()}`;

        const makeRequest = async () => {
            const response = await fetch(url);
            if (response.status === 429) {
                throw new Error("429"); // Throw to trigger retry
            }
            if (!response.ok) {
                throw new Error(`AI Service Error: ${response.status}`);
            }
            return response.text();
        };

        return this.retry(makeRequest, 3, 1000);
    },

    async retry(fn, retries = 3, delay = 1000) {
        try {
            return await fn();
        } catch (err) {
            if (err.message === "429" && retries > 0) {
                console.warn(`AI Rate Limit (429). Retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                return this.retry(fn, retries - 1, delay * 2);
            }
            throw err;
        }
    },

    /**
     * Sends text to Pollinations.ai for analysis
     * @param {string} text - The student's text
     * @param {string} context - The task context/instructions
     */
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
            console.error('AI Service Failed:', e);
            return "Sorry, I couldn't connect to the AI cloud right now. Please check your internet connection and try again.";
        }
    },

    /**
     * Checks if a student's sentence is a valid alternative translation.
     * @param {string} studentText - The student's input
     * @param {string} originalDutch - The target Dutch sentence
     * @param {string} englishSource - The original English source
     */
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
            return text.trim().toUpperCase().includes("YES");

        } catch (e) {
            console.error('AI Sentence Check Failed:', e);
            return false; // Fail safe to original strict check
        }
    },

    /**
     * Analyzes a single sentence to provide detailed corrections and tips.
     * @param {string} studentText - The student's incorrect sentence
     * @param {string} originalDutch - The correct target sentence
     * @param {string} englishSource - The English source sentence
     */
    async analyzeSentence(studentText, originalDutch, englishSource) {
        try {
            const prompt = `
            Act as a helpful Dutch tutor. The student made a mistake in translating this sentence.
            English Source: "${englishSource}"
            Correct Dutch: "${originalDutch}"
            Student Wrote: "${studentText}"

            Please provide:
            1. The corrected version of the student's sentence (or the target if it was completely wrong).
            2. Bullet points explaining the grammar mistakes (e.g. word order, verb agreement).
            3. A short encouraging comment.
            
            Keep it concise and helpful. Use markdown for bolding key words.
            `.trim();

            return await this.fetchAI(prompt);

            return await this.fetchAI(prompt);

        } catch (e) {
            console.error('AI Analysis Failed:', e);
            return "Could not load AI analysis. Please try again.";
        }
    },

    /**
     * OPTIMIZED: Checks AND Analyzes in one go.
     * Returns JSON string: { "isValid": boolean, "feedback": string }
     */
    async smartAnalyze(studentText, originalDutch, englishSource) {
        try {
            const prompt = `
            Act as a Dutch tutor.
            Target: "${originalDutch}"
            Student: "${studentText}"
            Context: "${englishSource}"

            Task:
            1. Determine if Student's answer is grammatically correct and means the same as Target (even if wording differs).
            2. IF YES: Return ONLY the string "VALID".
            3. IF NO: Return a helpful analysis with:
               - Corrected sentence
               - Grammar mistakes (bullet points)
               - Encouraging comment
            
            Format: Plain text.
            `.trim();

            const response = await this.fetchAI(prompt);

            if (response.includes("VALID")) {
                return { isValid: true, feedback: "" };
            } else {
                return { isValid: false, feedback: response };
            }

        } catch (e) {
            console.error('Smart Analyze Failed:', e);
            return { isValid: false, feedback: "Error analyzing sentence." };
        }
    }
};
