let currentExamId = 'exam1';
let currentExamIndex = 0;
let currentTextIndex = 0;
let userAnswers = {};
let examScores = {}; // Track scores for each text in current exam
let timerInterval;
let seconds = 0;
let mixExamData = null; // Stores the generated mix exam
let showBookmarkedOnly = false; // Filter state for bookmarks

function init() {
    // Check URL parameters first
    const params = new URLSearchParams(window.location.search);
    const urlExam = params.get('exam');

    if (urlExam) {
        currentExamId = urlExam;
        // Update selector if it exists
        const selector = document.getElementById('exam-selector');
        if (selector) {
            selector.value = urlExam;
        }
    } else {
        // Set initial exam from selector
        const selector = document.getElementById('exam-selector');
        if (selector) {
            currentExamId = selector.value;
        }
    }

    selectExam(currentExamId);
    startTimer();
}

function selectExam(examId) {
    currentExamId = examId;
    currentTextIndex = 0;
    seconds = 0; // Reset timer

    if (currentExamId === 'mix') {
        generateMixExam();
    } else {
        mixExamData = null;
    }

    renderSidebar();
    loadText(0);
}

function generateMixExam() {
    // flatten all texts from all exams
    let allTexts = [];
    readingExams.forEach(exam => {
        if (exam.texts) {
            allTexts = allTexts.concat(exam.texts.map(t => ({ ...t, origin: exam.title })));
        }
    });

    // Shuffle array
    allTexts.sort(() => Math.random() - 0.5);

    // Pick first 5 for the mix
    const selectedTexts = allTexts.slice(0, 5);

    mixExamData = {
        id: 'mix',
        title: 'Mixed Practice (Random)',
        texts: selectedTexts
    };
}

function getCurrentExam() {
    if (currentExamId === 'mix') {
        return mixExamData;
    }
    return readingExams.find(e => e.id === currentExamId);
}

function renderSidebar() {
    const list = document.getElementById('reading-list');
    list.innerHTML = '';

    const exam = getCurrentExam();
    if (!exam) return;

    // Exam Header
    const examHeader = document.createElement('div');
    examHeader.className = 'exam-header-item';
    examHeader.textContent = exam.title;
    examHeader.style.padding = '10px 15px';
    examHeader.style.background = '#e3f2fd';
    examHeader.style.fontWeight = 'bold';
    examHeader.style.borderBottom = '1px solid #ddd';
    list.appendChild(examHeader);

    // Texts in Exam
    if (exam.texts && exam.texts.length > 0) {
        exam.texts.forEach((text, textIndex) => {
            // Filter: if showBookmarkedOnly is true, only show bookmarked texts
            if (showBookmarkedOnly && !isBookmarked(text.id)) {
                return; // Skip non-bookmarked texts
            }

            const div = document.createElement('div');
            div.className = 'reading-item';

            // Add bookmark icon if text is bookmarked
            const bookmarkIcon = isBookmarked(text.id) ? '⭐ ' : '';
            div.innerHTML = `${bookmarkIcon}${text.title}`;

            div.style.paddingLeft = '25px';
            if (isBookmarked(text.id)) {
                div.style.background = '#fff9e6'; // Light yellow highlight
            }

            div.onclick = () => loadText(textIndex);
            div.id = `nav-${textIndex}`;
            list.appendChild(div);
        });
    }
}

function loadText(textIndex) {
    const exam = getCurrentExam();
    if (!exam || !exam.texts[textIndex]) return;

    currentTextIndex = textIndex;
    const data = exam.texts[textIndex];
    userAnswers = {};

    // Update Sidebar Active State
    document.querySelectorAll('.reading-item').forEach(el => el.classList.remove('active'));
    const navItem = document.getElementById(`nav-${textIndex}`);
    if (navItem) navItem.classList.add('active');

    // Update Headers
    document.getElementById('text-title').textContent = data.title;
    const total = exam.texts.length;
    document.getElementById('progress-text').textContent = `Text ${textIndex + 1} of ${total}`;

    // Render Text
    document.getElementById('reading-text').innerHTML = `
        <div class="task-context-box" style="background:#f9f9f9; padding:10px; border-left:4px solid #0052cc; margin-bottom:15px; font-style:italic;">
            ${data.context || ''}
            ${data.origin ? `<br><span style="font-size:0.8em; color:#666;">(From: ${data.origin})</span>` : ''}
        </div>
        ${data.text.replace(/\n/g, '<br>')}
    `;

    renderQuestions(data.questions);
    updateBookmarkButton(); // Update bookmark button state
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

function renderQuestions(questions) {
    const qContainer = document.getElementById('questions-container');
    qContainer.innerHTML = '';

    if (!questions) return;

    questions.forEach((q, qIndex) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question-item';
        qDiv.id = `q-item-${qIndex}`;

        const qTitle = document.createElement('div');
        qTitle.className = 'question-text';
        qTitle.textContent = `${qIndex + 1}. ${q.question}`;
        qDiv.appendChild(qTitle);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options-list';

        q.options.forEach((opt, optIndex) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'option';
            optDiv.dataset.qIndex = qIndex;
            optDiv.dataset.optIndex = optIndex;
            optDiv.onclick = () => selectOption(qIndex, optIndex);

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.className = 'option-radio';
            radio.name = `q-${qIndex}`;

            const label = document.createElement('span');
            label.textContent = opt;

            optDiv.appendChild(radio);
            optDiv.appendChild(label);
            optionsDiv.appendChild(optDiv);
        });

        qDiv.appendChild(optionsDiv);
        qContainer.appendChild(qDiv);
    });

    const submitBtn = document.querySelector('.btn-submit');
    const nextBtn = document.querySelector('.btn-next');
    if (submitBtn) submitBtn.style.display = 'block';
    if (nextBtn) nextBtn.style.display = 'none';

    const msg = document.getElementById('result-message');
    if (msg) msg.textContent = '';
}

