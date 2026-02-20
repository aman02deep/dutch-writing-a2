/**
 * Sentence Bank — interactive table with practice & AI check.
 */

const SB_COLUMNS = ['index', 'nl', 'en', 'practice', 'check'];
const SB_COL_LABELS = {
    index: '#',
    nl: 'Dutch',
    en: 'English',
    practice: 'Practice',
    check: 'AI Check'
};

// ── State ────────────────────────────────────────────────────────────────────
let sbVisibleCols = JSON.parse(localStorage.getItem('sb-visible-cols')) || [...SB_COLUMNS];
let sbActiveCategory = 'all';

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    buildCategoryFilter();
    buildColumnToggle();
    renderTable();
});

// ── Category Filter ──────────────────────────────────────────────────────────
function buildCategoryFilter() {
    const select = document.getElementById('sb-category-filter');
    const categories = [...new Set(sentenceBankData.map(s => s.cat))];

    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });

    select.addEventListener('change', () => {
        sbActiveCategory = select.value;
        renderTable();
    });
}

// ── Column Toggle ────────────────────────────────────────────────────────────
function buildColumnToggle() {
    const dropdown = document.getElementById('sb-col-dropdown');

    SB_COLUMNS.forEach(col => {
        const label = document.createElement('label');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.checked = sbVisibleCols.includes(col);
        cb.dataset.col = col;
        cb.addEventListener('change', () => {
            if (cb.checked) {
                if (!sbVisibleCols.includes(col)) sbVisibleCols.push(col);
                // If Practice is shown, also show Check
                if (col === 'practice' && !sbVisibleCols.includes('check')) {
                    sbVisibleCols.push('check');
                    syncCheckbox('check', true);
                }
            } else {
                sbVisibleCols = sbVisibleCols.filter(c => c !== col);
                // If Practice is hidden, also hide Check (nothing to check)
                if (col === 'practice') {
                    sbVisibleCols = sbVisibleCols.filter(c => c !== 'check');
                    syncCheckbox('check', false);
                }
            }
            localStorage.setItem('sb-visible-cols', JSON.stringify(sbVisibleCols));
            renderTable();
        });
        label.appendChild(cb);
        label.appendChild(document.createTextNode(' ' + SB_COL_LABELS[col]));
        dropdown.appendChild(label);
    });
}

function toggleColumnDropdown() {
    document.getElementById('sb-col-dropdown').classList.toggle('open');
}

// Keep checkbox UI in sync when one column drives another
function syncCheckbox(colName, checked) {
    const cb = document.querySelector(`#sb-col-dropdown input[data-col="${colName}"]`);
    if (cb) cb.checked = checked;
}

// Close dropdown and tooltips on outside click
document.addEventListener('click', (e) => {
    const wrap = document.querySelector('.sb-col-toggle-wrap');
    if (wrap && !wrap.contains(e.target)) {
        document.getElementById('sb-col-dropdown').classList.remove('open');
    }
    // Close info tooltips if clicking outside them
    if (!e.target.closest('.sb-info-wrap')) {
        document.querySelectorAll('.sb-info-tooltip.visible').forEach(t => t.classList.remove('visible'));
    }
});

// ── Render Table ─────────────────────────────────────────────────────────────
function renderTable() {
    const tbody = document.getElementById('sb-tbody');
    const thead = document.getElementById('sb-thead-row');

    // Build header
    thead.innerHTML = '';
    SB_COLUMNS.forEach(col => {
        const th = document.createElement('th');
        th.className = `sb-col-${col}`;
        th.textContent = SB_COL_LABELS[col];
        th.style.display = sbVisibleCols.includes(col) ? '' : 'none';
        thead.appendChild(th);
    });

    // Filter data
    const data = sbActiveCategory === 'all'
        ? sentenceBankData
        : sentenceBankData.filter(s => s.cat === sbActiveCategory);

    // Build body with category grouping
    tbody.innerHTML = '';
    let lastCat = '';

    data.forEach((sentence, idx) => {
        // Category header row
        if (sentence.cat !== lastCat) {
            lastCat = sentence.cat;
            if (sbActiveCategory === 'all') {
                const catRow = document.createElement('tr');
                catRow.className = 'sb-cat-row';
                const td = document.createElement('td');
                td.colSpan = sbVisibleCols.length;

                // Category name
                const catName = document.createElement('span');
                catName.textContent = sentence.cat;
                td.appendChild(catName);

                // ℹ️ info icon with tooltip
                const tip = categoryTips[sentence.cat];
                if (tip) {
                    const infoWrap = document.createElement('span');
                    infoWrap.className = 'sb-info-wrap';

                    const infoBtn = document.createElement('button');
                    infoBtn.className = 'sb-info-btn';
                    infoBtn.innerHTML = 'ℹ️';
                    infoBtn.title = 'Exam context';

                    const tooltip = document.createElement('span');
                    tooltip.className = 'sb-info-tooltip';
                    tooltip.textContent = tip;

                    infoBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        // Close all other tooltips first
                        document.querySelectorAll('.sb-info-tooltip.visible').forEach(t => {
                            if (t !== tooltip) t.classList.remove('visible');
                        });
                        tooltip.classList.toggle('visible');
                    });

                    infoWrap.appendChild(infoBtn);
                    infoWrap.appendChild(tooltip);
                    td.appendChild(infoWrap);
                }

                catRow.appendChild(td);
                tbody.appendChild(catRow);
            }
        }

        const tr = document.createElement('tr');
        tr.id = `sb-row-${sentence.id}`;

        // Index
        addCell(tr, 'index', sentence.id);

        // Dutch
        addCell(tr, 'nl', sentence.nl);

        // English
        addCell(tr, 'en', sentence.en);

        // Practice (text input)
        const practiceTd = document.createElement('td');
        practiceTd.className = 'sb-col-practice';
        practiceTd.style.display = sbVisibleCols.includes('practice') ? '' : 'none';
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'sb-practice-input';
        input.placeholder = 'Type Dutch here...';
        input.id = `sb-input-${sentence.id}`;
        // Load saved practice
        const saved = localStorage.getItem(`sb-practice-${sentence.id}`);
        if (saved) input.value = saved;
        input.addEventListener('input', () => {
            localStorage.setItem(`sb-practice-${sentence.id}`, input.value);
            input.classList.remove('correct', 'incorrect');
        });
        // Quick check on Enter
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') checkSentence(sentence.id);
        });
        practiceTd.appendChild(input);
        tr.appendChild(practiceTd);

        // AI Check button
        const checkTd = document.createElement('td');
        checkTd.className = 'sb-col-check';
        checkTd.style.display = sbVisibleCols.includes('check') ? '' : 'none';
        const btn = document.createElement('button');
        btn.className = 'sb-check-btn';
        btn.title = 'Check with AI';
        btn.innerHTML = '🔍';
        btn.id = `sb-btn-${sentence.id}`;
        btn.onclick = () => checkSentence(sentence.id);
        checkTd.appendChild(btn);
        tr.appendChild(checkTd);

        tbody.appendChild(tr);
    });

    updateStats(data);
}

