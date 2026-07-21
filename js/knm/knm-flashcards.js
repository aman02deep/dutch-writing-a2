// KNM Flashcards — Spaced Repetition for Compound Word Review
// Collects all unique words from lesson slides and presents flip cards.

class KNMFlashcards {
    constructor(containerId, lessonData) {
        this.container = document.getElementById(containerId);
        this.lessonData = lessonData; // interactiveLessons[chapterN]
        this.cards = [];
        this.queue = [];   // cards to show (Again bucket)
        this.done = [];    // cards marked as Got It
        this.currentIdx = 0;
        this.isFlipped = false;
    }

    // Collect all unique word entries across all slides
    collectWords() {
        const seen = new Set();
        const words = [];
        if (!this.lessonData || !this.lessonData.slides) return [];
        this.lessonData.slides.forEach(slide => {
            if (!slide.words) return;
            slide.words.forEach(entry => {
                if (!seen.has(entry.word)) {
                    seen.add(entry.word);
                    words.push(entry);
                }
            });
        });
        return words;
    }

    launch() {
        this.cards = this.collectWords();
        if (this.cards.length === 0) {
            this.container.style.display = 'block';
            this.container.innerHTML = `<div class="fc-empty">No flashcard words available for this chapter yet. Try Chapter 1 — Wonen!</div>`;
            return;
        }
        this.queue = [...this.cards];
        this.done = [];
        this.currentIdx = 0;
        this.render();
        this.showCard(0);
    }

