// KNM Chapter Page Logic

let currentChapter = 1;
let userAnswers = {};
let timerInterval;
let seconds = 0;

function init() {
    // Get chapter from URL
    const params = new URLSearchParams(window.location.search);
    currentChapter = parseInt(params.get('chapter')) || 1;

    loadChapter();
    startTimer();
}

function loadChapter() {
    const chapter = knmChapters[currentChapter];

    if (!chapter) {
        document.getElementById('chapter-title').textContent = 'Chapter Not Found';
        return;
    }

    // Update title
    document.getElementById('chapter-title').textContent = chapter.title;

    // Load study content
    loadStudyContent(chapter);

    // Load practice questions
    loadPracticeQuestions(chapter);

    // Load saved progress
    loadProgress();
}

function loadStudyContent(chapter) {
    const studyContent = document.getElementById('study-content');

    if (!chapter.studyMaterial || chapter.studyMaterial.length === 0) {
        studyContent.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #666;">
                <h3>Study materials coming soon!</h3>
                <p>In the meantime, try the practice questions in the Practice tab.</p>
            </div>
        `;
        return;
    }

    let html = '';
    chapter.studyMaterial.forEach(section => {
        html += `
            <div class="study-section">
                <h3>${section.title}</h3>
                ${section.content}
            </div>
        `;
    });

    studyContent.innerHTML = html;
}

function loadPracticeQuestions(chapter) {
    const container = document.getElementById('questions-container');

    if (!chapter.questions || chapter.questions.length === 0) {
        container.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #666;">
                <h3>Practice questions coming soon!</h3>
            </div>
        `;
        return;
    }

    let html = '';
    chapter.questions.forEach((q, index) => {
        html += `
            <div class="question-container" data-question="${index}">
                <div class="question-number">Question ${index + 1} of ${chapter.questions.length}</div>
                <div class="question-text">${q.question}</div>
                <div class="answers">
        `;

        q.options.forEach((option, optIndex) => {
            const letter = String.fromCharCode(65 + optIndex); // A, B, C, D
            html += `
                <div class="answer-option" data-question="${index}" data-answer="${optIndex}" onclick="selectAnswer(${index}, ${optIndex})">
                    <span class="answer-option-letter">${letter}</span>
                    <span>${option}</span>
                </div>
            `;
        });

        html += `
                </div>
                <div class="explanation-box" id="explanation-${index}">
                    <strong>Explanation:</strong> ${q.explanation || 'Correct!'}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function selectAnswer(questionIndex, answerIndex) {
    // Clear previous selection for this question
    const questionDiv = document.querySelector(`[data-question="${questionIndex}"]`);
    questionDiv.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Mark new selection
    const selectedOption = questionDiv.querySelector(`[data-answer="${answerIndex}"]`);
    selectedOption.classList.add('selected');

    // Store answer
    userAnswers[questionIndex] = answerIndex;
}

function checkAnswers() {
    const chapter = knmChapters[currentChapter];
    let correct = 0;
    let total = chapter.questions.length;

    chapter.questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.correct;
        const questionDiv = document.querySelector(`.question-container[data-question="${index}"]`);

        if (userAnswer !== undefined) {
            const selectedOption = questionDiv.querySelector(`[data-answer="${userAnswer}"]`);
            const correctOption = questionDiv.querySelector(`[data-answer="${correctAnswer}"]`);

            if (userAnswer === correctAnswer) {
                selectedOption.classList.add('correct');
                correct++;
            } else {
                selectedOption.classList.add('incorrect');
                correctOption.classList.add('correct');
            }

            // Show explanation
            const explanation = document.getElementById(`explanation-${index}`);
            if (explanation) {
                explanation.classList.add('show');
            }
        }
    });

    // Update score display
    document.getElementById('score-display').textContent = `${correct}/${total}`;

    // Save progress
    saveProgress(correct, total);

    // Show result
    const percentage = Math.round((correct / total) * 100);
    let message = '';
    if (percentage >= 80) {
        message = `🎉 Excellent! ${correct}/${total} correct (${percentage}%)`;
    } else if (percentage >= 60) {
        message = `👍 Good job! ${correct}/${total} correct (${percentage}%)`;
    } else {
        message = `📚 Keep practicing! ${correct}/${total} correct (${percentage}%)`;
    }

    alert(message);
}

function saveProgress(score, total) {
    const progress = JSON.parse(localStorage.getItem('knm-progress') || '{}');

    progress[currentChapter] = {
        score: score,
        total: total,
        completed: score >= Math.floor(total * 0.8) // 80% to mark as completed
    };

    localStorage.setItem('knm-progress', JSON.stringify(progress));
}

function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('knm-progress') || '{}');
    const chapterProgress = progress[currentChapter];

    if (chapterProgress) {
        document.getElementById('score-display').textContent =
            `${chapterProgress.score}/${chapterProgress.total}`;
    }
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function nextChapter() {
    if (currentChapter < 8) {
        window.location.href = `knm-chapter.html?chapter=${currentChapter + 1}`;
    } else {
        alert('You have completed all chapters! 🎉');
        window.location.href = 'knm.html';
    }
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        document.getElementById('timer').textContent = `⏱️ ${mins}:${secs}`;
    }, 1000);
}

window.onload = init;
 
