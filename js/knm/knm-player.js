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
        const html = `
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
    }

    bindEvents() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.langToggle.addEventListener('click', () => {
            this.showEnglish = !this.showEnglish;
            this.enEl.style.display = this.showEnglish ? 'block' : 'none';
            this.langToggle.innerHTML = this.showEnglish ? '🇳🇱 Hide English' : '🇬🇧 Show English';
        });

        this.fsToggle.addEventListener('click', () => this.toggleFullScreen());

        this.speedBtn.addEventListener('click', () => {
            this.currentSpeedIdx = (this.currentSpeedIdx + 1) % this.playbackRates.length;
            const newSpeed = this.playbackRates[this.currentSpeedIdx];
            this.audioElement.playbackRate = newSpeed;
            this.speedBtn.textContent = newSpeed + 'x';
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
            this.nlEl.textContent = slide.nl;
            this.enEl.textContent = slide.en;

            this.imgEl.style.opacity = 1;
            this.nlEl.style.opacity = 1;
            this.enEl.style.opacity = 1;
        }, 200);

        this.currentText.textContent = this.currentSlide + 1;
        this.progressFill.style.width = `${((this.currentSlide + 1) / this.lesson.slides.length) * 100}%`;

        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.lesson.slides.length - 1;
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
        const playerDiv = this.container.querySelector('.knm-player');
        if (!document.fullscreenElement) {
            if (playerDiv.requestFullscreen) {
                playerDiv.requestFullscreen();
            } else if (playerDiv.webkitRequestFullscreen) { /* Safari */
                playerDiv.webkitRequestFullscreen();
            } else if (playerDiv.msRequestFullscreen) { /* IE11 */
                playerDiv.msRequestFullscreen();
            }
            playerDiv.classList.add('fullscreen');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
            playerDiv.classList.remove('fullscreen');
        }
    }
}
