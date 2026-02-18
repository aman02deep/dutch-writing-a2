// Grammar Practice JavaScript
let currentExerciseIndex = 0;
let showEnglish = false;
let userAnswers = {}; // Store user answers
let completedExercises = new Set(); // Track completed exercises

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    loadProgress();
    renderSidebar();
    loadExercise(0);
});

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('grammarProgress');
    if (saved) {
        const data = JSON.parse(saved);
        userAnswers = data.answers || {};
        completedExercises = new Set(data.completed || []);
    }
}

// Save progress to localStorage
function saveProgress() {
    const data = {
        answers: userAnswers,
        completed: Array.from(completedExercises)
    };
    localStorage.setItem('grammarProgress', JSON.stringify(data));
}

// Render sidebar with exercise list
function renderSidebar() {
    const list = document.getElementById('exercise-list');
    list.innerHTML = '';

    grammarExercises.forEach((exercise, index) => {
        const item = document.createElement('div');
        item.className = 'exercise-item';
        if (index === currentExerciseIndex) item.classList.add('active');
        if (completedExercises.has(index)) item.classList.add('completed');

        const completed = getExerciseCompletionCount(index);
        const total = exercise.exercises.length;

        item.innerHTML = `
            <div class="exercise-item-title">${exercise.title}</div>
            <div class="exercise-item-progress">${completed}/${total} completed</div>
        `;

        item.onclick = () => loadExercise(index);
        list.appendChild(item);
    });

    updateProgressSummary();
}

// Get completion count for an exercise
function getExerciseCompletionCount(exerciseIndex) {
    const exercise = grammarExercises[exerciseIndex];
    let count = 0;
    exercise.exercises.forEach((_, itemIndex) => {
        const key = `${exerciseIndex}-${itemIndex}`;
        if (userAnswers[key] && userAnswers[key].trim() !== '') {
            count++;
        }
    });
    return count;
}

// Update progress summary
function updateProgressSummary() {
    const totalCompleted = completedExercises.size;
    const totalExercises = grammarExercises.length;
    document.getElementById('total-progress').textContent =
        `${totalCompleted}/${totalExercises} exercises completed`;
}

// Load an exercise
function loadExercise(index) {
    currentExerciseIndex = index;
    const exercise = grammarExercises[index];

    // Update title and instructions
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('instruction-nl').textContent = exercise.instructionNL;
    document.getElementById('instruction-en').textContent = exercise.instructionEN;
    document.getElementById('tip-text').textContent = exercise.grammarTip;

    // Update progress text
    document.getElementById('progress-text').textContent =
        `Exercise ${index + 1} of ${grammarExercises.length}`;

    // Render exercises
    renderExercises(exercise, index);

    // Update sidebar
    renderSidebar();

    // Update navigation buttons
    document.getElementById('btn-prev').disabled = (index === 0);
    document.getElementById('btn-next').disabled = (index === grammarExercises.length - 1);

    // Scroll to top
    document.querySelector('.content-area').scrollTop = 0;
}

// Render exercise items
function renderExercises(exercise, exerciseIndex) {
    const area = document.getElementById('exercises-area');
    area.innerHTML = '';

    exercise.exercises.forEach((item, itemIndex) => {
        const row = document.createElement('div');
        row.className = 'exercise-row';

        const key = `${exerciseIndex}-${itemIndex}`;
        const savedAnswer = userAnswers[key] || '';

        row.innerHTML = `
            <div class="exercise-prompt">${item.prompt}</div>
            <div class="input-group">
                <input 
                    type="text" 
                    class="exercise-input ${savedAnswer ? 'filled' : ''}" 
                    id="input-${itemIndex}"
                    value="${savedAnswer}"
                    placeholder="Type je antwoord hier..."
                >
            </div>
            
            <!-- Action Buttons Area -->
            <div class="action-buttons" style="display: flex; gap: 10px; margin-top: 8px;">
                <button class="btn-check-ai" onclick="checkGrammarAnswer(${exerciseIndex}, ${itemIndex})">
                    🤖 Check
                </button>
                <button class="btn-show-example" onclick="toggleExample(${itemIndex})">
                    &#128065; Example
                </button>
            </div>

            <!-- AI Feedback Container -->
            <div class="ai-feedback" id="feedback-${itemIndex}" style="display: none; margin-top: 10px; padding: 10px; border-radius: 6px; background: #f0f7ff; border-left: 3px solid #0052cc;"></div>

            <!-- Example Container -->
            <div class="example-answer" id="example-${itemIndex}">
                <div class="example-nl">&#10003; ${item.example}</div>
                <div class="example-en">${item.exampleEN}</div>
            </div>
        `;

        area.appendChild(row);

        // Add input listener
        const input = row.querySelector('.exercise-input');
        input.addEventListener('input', function () {
            userAnswers[key] = this.value;
            saveProgress();

            // Update styling
            if (this.value.trim()) {
                this.classList.add('filled');
            } else {
                this.classList.remove('filled');
            }

            // Hide previous feedback if edited
            document.getElementById(`feedback-${itemIndex}`).style.display = 'none';

            // Check if exercise is completed
            checkExerciseCompletion(exerciseIndex);
            renderSidebar();
        });
    });
}