function addCell(tr, colKey, text) {
    const td = document.createElement('td');
    td.className = `sb-col-${colKey}`;
    td.style.display = sbVisibleCols.includes(colKey) ? '' : 'none';
    td.textContent = text;
    tr.appendChild(td);
}

// ── AI Check ─────────────────────────────────────────────────────────────────
async function checkSentence(id) {
    const sentence = sentenceBankData.find(s => s.id === id);
    const input = document.getElementById(`sb-input-${id}`);
    const btn = document.getElementById(`sb-btn-${id}`);
    const practiceText = input.value.trim();

    if (!practiceText) {
        input.focus();
        input.classList.add('incorrect');
        setTimeout(() => input.classList.remove('incorrect'), 800);
        return;
    }

    // Remove old feedback
    const oldFeedback = document.getElementById(`sb-feedback-${id}`);
    if (oldFeedback) oldFeedback.remove();

    // Insert feedback row
    const row = document.getElementById(`sb-row-${id}`);
    const feedbackRow = document.createElement('tr');
    feedbackRow.id = `sb-feedback-${id}`;
    feedbackRow.className = 'sb-feedback-row';
    const feedbackTd = document.createElement('td');
    feedbackTd.colSpan = sbVisibleCols.length;
    const feedbackBox = document.createElement('div');
    feedbackBox.className = 'sb-feedback-box loading';
    feedbackBox.textContent = `⏳ Asking ${aiService.getProviderName()} to check...`;
    feedbackTd.appendChild(feedbackBox);
    feedbackRow.appendChild(feedbackTd);
    row.after(feedbackRow);

    btn.disabled = true;
    btn.innerHTML = '⏳';

    try {
        const prompt = `You are a Dutch A2 language tutor. The student tried to write this Dutch sentence from memory:

Correct sentence: "${sentence.nl}"
English meaning: "${sentence.en}"
Student wrote: "${practiceText}"

Compare the student's attempt to the correct sentence. Be brief (2-3 lines max):
1. Is it correct? If yes, say "✅ Perfect!" 
2. If there are errors, show the corrections clearly
3. Give one short tip if needed

Reply in English. Be encouraging.`;

        const response = await aiService.fetchAI(prompt);
        feedbackBox.className = 'sb-feedback-box';
        feedbackBox.innerHTML = response
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');

        // Visual indicator on input
        const isCorrect = response.includes('✅') || response.toLowerCase().includes('perfect') || response.toLowerCase().includes('correct');
        input.classList.add(isCorrect ? 'correct' : 'incorrect');
    } catch (e) {
        feedbackBox.className = 'sb-feedback-box error';
        feedbackBox.textContent = `❌ ${e.message}`;
    } finally {
        btn.disabled = false;
        btn.innerHTML = '🔍';
    }
}

// ── Stats ────────────────────────────────────────────────────────────────────
function updateStats(data) {
    const practiced = data.filter(s => localStorage.getItem(`sb-practice-${s.id}`)).length;
    document.getElementById('sb-stats').innerHTML = `
        <span>📊 Showing: ${data.length} sentences</span>
        <span>✏️ Practiced: ${practiced} / ${data.length}</span>
    `;
}
