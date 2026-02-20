/**
 * Shared Quiz Engine — reusable quiz logic for verb and preposition quizzes.
 * Handles: shuffle, question display, answer check, hints, AI feedback,
 *          progress tracking, results, and mistakes review.
 *
 * Usage:
 *   const quiz = new QuizEngine({
 *       data: verbQuizData,                  // { level: [questions] }
 *       hintFormatter: (q) => '...',         // custom hint HTML
 *       wrongFormatter: (q) => '...',        // custom wrong-answer HTML
 *       aiErrorContext: (q, userAns) => '...',// prompt context for AI
 *       questionsPerRound: 10
 *   });
 */
class QuizEngine {
    constructor(options) {
        this.data = options.data;
        this.hintFormatter = options.hintFormatter || (q => `<strong>💡 Hint:</strong> ${q.hint}`);
        this.wrongFormatter = options.wrongFormatter || (q => `The correct answer is: <strong>${q.answer}</strong>`);
        this.aiErrorContext = options.aiErrorContext || null;
        this.questionsPerRound = options.questionsPerRound || 10;

        this.currentQuestions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;
        this.selectedLevel = null;
        this.mistakes = [];

        this._init();
    }

    // ── Initialisation ───────────────────────────────────────────────
    _init() {
        const levelBtns = document.querySelectorAll('.level-btn');
        // Pick the first active one, or fall back to the first button
        const activeBtn = document.querySelector('.level-btn.active') || levelBtns[0];
        this.selectedLevel = activeBtn.dataset.level;

        levelBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.selectedLevel = btn.dataset.level;
                levelBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.start();
            });
        });

        this.start();
    }

    // ── Start / Restart ──────────────────────────────────────────────
    start() {
        const allQuestions = this.data[this.selectedLevel];
        if (!allQuestions) {
            console.warn(`No questions for level: ${this.selectedLevel}`);
            return;
        }
        this.currentQuestions = this._shuffle([...allQuestions]).slice(0, this.questionsPerRound);
        this.currentIndex = 0;
        this.score = 0;
        this.mistakes = [];

        document.getElementById('quiz-content').style.display = 'block';
        document.getElementById('results-screen').classList.remove('show');

        this._showQuestion();
    }

    // ── Show Question ────────────────────────────────────────────────
    _showQuestion() {
        this.answered = false;
        const q = this.currentQuestions[this.currentIndex];

        // Progress
        const total = this.currentQuestions.length;
        document.getElementById('progress-text').textContent =
            `Question ${this.currentIndex + 1} of ${total}`;
        document.getElementById('score-display').textContent =
            `Score: ${this.score}/${total}`;
        document.getElementById('progress-fill').style.width =
            ((this.currentIndex) / total * 100) + '%';

        // Question number
        document.getElementById('question-number').textContent =
            `Question ${this.currentIndex + 1}`;

        // Sentence with input field
        const parts = q.sentence.split('___');
        document.getElementById('sentence-display').innerHTML = `
            ${parts[0]}
            <input type="text" id="answer-input" autocomplete="off" />
            ${parts[1] || ''}
        `;
        document.getElementById('english-translation').textContent = q.english;

        // Reset
        document.getElementById('feedback-message').classList.remove('correct', 'incorrect');
        document.getElementById('feedback-message').style.display = 'none';
        document.getElementById('hint-display').classList.remove('show');

        // Focus
        const input = document.getElementById('answer-input');
        input.focus();

        // Buttons
        document.getElementById('btn-check').classList.remove('btn-disabled');
        document.getElementById('btn-next').classList.add('btn-disabled');

        // Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !this.answered) this.checkAnswer();
        });
    }

    // ── Show Hint ────────────────────────────────────────────────────
    showHint() {
        const q = this.currentQuestions[this.currentIndex];
        const hintDisplay = document.getElementById('hint-display');
        hintDisplay.innerHTML = this.hintFormatter(q);
        hintDisplay.classList.add('show');
    }

    // ── Check Answer ─────────────────────────────────────────────────
    async checkAnswer() {
        if (this.answered) return;
        this.answered = true;

        const q = this.currentQuestions[this.currentIndex];
        const input = document.getElementById('answer-input');
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = q.answer.toLowerCase();
        const feedback = document.getElementById('feedback-message');

        if (userAnswer === correctAnswer) {
            this.score++;
            input.classList.add('correct');
            feedback.classList.add('correct');
            feedback.innerHTML = `✅ <strong>Correct!</strong> Well done!`;
            feedback.style.display = 'block';
        } else {
            // Track mistake
            this.mistakes.push({ question: q, userAnswer });

            input.classList.add('incorrect');
            feedback.classList.add('incorrect');
            feedback.innerHTML = `
                ❌ <strong>Incorrect.</strong>
                <div class="correct-answer">${this.wrongFormatter(q)}</div>
            `;
            feedback.style.display = 'block';

            // AI feedback (non-blocking)
            if (this.aiErrorContext && typeof aiService !== 'undefined') {
                this._fetchAIFeedback(q, userAnswer, feedback);
            }
        }

        // Update score
        document.getElementById('score-display').textContent =
            `Score: ${this.score}/${this.currentQuestions.length}`;

        // Toggle buttons
        document.getElementById('btn-check').classList.add('btn-disabled');
        document.getElementById('btn-next').classList.remove('btn-disabled');
    }

    // ── AI error explanation ─────────────────────────────────────────
    async _fetchAIFeedback(q, userAnswer, feedbackEl) {
        const context = this.aiErrorContext(q, userAnswer);
        const providerName = aiService.getProviderName();

        // Append loading indicator
        const aiDiv = document.createElement('div');
        aiDiv.className = 'ai-explanation loading';
        aiDiv.innerHTML = `<span class="loading-dots">🤖 Asking ${providerName} why...</span>`;
        feedbackEl.appendChild(aiDiv);

        try {
            const prompt = `You are a Dutch A2 language tutor. A student answered a fill-in-the-blank question incorrectly.

${context}

Explain briefly (2-3 sentences max) WHY the correct answer is right and what mistake the student made. Be encouraging. Reply in English.`;

            const response = await aiService.fetchAI(prompt);
            aiDiv.className = 'ai-explanation';
            aiDiv.innerHTML = `<strong>🤖 AI:</strong> ${response
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br>')}`;
        } catch (e) {
            aiDiv.className = 'ai-explanation error';
            aiDiv.textContent = `❌ Could not get AI feedback: ${e.message}`;
        }
    }

    // ── Next Question ────────────────────────────────────────────────
    nextQuestion() {
        if (!this.answered) return;
        this.currentIndex++;
        if (this.currentIndex < this.currentQuestions.length) {
            this._showQuestion();
        } else {
            this._showResults();
        }
    }

    // ── Results ──────────────────────────────────────────────────────
    _showResults() {
        document.getElementById('quiz-content').style.display = 'none';
        const screen = document.getElementById('results-screen');
        screen.classList.add('show');

        const total = this.currentQuestions.length;
        const pct = Math.round((this.score / total) * 100);

        document.getElementById('final-score').textContent = `${this.score}/${total}`;
        document.getElementById('percentage').textContent = `${pct}%`;

        let message = '';
        if (pct >= 90) message = '🎉 Excellent! You have mastered this level!';
        else if (pct >= 70) message = '👍 Great job! Keep practicing to improve further.';
        else if (pct >= 50) message = '💪 Good effort! Review and try again.';
        else message = '📚 Keep studying! Practice makes perfect.';

        document.getElementById('results-message').textContent = message;

        // ── Mistakes Review ──────────────────────────────────────────
        this._renderMistakesReview();
    }

    _renderMistakesReview() {
        // Remove old review if re-taking
        const old = document.getElementById('mistakes-review');
        if (old) old.remove();

        if (this.mistakes.length === 0) return;

        const container = document.createElement('div');
        container.id = 'mistakes-review';
        container.className = 'mistakes-review';
        container.innerHTML = `
            <h3>📋 Review Your Mistakes (${this.mistakes.length})</h3>
            <div class="mistakes-list">
                ${this.mistakes.map((m, i) => `
                    <div class="mistake-item">
                        <div class="mistake-sentence">${m.question.sentence.replace('___', `<strong class="mistake-correct">${m.question.answer}</strong>`)}</div>
                        <div class="mistake-details">
                            <span class="mistake-yours">You wrote: <strong>${m.userAnswer || '(empty)'}</strong></span>
                            <span class="mistake-english">${m.question.english}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Insert after results actions
        const resultsScreen = document.getElementById('results-screen');
        resultsScreen.appendChild(container);
    }

    // ── Utility ──────────────────────────────────────────────────────
    _shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}
