// Verb Quiz Logic
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let selectedLevel = 'a1';

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', function () {
    initQuiz();
});

function initQuiz() {
    selectedLevel = 'a1';
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            selectedLevel = this.dataset.level;
            document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            startQuiz();
        });
    });
    startQuiz();
}

function startQuiz() {
    // Get all questions for selected level
    const allQuestions = verbQuizData[selectedLevel];

    // Shuffle and select 10 random questions
    currentQuestions = shuffleArray([...allQuestions]).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;

    // Hide results, show quiz
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('results-screen').classList.remove('show');

    // Show first question
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    answered = false;
    const question = currentQuestions[currentQuestionIndex];

    // Update progress
    document.getElementById('progress-text').textContent =
        `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    document.getElementById('score-display').textContent =
        `Score: ${score}/${currentQuestions.length}`;

    const progressPercent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';

    // Display question
    document.getElementById('question-number').textContent =
        `Question ${currentQuestionIndex + 1}`;

    // Create sentence with input field
    const sentenceParts = question.sentence.split('___');
    const sentenceHTML = `
        ${sentenceParts[0]}
        <input type="text" id="answer-input" autocomplete="off" />
        ${sentenceParts[1] || ''}
    `;
    document.getElementById('sentence-display').innerHTML = sentenceHTML;
    document.getElementById('english-translation').textContent = question.english;

    // Reset feedback and hint
    document.getElementById('feedback-message').classList.remove('correct', 'incorrect');
    document.getElementById('feedback-message').style.display = 'none';
    document.getElementById('hint-display').classList.remove('show');

    // Focus on input
    const input = document.getElementById('answer-input');
    input.focus();

    // Enable check button, disable next button
    document.getElementById('btn-check').classList.remove('btn-disabled');
    document.getElementById('btn-next').classList.add('btn-disabled');

    // Add enter key listener
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && !answered) {
            checkAnswer();
        }
    });
}

function showHint() {
    const question = currentQuestions[currentQuestionIndex];
    const hintDisplay = document.getElementById('hint-display');
    hintDisplay.innerHTML = `<strong>💡 Hint:</strong> ${question.hint} (infinitive: <em>${question.infinitive}</em>)`;
    hintDisplay.classList.add('show');
}

function checkAnswer() {
    if (answered) return;

    const question = currentQuestions[currentQuestionIndex];
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = question.answer.toLowerCase();

    answered = true;
    const input = document.getElementById('answer-input');
    const feedback = document.getElementById('feedback-message');

    if (userAnswer === correctAnswer) {
        // Correct answer
        score++;
        input.classList.add('correct');
        feedback.classList.add('correct');
        feedback.innerHTML = `✅ <strong>Correct!</strong> Well done!`;
        feedback.style.display = 'block';
    } else {
        // Incorrect answer
        input.classList.add('incorrect');
        feedback.classList.add('incorrect');
        feedback.innerHTML = `
            ❌ <strong>Incorrect.</strong>
            <div class="correct-answer">The correct answer is: <strong>${question.answer}</strong> (${question.infinitive})</div>
        `;
        feedback.style.display = 'block';
    }

    // Update score display
    document.getElementById('score-display').textContent =
        `Score: ${score}/${currentQuestions.length}`;

    // Disable check button, enable next button
    document.getElementById('btn-check').classList.add('btn-disabled');
    document.getElementById('btn-next').classList.remove('btn-disabled');
}

function nextQuestion() {
    if (!answered) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-content').style.display = 'none';
    const resultsScreen = document.getElementById('results-screen');
    resultsScreen.classList.add('show');

    const percentage = Math.round((score / currentQuestions.length) * 100);

    document.getElementById('final-score').textContent = `${score}/${currentQuestions.length}`;
    document.getElementById('percentage').textContent = `${percentage}%`;

    let message = '';
    if (percentage >= 90) {
        message = '🎉 Excellent! You have mastered these verbs!';
    } else if (percentage >= 70) {
        message = '👍 Great job! Keep practicing to improve further.';
    } else if (percentage >= 50) {
        message = '💪 Good effort! Review the verbs and try again.';
    } else {
        message = '📚 Keep studying! Practice makes perfect.';
    }

    document.getElementById('results-message').textContent = message;
}

function restartQuiz() {
    startQuiz();
}