// 🤖 AI Check Function
async function checkGrammarAnswer(exerciseIndex, itemIndex) {
    const exercise = grammarExercises[exerciseIndex];
    const item = exercise.exercises[itemIndex];
    const inputId = `input-${itemIndex}`;
    const feedbackId = `feedback-${itemIndex}`;

    const userText = document.getElementById(inputId).value.trim();
    const feedbackEl = document.getElementById(feedbackId);

    if (userText.length < 2) {
        feedbackEl.style.display = 'block';
        feedbackEl.innerHTML = '<span style="color: #d9534f;">Please write an answer first.</span>';
        return;
    }

    // Show Loading
    feedbackEl.style.display = 'block';
    feedbackEl.innerHTML = '<span>🤖 Checking...</span>';

    // AI Check
    const context = `Grammar Exercise: "${item.prompt}". Target Structure: "${item.example}".`;
    const result = await aiService.smartAnalyze(userText, item.example, context);

    // Render result
    if (result.isValid) {
        feedbackEl.style.background = '#e8f5e9';
        feedbackEl.style.borderLeftColor = '#2e7d32';
        feedbackEl.innerHTML = `
            <div style="color: #2e7d32; font-weight: bold;">✅ Correct!</div>
            <div style="color: #555; font-size: 0.9em; margin-top: 4px;">${result.feedback || "Perfect grammar usage."}</div>
        `;
    } else {
        feedbackEl.style.background = '#fff3e0';
        feedbackEl.style.borderLeftColor = '#ff9800';
        // Clean up markdown slightly for display
        const formattedFeedback = result.feedback.replace(/\n/g, '<br>');
        feedbackEl.innerHTML = `
            <div style="color: #e65100; font-weight: bold;">⚠️ Needs Improvement</div>
            <div style="color: #333; font-size: 0.9em; margin-top: 4px;">${formattedFeedback}</div>
        `;
    }
}

// Toggle example visibility
function toggleExample(itemIndex) {
    const example = document.getElementById(`example-${itemIndex}`);
    example.classList.toggle('visible');

    const btn = event.target;
    if (example.classList.contains('visible')) {
        btn.innerHTML = '&#128584; Hide Example';
    } else {
        btn.innerHTML = '&#128065; Show Example';
    }
}

// Check if exercise is completed (all fields filled)
function checkExerciseCompletion(exerciseIndex) {
    const exercise = grammarExercises[exerciseIndex];
    let allFilled = true;

    exercise.exercises.forEach((_, itemIndex) => {
        const key = `${exerciseIndex}-${itemIndex}`;
        if (!userAnswers[key] || userAnswers[key].trim() === '') {
            allFilled = false;
        }
    });

    if (allFilled) {
        completedExercises.add(exerciseIndex);
    } else {
        completedExercises.delete(exerciseIndex);
    }

    saveProgress();
}

// Navigation functions
function previousExercise() {
    if (currentExerciseIndex > 0) {
        loadExercise(currentExerciseIndex - 1);
    }
}

function nextExercise() {
    if (currentExerciseIndex < grammarExercises.length - 1) {
        loadExercise(currentExerciseIndex + 1);
    }
}

// Clear all answers for current exercise
function clearAll() {
    if (confirm('Are you sure you want to clear all your answers for this exercise?')) {
        const exercise = grammarExercises[currentExerciseIndex];
        exercise.exercises.forEach((_, itemIndex) => {
            const key = `${currentExerciseIndex}-${itemIndex}`;
            delete userAnswers[key];
        });

        completedExercises.delete(currentExerciseIndex);
        saveProgress();
        loadExercise(currentExerciseIndex);
    }
}

// Toggle language
function toggleLanguage() {
    showEnglish = !showEnglish;
    const instructionEN = document.getElementById('instruction-en');
    const toggleBtn = document.getElementById('toggle-lang-btn');

    if (showEnglish) {
        instructionEN.style.display = 'block';
        toggleBtn.innerHTML = '&#127475;&#127473; Hide English';
        toggleBtn.style.background = '#2e7d32';
    } else {
        instructionEN.style.display = 'none';
        toggleBtn.innerHTML = '&#127468;&#127463; Show English';
        toggleBtn.style.background = '#0052cc';
    }
}

// Toggle sidebar (for mobile)
function toggleSidebar() {
    const sidebar = document.getElementById('exercise-sidebar');
    sidebar.classList.toggle('collapsed');
}