function selectOption(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex;

    const options = document.querySelectorAll(`#q-item-${qIndex} .option`);
    options.forEach(opt => {
        opt.classList.remove('selected');
        opt.querySelector('input').checked = false;
    });

    const selectedOpt = options[optIndex];
    if (selectedOpt) {
        selectedOpt.classList.add('selected');
        selectedOpt.querySelector('input').checked = true;
    }
}

function checkAnswers() {
    const exam = getCurrentExam();
    const data = exam.texts[currentTextIndex];
    let score = 0;

    data.questions.forEach((q, qIndex) => {
        const userAns = userAnswers[qIndex];
        const correctAns = q.correct;
        const qDiv = document.getElementById(`q-item-${qIndex}`);
        const options = qDiv.querySelectorAll('.option');

        options.forEach(o => o.classList.remove('correct', 'wrong'));

        if (userAns === undefined) {
            qDiv.style.borderLeft = '4px solid orange';
        } else {
            if (userAns === correctAns) {
                score++;
                options[userAns].classList.add('correct');
            } else {
                options[userAns].classList.add('wrong');
                options[correctAns].classList.add('correct');
            }
        }
    });

    const total = data.questions.length;
    const msg = document.getElementById('result-message');
    if (msg) {
        msg.textContent = `You scored ${score} out of ${total}`;
        msg.style.color = score === total ? 'green' : (score > 0 ? 'orange' : 'red');
    }

    // Save score for this text
    examScores[currentTextIndex] = { score: score, total: total };

    // Calculate and save overall exam progress
    saveExamProgress();

    const submitBtn = document.querySelector('.btn-submit');
    const nextBtn = document.querySelector('.btn-next');
    if (submitBtn) submitBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'block';
}

function nextText() {
    const exam = getCurrentExam();
    if (currentTextIndex < exam.texts.length - 1) {
        loadText(currentTextIndex + 1);
    } else {
        alert("You have finished this exam!");
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('reading-sidebar');
    if (sidebar) sidebar.classList.toggle('collapsed');
}

let currentFontSize = 1;
function adjustFontSize(change) {
    currentFontSize += (change * 0.1);
    const textEl = document.getElementById('reading-text');
    if (textEl) textEl.style.fontSize = `${currentFontSize}rem`;
}

// ========== BOOKMARK FUNCTIONS ==========

function getBookmarks() {
    const stored = localStorage.getItem('reading-bookmarks');
    return stored ? JSON.parse(stored) : [];
}

function saveBookmarks(bookmarks) {
    localStorage.setItem('reading-bookmarks', JSON.stringify(bookmarks));
}

function isBookmarked(textId) {
    const bookmarks = getBookmarks();
    return bookmarks.includes(textId);
}

function toggleBookmark() {
    const exam = getCurrentExam();
    if (!exam || !exam.texts[currentTextIndex]) return;

    const textId = exam.texts[currentTextIndex].id;
    let bookmarks = getBookmarks();

    if (bookmarks.includes(textId)) {
        // Remove bookmark
        bookmarks = bookmarks.filter(id => id !== textId);
    } else {
        // Add bookmark
        bookmarks.push(textId);
    }

    saveBookmarks(bookmarks);
    updateBookmarkButton();
    renderSidebar(); // Refresh sidebar to show bookmark icon
}

function updateBookmarkButton() {
    const exam = getCurrentExam();
    if (!exam || !exam.texts[currentTextIndex]) return;

    const textId = exam.texts[currentTextIndex].id;
    const btn = document.getElementById('bookmark-btn');
    if (btn) {
        btn.textContent = isBookmarked(textId) ? '★' : '☆';
        btn.title = isBookmarked(textId) ? 'Remove bookmark' : 'Bookmark this text';
    }
}

function toggleBookmarkFilter() {
    showBookmarkedOnly = !showBookmarkedOnly;
    const btn = document.getElementById('filter-bookmarks-btn');
    if (btn) {
        btn.textContent = showBookmarkedOnly ? '📚 Show All' : '⭐ Show Bookmarked';
    }
    renderSidebar();
}

// Progress Tracking Functions
function saveExamProgress() {
    const progress = JSON.parse(localStorage.getItem('reading-progress') || '{}');

    // Calculate total score for current exam
    let totalScore = 0;
    let totalQuestions = 0;

    Object.values(examScores).forEach(textScore => {
        totalScore += textScore.score;
        totalQuestions += textScore.total;
    });

    const percentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;
    const completed = percentage >= 72; // Official pass rate

    progress[currentExamId] = {
        score: totalScore,
        total: totalQuestions,
        percentage: percentage,
        completed: completed,
        textScores: { ...examScores }
    };

    localStorage.setItem('reading-progress', JSON.stringify(progress));
}

function loadExamProgress() {
    const progress = JSON.parse(localStorage.getItem('reading-progress') || '{}');
    const examProgress = progress[currentExamId];

    if (examProgress && examProgress.textScores) {
        examScores = { ...examProgress.textScores };
    } else {
        examScores = {};
    }
}

function getExamProgress(examId) {
    const progress = JSON.parse(localStorage.getItem('reading-progress') || '{}');
    return progress[examId] || { score: 0, total: 0, percentage: 0, completed: false };
}

window.onload = init;