    render() {
        this.container.style.display = 'block';
        this.container.innerHTML = `
            <div class="fc-wrapper" id="fc-wrapper">
                <div class="fc-header">
                    <span class="fc-title">&#x1F0CF; Word Flashcards</span>
                    <div class="fc-progress-info">
                        <span class="fc-badge fc-badge-queue" id="fc-queue-count">${this.queue.length} to review</span>
                        <span class="fc-badge fc-badge-done" id="fc-done-count">0 done</span>
                    </div>
                </div>

                <div class="fc-progress-bar-wrap">
                    <div class="fc-progress-bar-fill" id="fc-progress-bar" style="width:0%"></div>
                </div>

                <div class="fc-scene" id="fc-scene">
                    <div class="fc-card" id="fc-card" tabindex="0" role="button" aria-label="Flashcard - press to flip">
                        <div class="fc-front" id="fc-front">
                            <div class="fc-front-label">Dutch word</div>
                            <div class="fc-word" id="fc-word"></div>
                            <div class="fc-hint">Tap to reveal breakdown</div>
                        </div>
                        <div class="fc-back" id="fc-back">
                            <div class="fc-back-word" id="fc-back-word"></div>
                            <div class="fc-parts-row" id="fc-parts-row"></div>
                            <div class="fc-tip-row" id="fc-tip-row"></div>
                        </div>
                    </div>
                </div>

                <div class="fc-nav" id="fc-nav" style="display: flex; justify-content: center; gap: 16px; margin-bottom: 16px;">
                    <button class="fc-btn" id="fc-btn-prev" style="background: #e5e7eb; color: #4b5563;">&#x2B05; Prev</button>
                    <button class="fc-btn" id="fc-btn-next" style="background: #e5e7eb; color: #4b5563;">Next &#x27A1;</button>
                </div>

                <div class="fc-controls" id="fc-controls" style="display:none;">
                    <button class="fc-btn fc-btn-again" id="fc-btn-again">&#x1F501; Again</button>
                    <button class="fc-btn fc-btn-flip" id="fc-btn-flip">&#x1F504; Flip</button>
                    <button class="fc-btn fc-btn-got" id="fc-btn-got">&#x2705; Got it!</button>
                </div>

                <div class="fc-completed" id="fc-completed" style="display:none;">
                    <div class="fc-completed-icon">&#x1F389;</div>
                    <h3 class="fc-completed-title">Round complete!</h3>
                    <p class="fc-completed-sub" id="fc-completed-sub"></p>
                    <div class="fc-completed-actions">
                        <button class="fc-btn fc-btn-got" id="fc-btn-restart">&#x1F501; Review Again</button>
                        <button class="fc-btn fc-btn-flip" id="fc-btn-close">&#x2715; Close</button>
                    </div>
                </div>
            </div>
        `;

        // Cache elements
        this.cardEl = document.getElementById('fc-card');
        this.wordEl = document.getElementById('fc-word');
        this.backWordEl = document.getElementById('fc-back-word');
        this.partsEl = document.getElementById('fc-parts-row');
        this.tipEl = document.getElementById('fc-tip-row');
        this.controlsEl = document.getElementById('fc-controls');
        this.completedEl = document.getElementById('fc-completed');
        this.queueCountEl = document.getElementById('fc-queue-count');
        this.doneCountEl = document.getElementById('fc-done-count');
        this.progressBar = document.getElementById('fc-progress-bar');
        this.btnFlip = document.getElementById('fc-btn-flip');
        this.btnAgain = document.getElementById('fc-btn-again');
        this.btnGot = document.getElementById('fc-btn-got');
        this.btnPrev = document.getElementById('fc-btn-prev');
        this.btnNext = document.getElementById('fc-btn-next');

        // Events
        this.cardEl.addEventListener('click', () => this.flip());
        this.cardEl.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.flip(); }
        });
        this.btnFlip.addEventListener('click', e => { e.stopPropagation(); this.flip(); });
        this.btnAgain.addEventListener('click', e => { e.stopPropagation(); this.markAgain(); });
        this.btnGot.addEventListener('click', e => { e.stopPropagation(); this.markGotIt(); });
        this.btnPrev.addEventListener('click', e => { e.stopPropagation(); this.prevCard(); });
        this.btnNext.addEventListener('click', e => { e.stopPropagation(); this.nextCard(); });

        const restartBtn = document.getElementById('fc-btn-restart');
        const closeBtn = document.getElementById('fc-btn-close');
        if (restartBtn) restartBtn.addEventListener('click', () => {
            this.queue = [...this.cards];
            this.done = [];
            this.currentIdx = 0;
            this.cardEl.style.display = '';
            this.completedEl.style.display = 'none';
            this.showCard(0);
        });
        if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    }

    showCard(idx) {
        if (idx >= this.queue.length) {
            this.showCompleted();
            return;
        }
        this.currentIdx = idx;
        this.isFlipped = false;
        const entry = this.queue[idx];

        // Front
        this.wordEl.textContent = entry.word;

        // Back — build parts breakdown
        this.backWordEl.textContent = entry.word;
        this.partsEl.innerHTML = entry.parts.map(p =>
            `<span class="fc-part"><span class="fc-part-nl">${p.nl}</span><span class="fc-part-en">${p.en}</span></span>`
        ).join('<span class="fc-plus">+</span>');
        this.tipEl.textContent = '\uD83D\uDCA1 ' + entry.tip;

        // Reset flip state
        this.cardEl.classList.remove('flipped');
        this.controlsEl.style.display = 'none';

        // Update progress display
        const total = this.cards.length;
        const doneCount = this.done.length;
        const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;
        this.progressBar.style.width = pct + '%';
        this.queueCountEl.textContent = this.queue.length + ' to review';
        this.doneCountEl.textContent = doneCount + ' done';
        
        // Disable nav buttons if at bounds
        if (this.btnPrev) this.btnPrev.disabled = (this.currentIdx === 0);
        if (this.btnNext) this.btnNext.disabled = (this.currentIdx >= this.queue.length - 1);
    }

    prevCard() {
        if (this.currentIdx > 0) {
            this.showCard(this.currentIdx - 1);
        }
    }

    nextCard() {
        if (this.currentIdx < this.queue.length - 1) {
            this.showCard(this.currentIdx + 1);
        }
    }

    flip() {
        this.isFlipped = !this.isFlipped;
        this.cardEl.classList.toggle('flipped', this.isFlipped);
        this.controlsEl.style.display = this.isFlipped ? 'flex' : 'none';
    }

    markAgain() {
        // Move current card to end of queue
        const card = this.queue[this.currentIdx];
        this.queue.splice(this.currentIdx, 1);
        this.queue.push(card);
        const nextIdx = Math.min(this.currentIdx, this.queue.length - 1);
        this.showCard(nextIdx);
    }

    markGotIt() {
        const card = this.queue.splice(this.currentIdx, 1)[0];
        this.done.push(card);
        if (this.queue.length === 0) {
            this.showCompleted();
        } else {
            const nextIdx = Math.min(this.currentIdx, this.queue.length - 1);
            this.showCard(nextIdx);
        }
    }

    showCompleted() {
        if (this.cardEl) this.cardEl.style.display = 'none';
        this.controlsEl.style.display = 'none';
        this.completedEl.style.display = 'flex';
        this.progressBar.style.width = '100%';
        this.queueCountEl.textContent = '0 to review';
        this.doneCountEl.textContent = this.done.length + ' done';
        const subEl = document.getElementById('fc-completed-sub');
        if (subEl) {
            subEl.textContent = 'You mastered all ' + this.done.length + ' words this round! Review again to lock them in.';
        }
    }

    close() {
        if (typeof switchTab === 'function') {
            switchTab('practice');
        }
    }
}
