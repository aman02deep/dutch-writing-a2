// KNM Chapter Page Logic

let currentChapter = 1;
let userAnswers = {};

function init() {
    // Get chapter from URL
    const params = new URLSearchParams(window.location.search);
    currentChapter = parseInt(params.get('chapter')) || 1;

    loadChapter();
}

function loadChapter() {
    const chapter = knmChapters[currentChapter];

    if (!chapter) {
        document.getElementById('chapter-title').textContent = 'Chapter Not Found';
        return;
    }

    // Update title in navigation
    document.getElementById('nav-title').innerHTML = `<a href="knm.html" class="nav-parent-link">KNM Hub</a> <span class="nav-separator">|</span> 🏛️ KNM Practice <span class="nav-separator">|</span> ${chapter.title}`;

    // Configure Contextual AI Roleplay for this KNM chapter
    window.roleplayConfig = {
        buttonText: "Discuss this topic",
        scenarioDesc: `Discussing: ${chapter.title}`,
        systemPrompt: `You are a helpful and encouraging Dutch local helping a newcomer understand Dutch culture and society (KNM).
The student is currently learning about: ${chapter.title}.
Engage the student in a short, practical conversation in Dutch (CEFR level A2 maximum) about this specific topic. Ask simple questions to test their cultural knowledge.
Keep your responses short (1-2 sentences max). 
If the student makes a language mistake or misunderstands a cultural concept, gently correct them in English in parentheses at the end of your Dutch reply.`
    };

    // Re-initialize AI Roleplay if already loaded
    if (window.aiRoleplay && typeof window.aiRoleplay.init === 'function') {
        window.aiRoleplay.init();
    }

    // Load study content
    loadStudyContent(chapter);

    // Load practice questions
    loadPracticeQuestions(chapter);

    // Load saved progress
    loadProgress();
}

function loadStudyContent(chapter) {
    const studyContent = document.getElementById('study-content');

    // 1. Check if there is an interactive video lesson for this chapter
    let interactiveHtml = '';
    if (typeof interactiveLessons !== 'undefined' && interactiveLessons[currentChapter]) {
        interactiveHtml = `<div id="knm-interactive-player-container"></div>`;
    }

    // 2. Load static study HTML
    let staticHtml = '';
    if (!chapter.studyMaterial || chapter.studyMaterial.length === 0) {
        staticHtml = `
            <div style="padding: 40px; text-align: center; color: #666;">
                <h3>Study materials coming soon!</h3>
                <p>In the meantime, try the practice questions in the Practice tab.</p>
            </div>
        `;
    } else {
        chapter.studyMaterial.forEach(section => {
            staticHtml += `
                <div class="study-section">
                    <h3>${section.title}</h3>
                    ${section.content}
                </div>
            `;
        });
    }

    // Combine and render
    studyContent.innerHTML = interactiveHtml + staticHtml;

    // 3. Initialize the Interactive Player class if container exists
    if (interactiveHtml) {
        new KNMPlayer('knm-interactive-player-container', interactiveLessons[currentChapter]);
    }
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

window.onload = init;

