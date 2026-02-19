let currentTaskIndex = 0;
let completedTasks = new Set();

// Initialize the app
function init() {
    if (typeof examTasks === 'undefined') {
        alert('CRITICAL ERROR: examQuestions.js failed to load!');
        return;
    }
    if (typeof sampleAnswers === 'undefined') {
        console.warn('Warning: sampleAnswers.js failed to load or is undefined.');
    }

    renderTaskList();
    loadTask(0);
    setupTextareaListeners();
}

// Render sidebar task list
function renderTaskList() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    examTasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.id = `task-item-${index}`;
        taskItem.textContent = `${task.id}. ${task.title.split(':')[1].trim()}`;
        taskItem.onclick = () => loadTask(index);
        taskList.appendChild(taskItem);
    });
}

// Load a specific task
function loadTask(index) {
    currentTaskIndex = index;
    const task = examTasks[index];

    // Update UI
    document.getElementById('task-title').textContent = task.title;

    const taskTypeEl = document.getElementById('task-type');
    taskTypeEl.textContent = task.type.toUpperCase();

    // Color code based on message type
    if (task.type.includes('short')) {
        taskTypeEl.style.background = '#e8f5e9';
        taskTypeEl.style.color = '#2e7d32';
    } else if (task.type.includes('long')) {
        taskTypeEl.style.background = '#fff3e0';
        taskTypeEl.style.color = '#f57f17';
    } else {
        taskTypeEl.style.background = '#e3f2fd';
        taskTypeEl.style.color = '#0052cc';
    }

    // Set word target based on task type
    const wordTarget = task.wordTarget || '40-50';
    document.getElementById('word-target').textContent = `Target: ${wordTarget} words`;

    // Set Dutch context (default)
    document.getElementById('task-context-nl').textContent = task.contextNL;
    document.getElementById('task-context-en').textContent = task.contextEN;

    document.getElementById('progress-text').textContent = `Task ${index + 1} of ${examTasks.length}`;

    // Update instructions list (Dutch)
    const instructionsListNL = document.getElementById('task-instructions-list-nl');
    instructionsListNL.innerHTML = '';
    task.tasksNL.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsListNL.appendChild(li);
    });

    // Update instructions list (English)
    const instructionsListEN = document.getElementById('task-instructions-list-en');
    instructionsListEN.innerHTML = '';
    task.tasksEN.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsListEN.appendChild(li);
    });

    // Update model answer
    document.getElementById('model-answer-text').textContent = task.modelAnswer;
    document.getElementById('model-answer').style.display = 'none';

    // Load saved answer
    const savedAnswer = localStorage.getItem(`task-${task.id}-answer`);
    const writingArea = document.getElementById('writing-area');
    if (savedAnswer) {
        writingArea.value = savedAnswer;
    } else {
        writingArea.value = '';
    }

    // Update word count display
    updateWordCount();

    // Auto-save and update word count on input
    writingArea.oninput = function () {
        localStorage.setItem(`task-${task.id}-answer`, this.value);
        updateWordCount();
    };

    updateSidebarHighlight();
}

// Update sidebar highlighting
function updateSidebarHighlight() {
    document.querySelectorAll('.task-item').forEach((item, index) => {
        item.classList.remove('active', 'completed');
        if (index === currentTaskIndex) {
            item.classList.add('active');
        }
        if (completedTasks.has(index)) {
            item.classList.add('completed');
        }
    });
}

// Setup textarea listeners
function setupTextareaListeners() {
    const textarea = document.getElementById('writing-area');

    // Auto-save draft
    textarea.addEventListener('input', () => {
        const task = examTasks[currentTaskIndex];
        localStorage.setItem(`exam-task-${task.id}`, textarea.value);
        updateCharCount();
    });
}

// Update character and word count
function updateCharCount() {
    const text = document.getElementById('writing-area').value;
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    document.getElementById('char-count').textContent = charCount;
    document.getElementById('word-count').textContent = wordCount;
}

// Toggle model answer visibility
function toggleModelAnswer() {
    const modelAnswer = document.getElementById('model-answer');
    if (modelAnswer.style.display === 'none') {
        modelAnswer.style.display = 'block';
        completedTasks.add(currentTaskIndex);
        updateSidebarHighlight();
    } else {
        modelAnswer.style.display = 'none';
    }
}

// Clear text
function clearAnswer() {
    if (confirm('Are you sure you want to clear your text?')) {
        document.getElementById('writing-area').value = '';
        const task = examTasks[currentTaskIndex];
        localStorage.removeItem(`exam-task-${task.id}`);
        updateCharCount();
    }
}

// Navigation
function nextTask() {
    if (currentTaskIndex < examTasks.length - 1) {
        loadTask(currentTaskIndex + 1);
    }
}

function previousTask() {
    if (currentTaskIndex > 0) {
        loadTask(currentTaskIndex - 1);
    }
}

// Jump to specific task
function jumpTo(index) {
    loadTask(index);
}

// Update word count
function updateWordCount() {
    const text = document.getElementById('writing-area').value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    const wordCountEl = document.getElementById('word-count');
    const task = examTasks[currentTaskIndex];
    const target = task.wordTarget || '40-50';

    // Parse target range
    const [min, max] = target.split('-').map(Number);

    // Color code based on range
    let colorClass = '';
    if (words < min) {
        colorClass = 'too-few';
    } else if (words > max) {
        colorClass = 'too-many';
    } else {
        colorClass = 'perfect';
    }

    wordCountEl.textContent = `${words} words`;
    wordCountEl.className = `word-count ${colorClass}`;
}

