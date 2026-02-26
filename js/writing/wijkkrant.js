/**
 * Wijkkrant page logic
 * Handles task rendering, word count, model answers, language toggle, format check + AI feedback.
 */

let currentTaskIndex = 0;
let showEnglish = false;
let modelAnswerVisible = false;

function init() {
    renderTaskList();
    loadTask(0);
}

function renderTaskList() {
    const list = document.getElementById('task-list');
    list.innerHTML = '';
    wijkkrantTasks.forEach((task, i) => {
        const btn = document.createElement('button');
        btn.className = 'task-list-btn';
        btn.id = `task-btn-${i}`;
        btn.innerHTML = `${task.icon} ${task.title}`;
        btn.onclick = () => loadTask(i);
        list.appendChild(btn);
    });
}

function loadTask(index) {
    currentTaskIndex = index;
    modelAnswerVisible = false;

    const task = wijkkrantTasks[index];

    // Update sidebar highlight
    document.querySelectorAll('.task-list-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    // Update progress
    document.getElementById('progress-text').textContent = `Task ${index + 1} of ${wijkkrantTasks.length}`;

    // Title & topic
    document.getElementById('task-title').textContent = task.title;
    document.getElementById('task-topic').textContent = task.topic;
    document.getElementById('task-icon').textContent = task.icon;

    // Context
    document.getElementById('task-context-nl').textContent = task.contextNL;
    document.getElementById('task-context-en').textContent = task.contextEN;
    document.getElementById('task-context-en').style.display = showEnglish ? 'block' : 'none';

    // Format rules
    const rulesList = document.getElementById('format-rules-list');
    rulesList.innerHTML = task.rulesNL.map(r => `<li>${r}</li>`).join('');

    // Instructions
    const nlList = document.getElementById('task-instructions-list-nl');
    const enList = document.getElementById('task-instructions-list-en');
    nlList.innerHTML = task.tasksNL.map(t => `<li>${t}</li>`).join('');
    enList.innerHTML = task.tasksEN.map(t => `<li>${t}</li>`).join('');
    document.getElementById('task-instructions-en').style.display = showEnglish ? 'block' : 'none';

    // Reset writing area & feedback
    document.getElementById('writing-area').value = '';
    document.getElementById('feedback-container').style.display = 'none';
    document.getElementById('feedback-container').innerHTML = '';
    document.getElementById('model-answer').style.display = 'none';
    updateWordCount();
}

function updateWordCount() {
    const text = document.getElementById('writing-area').value.trim();
    const words = text === '' ? 0 : text.split(/\s+/).length;
    const chars = text.length;

    document.getElementById('word-count').textContent = `${words} words`;
    const charEl = document.getElementById('char-count');
    if (charEl) charEl.textContent = chars;

    const wc = document.getElementById('word-count');
    wc.classList.remove('wc-low', 'wc-ok', 'wc-high');
    if (words < 70) wc.classList.add('wc-low');
    else if (words <= 95) wc.classList.add('wc-ok');
    else wc.classList.add('wc-high');
}

function toggleLanguage() {
    showEnglish = !showEnglish;
    const btn = document.getElementById('toggle-lang-btn');
    btn.textContent = showEnglish ? '🇳🇱 Verberg Engels' : '🇬🇧 Show English';

    document.getElementById('task-context-en').style.display = showEnglish ? 'block' : 'none';
    document.getElementById('task-instructions-en').style.display = showEnglish ? 'block' : 'none';
}

function showSampleAnswer() {
    const task = wijkkrantTasks[currentTaskIndex];
    const modal = document.getElementById('sample-modal');
    document.getElementById('sample-answer-nl').innerHTML =
        `<pre style="white-space:pre-wrap;">${task.modelAnswer}</pre>`;
    modal.style.display = 'flex';
}

function closeSampleAnswer() {
    document.getElementById('sample-modal').style.display = 'none';
}

function clearAnswer() {
    document.getElementById('writing-area').value = '';
    document.getElementById('feedback-container').style.display = 'none';
    document.getElementById('feedback-container').innerHTML = '';
    updateWordCount();
}

// ── Two-phase Check: Format Validation + AI Language Analysis ──────────────
function checkFormat() {
    const text = document.getElementById('writing-area').value.trim();
    const feedback = document.getElementById('feedback-container');
    feedback.style.display = 'block';

    if (!text) {
        alert('Please write something first!');
        feedback.style.display = 'none';
        return;
    }

    const issues = [];
    const ok = [];

    // Check greeting
    if (!text.startsWith('Hallo allemaal')) {
        issues.push('\u274C <strong>Geen correcte opening</strong> \u2014 Begin met: <em>Hallo allemaal,</em>');
    } else {
        ok.push('\u2705 Correcte opening: <em>Hallo allemaal,</em>');
    }

    // Check forbidden Beste
    if (/\bBeste\b/i.test(text)) {
        issues.push('\u274C <strong>Gebruik geen "Beste..."</strong> \u2014 de wijkkrant is voor de hele buurt, niet \u00e9\u00e9n persoon');
    }

    // Check template opener
    if (/mijn naam is/i.test(text) && /ik schrijf/i.test(text)) {
        ok.push('\u2705 Template-zin aanwezig: <em>Mijn naam is ... en ik schrijf ... over ...</em>');
    } else {
        issues.push('\u274C <strong>Ontbrekende template-zin</strong> \u2014 Gebruik: <em>Mijn naam is [naam] en ik schrijf deze week over [onderwerp].</em>');
    }

    // Check closing
    if (/fijne dag/i.test(text)) {
        ok.push('\u2705 Correcte afsluiting: <em>Fijne dag allemaal!</em>');
    } else {
        issues.push('\u274C <strong>Geen correcte afsluiting</strong> \u2014 Eindig met: <em>Fijne dag allemaal!</em>');
    }

    // Word count
    const words = text === '' ? 0 : text.split(/\s+/).length;
    if (words < 70) {
        issues.push('\u274C <strong>Te kort</strong> \u2014 ' + words + ' woorden (doel: 80\u201390)');
    } else if (words > 100) {
        issues.push('\u26A0\uFE0F <strong>Iets te lang</strong> \u2014 ' + words + ' woorden (doel: 80\u201390)');
    } else {
        ok.push('\u2705 Goed woordenaantal: ' + words + ' woorden');
    }

    // Build format check HTML
    var formatHtml = '';
    if (ok.length > 0) {
        formatHtml += '<div class="feedback-ok"><h4>\u2705 Goed gedaan:</h4><ul>' + ok.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>';
    }
    if (issues.length > 0) {
        formatHtml += '<div class="feedback-issues"><h4>\u26A0\uFE0F Let op:</h4><ul>' + issues.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></div>';
    }
    if (issues.length === 0) {
        formatHtml += '<div class="feedback-perfect">\uD83C\uDF89 <strong>Uitstekend!</strong> Je tekst volgt alle regels van de wijkkrant.</div>';
    }

    // Show format results + AI loading indicator
    var providerName = (typeof aiService !== 'undefined') ? aiService.getProviderName() : 'AI';
    feedback.innerHTML = formatHtml +
        '<div id="ai-feedback-section" style="margin-top: 1rem;">' +
        '<div style="border-radius: 10px; border: 1px solid #e0e0e0; overflow: hidden;">' +
        '<div style="background: #673ab7; color: white; padding: 0.8rem 1.1rem; display: flex; justify-content: space-between; align-items: center;">' +
        '<h4 style="margin:0; font-size:0.95rem;">\uD83E\uDD16 AI Taalanalyse</h4>' +
        '<span style="font-size:0.8rem; opacity:0.85;">Controleren...</span>' +
        '</div>' +
        '<div style="padding: 0.9rem 1.1rem; font-size: 0.88rem; color: #555;">' +
        'Vraag ' + providerName + ' je tekst te controleren op grammatica en woordgebruik\u2026 \u23F3' +
        '</div>' +
        '</div>' +
        '</div>';

    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Fire AI analysis
    var task = wijkkrantTasks[currentTaskIndex];
    var contextEN = task.contextEN || ('Write a wijkkrant article about ' + task.topic + '.');

    if (typeof aiService !== 'undefined' && typeof aiService.checkText === 'function') {
        aiService.checkText(text, contextEN).then(function (aiResponse) {
            var formattedAI = aiResponse
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br>');

            var aiSection = document.getElementById('ai-feedback-section');
            if (aiSection) {
                if (typeof renderFeedbackCard === 'function') {
                    aiSection.innerHTML = renderFeedbackCard('\uD83E\uDD16 AI Taalanalyse', 'Klaar', formattedAI, 'ai');
                } else {
                    aiSection.innerHTML =
                        '<div style="border-radius: 10px; border: 1px solid #e0e0e0; overflow: hidden;">' +
                        '<div style="background: #673ab7; color: white; padding: 0.8rem 1.1rem; display: flex; justify-content: space-between; align-items: center;">' +
                        '<h4 style="margin:0; font-size:0.95rem;">\uD83E\uDD16 AI Taalanalyse</h4>' +
                        '<span style="font-size:0.8rem; opacity:0.85;">Klaar</span>' +
                        '</div>' +
                        '<div style="padding: 0.9rem 1.1rem; font-size: 0.9rem; color: #333; line-height: 1.6;">' +
                        formattedAI +
                        '</div>' +
                        '</div>';
                }
            }
        }).catch(function () {
            var aiSection = document.getElementById('ai-feedback-section');
            if (aiSection) {
                aiSection.innerHTML =
                    '<div style="margin-top:0.5rem; padding:0.8rem 1rem; background:#fff3e0; border-left:3px solid #f57f17; border-radius:6px; font-size:0.88rem; color:#555;">' +
                    '\u26A0\uFE0F AI-analyse niet beschikbaar. Controleer je instellingen.' +
                    '</div>';
            }
        });
    }
}

function previousTask() {
    if (currentTaskIndex > 0) loadTask(currentTaskIndex - 1);
}

function nextTask() {
    if (currentTaskIndex < wijkkrantTasks.length - 1) loadTask(currentTaskIndex + 1);
}

function toggleSidebar() {
    const sidebar = document.getElementById('task-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        backdrop.style.display = 'none';
    } else {
        sidebar.classList.add('collapsed');
        backdrop.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', init);
