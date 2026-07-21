// Interactive Video Player Logic for KNM
class KNMPlayer {
    constructor(containerId, lessonData) {
        this.container = document.getElementById(containerId);
        this.lesson = lessonData;
        this.currentSlide = 0;
        this.isPlaying = false;
        this.audioElement = new Audio();
        this.showEnglish = false;

        this.playbackRates = [1.0, 0.75, 0.5];
        this.currentSpeedIdx = 0;

        this.initUI();
        this.bindEvents();
    }

    initUI() {
        // Build transcript items HTML
        const transcriptItems = this.lesson.slides.map((slide, i) => `
            <div class="knm-transcript-item" data-index="${i}" title="Jump to slide ${i + 1}">
                <span class="knm-transcript-num">${i + 1}</span>
                <div class="knm-transcript-text">
                    <div class="knm-transcript-nl">${slide.nl}</div>
                    <div class="knm-transcript-en" style="display:none;">${slide.en}</div>
                </div>
            </div>
        `).join('');

        const html = `
            <div class="knm-player-wrapper">
                <div class="knm-player">
                    <div class="knm-player-header">
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <button class="btn-toggle-lang" id="player-fullscreen-toggle" title="Toggle Fullscreen">
                                ⛶
                            </button>
                            <h3>🎬 Interactive Lesson: ${this.lesson.title}</h3>
                        </div>
                        <div class="knm-player-controls-top">
                            <button class="btn-toggle-lang" id="player-lang-toggle">
                                🇬🇧 Show English
                            </button>
                        </div>
                    </div>
                    
                    <div class="knm-player-screen" id="player-screen">
                        <img id="player-image" src="${this.lesson.slides[0].image}" alt="Lesson visual" />
                        <div class="knm-player-subtitles">
                            <div class="sub-nl" id="sub-nl">${this.lesson.slides[0].nl}</div>
                            <div class="sub-en" id="sub-en" style="display: none;">${this.lesson.slides[0].en}</div>
                        </div>
                    </div>

                    <div class="knm-player-progress">
                        <div class="progress-track" id="progress-track">
                            <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
                        </div>
                        <div class="progress-text">
                            <span id="slide-current">1</span> / ${this.lesson.slides.length}
                        </div>
                    </div>
                    
                    <div class="knm-player-controls">
                        <button class="player-btn" id="btn-speed" title="Playback Speed" style="min-width: 60px;">1x</button>
                        <button class="player-btn" id="btn-prev" disabled>⏮️ Prev</button>
                        <button class="player-btn main-play" id="btn-play">▶️ Play Lesson</button>
                        <button class="player-btn" id="btn-next">Next ⏭️</button>
                    </div>

                    <div class="word-spotlight" id="word-spotlight" style="display:none;">
                        <div class="word-spotlight-title">🔑 Key Words</div>
                        <div class="word-spotlight-chips" id="word-spotlight-chips"></div>
                    </div>
                </div>

                <div class="knm-transcript-panel" id="knm-transcript-panel">
                    <div class="knm-transcript-header">
                        <span>📋 Transcript</span>
                        <div style="display:flex;gap:6px;align-items:center;">
                            <span class="knm-transcript-count">${this.lesson.slides.length} slides</span>
                            <button class="knm-transcript-toggle" id="transcript-collapse-btn" title="Minimize transcript">Hide</button>
                        </div>
                    </div>
                    <div class="knm-transcript-list" id="knm-transcript-list">
                        ${transcriptItems}
                    </div>
                </div>
            </div>
        `;

        this.container.innerHTML = html;

        // Cache DOM elements
        this.imgEl = document.getElementById('player-image');
        this.nlEl = document.getElementById('sub-nl');
        this.enEl = document.getElementById('sub-en');
        this.playBtn = document.getElementById('btn-play');
        this.prevBtn = document.getElementById('btn-prev');
        this.nextBtn = document.getElementById('btn-next');
        this.progressFill = document.getElementById('progress-fill');
        this.currentText = document.getElementById('slide-current');
        this.langToggle = document.getElementById('player-lang-toggle');
        this.fsToggle = document.getElementById('player-fullscreen-toggle');
        this.speedBtn = document.getElementById('btn-speed');
        this.transcriptList = document.getElementById('knm-transcript-list');
        this.transcriptPanel = document.getElementById('knm-transcript-panel');
        this.collapseBtn = document.getElementById('transcript-collapse-btn');
        this.wordSpotlight = document.getElementById('word-spotlight');
        this.wordSpotlightChips = document.getElementById('word-spotlight-chips');

        // Inject the floating re-open button on the video player edge
        this.openBtn = document.createElement('button');
        this.openBtn.className = 'knm-transcript-open-btn';
        this.openBtn.id = 'transcript-open-btn';
        this.openBtn.title = 'Show transcript';
        this.openBtn.textContent = 'Transcript';
        this.openBtn.style.display = 'none';
        const playerEl = this.container.querySelector('.knm-player');
        playerEl.style.position = 'relative';
        playerEl.appendChild(this.openBtn);

        // Bind transcript item clicks
        this.transcriptList.querySelectorAll('.knm-transcript-item').forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.dataset.index, 10);
                this.goToSlide(idx);
            });
        });

        // Highlight first item
        this.syncTranscriptHighlight();
    }

    toggleTranscript() {
        const collapsed = this.transcriptPanel.classList.toggle('transcript-collapsed');
        if (collapsed) {
            this.collapseBtn.textContent = '';
            this.openBtn.style.display = 'block';
        } else {
            this.collapseBtn.textContent = 'Hide';
            this.openBtn.style.display = 'none';
            // Re-highlight current after opening
            this.syncTranscriptHighlight();
        }
    }

    bindEvents() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.langToggle.addEventListener('click', () => {
            this.showEnglish = !this.showEnglish;
            this.enEl.style.display = this.showEnglish ? 'block' : 'none';
            this.langToggle.innerHTML = this.showEnglish ? '🇳🇱 Hide English' : '🇬🇧 Show English';
            // Sync English lines in transcript
            this.transcriptList.querySelectorAll('.knm-transcript-en').forEach(el => {
                el.style.display = this.showEnglish ? 'block' : 'none';
            });
        });

        this.fsToggle.addEventListener('click', () => this.toggleFullScreen());

        if (this.collapseBtn) this.collapseBtn.addEventListener('click', () => this.toggleTranscript());
        if (this.openBtn) this.openBtn.addEventListener('click', () => this.toggleTranscript());

        this.speedBtn.addEventListener('click', () => {
            this.currentSpeedIdx = (this.currentSpeedIdx + 1) % this.playbackRates.length;
            const newSpeed = this.playbackRates[this.currentSpeedIdx];
            this.audioElement.playbackRate = newSpeed;
            this.speedBtn.textContent = newSpeed + 'x';
        });

        // Word chip tooltip: click/tap toggles tooltip (mobile-friendly)
        this.nlEl.addEventListener('click', e => {
            const chip = e.target.closest('.word-chip');
            if (chip) {
                e.stopPropagation();
                const isOpen = chip.classList.contains('open');
                // Close all others first
                this.nlEl.querySelectorAll('.word-chip.open').forEach(c => c.classList.remove('open'));
                if (!isOpen) chip.classList.add('open');
            }
        });
        // Keyboard support for chips
        this.nlEl.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                const chip = e.target.closest('.word-chip');
                if (chip) { e.preventDefault(); chip.click(); }
            }
        });
        // Dismiss tooltips when clicking outside
        document.addEventListener('click', () => {
            this.nlEl.querySelectorAll('.word-chip.open').forEach(c => c.classList.remove('open'));
        });

        this.audioElement.addEventListener('ended', () => {
            // Auto-advance if not at the end
            if (this.currentSlide < this.lesson.slides.length - 1) {
                // Short pause before next sentence
                setTimeout(() => {
                    this.nextSlide();
                    this.playAudio();
                }, 800);
            } else {
                this.isPlaying = false;
                this.playBtn.innerHTML = '🔄 Replay Lesson';
            }
        });
    }


    updateUI() {
        const slide = this.lesson.slides[this.currentSlide];

        // Fade out/in effect
        this.imgEl.style.opacity = 0;
        this.nlEl.style.opacity = 0;
        this.enEl.style.opacity = 0;

        setTimeout(() => {
            this.imgEl.src = slide.image;
            // Highlight hard words in the subtitle
            this.nlEl.innerHTML = this.highlightWords(slide.nl, slide.words || []);
            this.enEl.textContent = slide.en;

            this.imgEl.style.opacity = 1;
            this.nlEl.style.opacity = 1;
            this.enEl.style.opacity = 1;
        }, 200);

        this.currentText.textContent = this.currentSlide + 1;
        this.progressFill.style.width = `${((this.currentSlide + 1) / this.lesson.slides.length) * 100}%`;

        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.lesson.slides.length - 1;

        // Render word spotlight panel
        this.renderWordSpotlight(slide);

        // Sync transcript highlight
        this.syncTranscriptHighlight();
    }

    // Wraps hard words in the subtitle text with clickable tooltip chips
    highlightWords(text, words) {
        if (!words || words.length === 0) return this.escapeHtml(text);
        let result = this.escapeHtml(text);
        // Sort by word length descending to avoid partial replacements
        const sorted = [...words].sort((a, b) => b.word.length - a.word.length);
        sorted.forEach(entry => {
            const safe = entry.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${safe})`, 'gi');
            const partsHtml = entry.parts.map(p => `<span class="wt-part"><span class="wt-nl">${p.nl}</span><span class="wt-en">${p.en}</span></span>`).join('<span class="wt-plus">+</span>');
            const tooltipHtml = `<span class="word-chip" tabindex="0" role="button" aria-label="Word breakdown: ${entry.word}">
                $1<span class="word-tooltip" role="tooltip"><span class="wt-word">${entry.word}</span><span class="wt-parts">${partsHtml}</span><span class="wt-tip">${entry.tip}</span></span></span>`;
            result = result.replace(regex, tooltipHtml);
        });
        return result;
    }

    escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // Renders the word spotlight panel below the player controls
    renderWordSpotlight(slide) {
        if (!this.wordSpotlight || !this.wordSpotlightChips) return;
        const words = slide.words || [];
        if (words.length === 0) {
            this.wordSpotlight.style.display = 'none';
            return;
        }
        this.wordSpotlight.style.display = 'block';
        this.wordSpotlightChips.innerHTML = words.map(entry => {
            const partsStr = entry.parts.map(p => `${p.nl} <em>(${p.en})</em>`).join(' + ');
            return `<div class="spotlight-chip">
                <span class="spotlight-word">${entry.word}</span>
                <span class="spotlight-breakdown">${partsStr}</span>
                <span class="spotlight-tip">💡 ${entry.tip}</span>
            </div>`;
        }).join('');
    }

    syncTranscriptHighlight() {
        if (!this.transcriptList) return;
        const items = this.transcriptList.querySelectorAll('.knm-transcript-item');
        items.forEach((item, i) => {
            if (i === this.currentSlide) {
                item.classList.add('active');
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }

    goToSlide(index) {
        if (index < 0 || index >= this.lesson.slides.length) return;
        this.currentSlide = index;
        this.audioElement.pause();
        this.updateUI();
        if (this.isPlaying) this.playAudio();
    }

    async playAudio() {
        const slide = this.lesson.slides[this.currentSlide];
        this.audioElement.src = slide.audio;
        // Ensure playback rate persists across src changes
        this.audioElement.playbackRate = this.playbackRates[this.currentSpeedIdx];
        this.isPlaying = true;
        this.playBtn.innerHTML = '⏸️ Pause';

        try {
            await this.audioElement.play();
        } catch (e) {
            // Ignore AbortError caused by rapid clicking
            if (e.name !== 'AbortError') {
                console.error("Audio play failed:", e);
            }
        }
    }

    togglePlay() {
        if (this.currentSlide === this.lesson.slides.length - 1 && !this.isPlaying && this.audioElement.ended) {
            // Restart from beginning
            this.currentSlide = 0;
            this.updateUI();
            this.playAudio();
            return;
        }

        if (this.isPlaying) {
            this.audioElement.pause();
            this.isPlaying = false;
            this.playBtn.innerHTML = '▶️ Resume';
        } else {
            this.playAudio();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.audioElement.pause();
            this.updateUI();
            if (this.isPlaying) this.playAudio();
        }
    }

    nextSlide() {
        if (this.currentSlide < this.lesson.slides.length - 1) {
            this.currentSlide++;
            this.audioElement.pause();
            this.updateUI();
            if (this.isPlaying) this.playAudio();
        }
    }

    toggleFullScreen() {
        const wrapperDiv = this.container.querySelector('.knm-player-wrapper');
        if (!document.fullscreenElement) {
            if (wrapperDiv.requestFullscreen) {
                wrapperDiv.requestFullscreen();
            } else if (wrapperDiv.webkitRequestFullscreen) { /* Safari */
                wrapperDiv.webkitRequestFullscreen();
            } else if (wrapperDiv.msRequestFullscreen) { /* IE11 */
                wrapperDiv.msRequestFullscreen();
            }
            wrapperDiv.classList.add('fullscreen');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
            wrapperDiv.classList.remove('fullscreen');
        }
    }
}