// Toggle writing tips panel
function toggleWritingTips() {
    const panel = document.getElementById('writing-tips-panel');
    const isVisible = panel.style.display !== 'none';

    if (isVisible) {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
        renderWritingTips();
    }
}

// Render writing tips
function renderWritingTips() {
    const container = document.getElementById('tips-content');
    let html = '<h4>Quick Reference</h4>';

    writingTips.tips.forEach(tip => {
        html += `
            <div class="tip-item">
                <strong>${tip.title}:</strong> ${tip.content}
            </div>
        `;
    });

    html += '<h4>Greetings</h4>';
    html += '<div class="tip-section"><strong>Formal:</strong><br>';
    writingTips.greetings.formal.forEach(g => {
        html += `<span class="example">${g}</span><br>`;
    });
    html += '</div>';

    html += '<div class="tip-section"><strong>Informal:</strong><br>';
    writingTips.greetings.informal.forEach(g => {
        html += `<span class="example">${g}</span><br>`;
    });
    html += '</div>';

    html += '<h4>Closings</h4>';
    html += '<div class="tip-section"><strong>Formal:</strong><br>';
    writingTips.closings.formal.forEach(c => {
        html += `<span class="example">${c}</span><br>`;
    });
    html += '</div>';

    html += '<div class="tip-section"><strong>Informal:</strong><br>';
    writingTips.closings.informal.forEach(c => {
        html += `<span class="example">${c}</span><br>`;
    });
    html += '</div>';

    container.innerHTML = html;
}

// Toggle between Dutch and English
function toggleLanguage() {
    const contextEN = document.getElementById('task-context-en');
    const instructionsEN = document.getElementById('task-instructions-en');
    const toggleBtn = document.getElementById('toggle-lang-btn');

    if (contextEN.style.display === 'none') {
        // Show English
        contextEN.style.display = 'block';
        instructionsEN.style.display = 'block';
        toggleBtn.innerHTML = '🇳🇱 Hide English';
        toggleBtn.style.background = '#2e7d32';
    } else {
        // Hide English
        contextEN.style.display = 'none';
        instructionsEN.style.display = 'none';
        toggleBtn.innerHTML = '🇬🇧 Show English';
        toggleBtn.style.background = '#0052cc';
    }
}

// Show sample answer
function showSampleAnswer() {
    try {
        console.log('Show Example Clicked');
        const task = examTasks[currentTaskIndex];

        if (typeof sampleAnswers === 'undefined') {
            alert('Error: Sample answers data not loaded properly.');
            return;
        }

        const sample = sampleAnswers[task.id];

        if (!sample) {
            alert(`No sample answer available for Task ID: ${task.id}`);
            return;
        }

        document.getElementById('sample-answer-nl').innerHTML = `
            <h4>Dutch Example:</h4>
            <div class="sample-text">${sample.nl.replace(/\n/g, '<br>')}</div>
        `;

        document.getElementById('sample-answer-en').innerHTML = `
            <h4>English Translation:</h4>
            <div class="sample-text-en">${sample.en}</div>
        `;

        document.getElementById('sample-notes').innerHTML = `
            <h4>Key Elements:</h4>
            <div class="notes-text">${sample.notes}</div>
        `;

        document.getElementById('sample-modal').style.display = 'flex';
    } catch (e) {
        alert('Error showing sample answer: ' + e.message);
        console.error(e);
    }
}

// Close sample answer modal
function closeSampleAnswer() {
    document.getElementById('sample-modal').style.display = 'none';
}

// Close modal on outside click (safer event listener)
window.addEventListener('click', function (event) {
    const modal = document.getElementById('sample-modal');
    if (event.target === modal) {
        closeSampleAnswer();
    }
});

// Close ALL modals on Escape key
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeSampleAnswer();
        if (typeof closeSentenceStructure === 'function') closeSentenceStructure();
        // Vocabulary modal is toggled, so we check if active
        const vocabModal = document.querySelector('.vocab-modal');
        if (vocabModal && vocabModal.classList.contains('active')) {
            if (typeof toggleVocabModal === 'function') toggleVocabModal();
        }
    }
});

// Check Answer with AI
async function checkAnswer() {
    const text = document.getElementById('writing-area').value;
    const task = examTasks[currentTaskIndex];
    const feedbackContainer = document.getElementById('feedback-container');

    if (!text.trim()) {
        alert("Please write something first!");
        return;
    }

    feedbackContainer.style.display = 'block';
    feedbackContainer.innerHTML = `
        <div class="feedback-box">
            <div class="feedback-header" style="background: #673ab7;">
                <h4>🤖 AI Analysis</h4>
                <span class="feedback-score">Checking...</span>
            </div>
            <div class="feedback-list">
                <div class="feedback-item">Asking Gemini to check your work... <span class="loading-dots">⏳</span></div>
            </div>
        </div>
    `;

    // Scroll to feedback
    feedbackContainer.scrollIntoView({ behavior: 'smooth' });

    // Call AI
    const feedback = await aiService.checkText(text, task.contextEN);

    // Format Feedback (Markdown to HTML)
    const formattedFeedback = feedback
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\n/g, '<br>'); // Newlines

    // Use shared UI helper
    feedbackContainer.innerHTML = renderFeedbackCard(
        '🤖 AI Analysis',
        'Complete',
        formattedFeedback,
        'ai'
    );
}

// Initialize on page load (safer event listener)
window.addEventListener('load', () => {
    init();
    // No specific init needed for generic AI service
});

