// Verbs Reference UI - Display verb conjugations

// ============================================================
// STATE - for standalone verbs page (grammar-verbs.html)
// ============================================================
var currentVerbSection = 'regular';
var currentVerbLevel = 'a1';

// ============================================================
// STANDALONE PAGE - called from grammar-verbs.html
// ============================================================

function initVerbsPage() {
    updateLevelTabs();
    switchLevel('a1');
}

function switchVerbSection(section) {
    currentVerbSection = section;

    // Update section tab active states
    document.querySelectorAll('.verb-section-tab').forEach(function (t) {
        t.classList.remove('active');
    });
    var activeSection = document.querySelector('.verb-section-tab[data-section="' + section + '"]');
    if (activeSection) activeSection.classList.add('active');

    // Rebuild level tabs for the new section
    updateLevelTabs();

    // Re-render current level with new section data
    switchLevel(currentVerbLevel);
}

function updateLevelTabs() {
    var container = document.getElementById('verbs-level-tabs');
    if (!container) return;
    var data = currentVerbSection === 'regular' ? dutchVerbs : separableVerbs;
    var html = '';
    ['a1', 'a2', 'b1'].forEach(function (l) {
        var active = l === currentVerbLevel ? ' active' : '';
        html += '<button class="verb-tab' + active + '" onclick="switchLevel(\'' + l + '\')" data-level="' + l + '">' +
            l.toUpperCase() + ' Level (' + data[l].length + ' verbs)</button>';
    });
    container.innerHTML = html;
}

function switchLevel(level) {
    currentVerbLevel = level;

    // Update level tab active states
    document.querySelectorAll('#verbs-level-tabs .verb-tab').forEach(function (t) {
        t.classList.toggle('active', t.getAttribute('data-level') === level);
    });

    // Clear search on level switch
    var searchInput = document.getElementById('verb-search');
    if (searchInput) searchInput.value = '';

    // Render the appropriate table
    var container = document.getElementById('verbs-table-container');
    if (!container) return;

    if (currentVerbSection === 'regular') {
        renderVerbTable(dutchVerbs[level], level, container);
    } else {
        renderSeparableVerbTable(separableVerbs[level], level, container);
    }
}

// Renders the regular verb table (shared by standalone page and modal)
function renderVerbTable(verbs, level, container) {
    var tableHTML = `
        <div class="verbs-info">
            <p><strong>${level.toUpperCase()} Level:</strong> ${getLevelDescription(level)}</p>
        </div>
        <table class="verbs-table">
            <thead>
                <tr>
                    <th>Infinitive</th>
                    <th>Imperfectum</th>
                    <th>Perfectum</th>
                    <th>English</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
    `;
    verbs.forEach(function (verb) {
        tableHTML += `
            <tr class="verb-row" data-verb="${verb.infinitive}" data-english="${verb.english}">
                <td class="verb-infinitive" data-label="Infinitive"><strong>${verb.infinitive}</strong></td>
                <td class="verb-imperfectum" data-label="Imperfectum">${verb.imperfectum}</td>
                <td class="verb-perfectum" data-label="Perfectum">
                    ${verb.perfectum}
                    <span class="auxiliary-hint">(${verb.auxiliary})</span>
                </td>
                <td class="verb-english" data-label="English">${verb.english}</td>
                <td class="verb-example" data-label="Example">
                    <div class="example-present">${verb.example}</div>
                    ${verb.examplePast ? `<div class="example-past">${verb.examplePast}</div>` : ''}
                </td>
            </tr>
        `;
    });
    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
}

// Renders the separable verb table with prefix badge
function renderSeparableVerbTable(verbs, level, container) {
    var descMap = {
        'a1': 'Basic everyday separable verbs — the prefix splits off and moves to the end of the sentence.',
        'a2': 'Expanding separable verb vocabulary for common everyday situations.',
        'b1': 'Advanced separable verbs for nuanced expression and formal contexts.'
    };

    var tableHTML = `
        <div class="verbs-info sep-info">
            <p><strong>${level.toUpperCase()} Separable Verbs:</strong> ${descMap[level] || ''}</p>
            <p class="sep-rule-hint">💡 <em>Main clause rule: prefix moves to the end — e.g. <strong>opstaan</strong> → Ik <strong>sta</strong> op.</em></p>
        </div>
        <table class="verbs-table sep-table">
            <thead>
                <tr>
                    <th>Infinitive</th>
                    <th>Imperfectum</th>
                    <th>Perfectum</th>
                    <th>English</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
    `;
    verbs.forEach(function (verb) {
        tableHTML += `
            <tr class="verb-row" data-verb="${verb.infinitive}" data-english="${verb.english}" data-prefix="${verb.prefix}">
                <td class="verb-infinitive sep-verb-infinitive" data-label="Infinitive">
                    <span class="sep-prefix-badge">${verb.prefix}</span><span class="sep-stem-text">${verb.stem}</span>
                </td>
                <td class="verb-imperfectum" data-label="Imperfectum">${verb.imperfectum}</td>
                <td class="verb-perfectum" data-label="Perfectum">
                    ${verb.perfectum}
                    <span class="auxiliary-hint">(${verb.auxiliary})</span>
                </td>
                <td class="verb-english" data-label="English">${verb.english}</td>
                <td class="verb-example" data-label="Example">
                    <div class="example-present">${verb.example}</div>
                    ${verb.examplePast ? `<div class="example-past">${verb.examplePast}</div>` : ''}
                </td>
            </tr>
        `;
    });
    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
}

// ============================================================
// MODAL CONTEXT - used on other pages that have a verbs modal
// ============================================================

function loadVerbsContent() {
    const verbsContentDiv = document.querySelector('.verbs-content');
    if (!verbsContentDiv || !dutchVerbs) return;

    const tabsHTML = `
        <div class="verbs-tabs">
            <button class="verb-tab active" onclick="showVerbLevel('a1')">A1 Level (${dutchVerbs.a1.length} verbs)</button>
            <button class="verb-tab" onclick="showVerbLevel('a2')">A2 Level (${dutchVerbs.a2.length} verbs)</button>
            <button class="verb-tab" onclick="showVerbLevel('b1')">B1 Level (${dutchVerbs.b1.length} verbs)</button>
        </div>
        <div class="verbs-search">
            <input type="text" id="verb-search" placeholder="🔍 Search verbs..." onkeyup="filterVerbs()">
        </div>
        <div id="verbs-table-container"></div>
    `;
    verbsContentDiv.innerHTML = tabsHTML;
    showVerbLevel('a1');
}

function showVerbLevel(level) {
    // Update active tab (modal context uses text match)
    document.querySelectorAll('.verb-tab').forEach(function (tab) {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase().includes(level)) {
            tab.classList.add('active');
        }
    });

    const verbs = dutchVerbs[level];
    const container = document.getElementById('verbs-table-container');
    if (!container) return;
    renderVerbTable(verbs, level, container);
}

function getLevelDescription(level) {
    const descriptions = {
        'a1': 'Essential verbs for basic communication and everyday situations.',
        'a2': 'Expanding vocabulary with more irregular verbs and modal verbs.',
        'b1': 'Complex verbs for nuanced expression and advanced communication.'
    };
    return descriptions[level] || '';
}

function filterVerbs() {
    const searchTerm = document.getElementById('verb-search').value.toLowerCase();
    const rows = document.querySelectorAll('.verb-row');

    rows.forEach(function (row) {
        const verbText = row.getAttribute('data-verb').toLowerCase();
        const englishText = row.getAttribute('data-english').toLowerCase();
        const prefixText = (row.getAttribute('data-prefix') || '').toLowerCase();
        const rowText = row.textContent.toLowerCase();

        if (verbText.includes(searchTerm) || englishText.includes(searchTerm) ||
            prefixText.includes(searchTerm) || rowText.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// ============================================================
// FAB BUTTON - Auto-inject into unified fab-container on pages
// with a verbs modal (e.g. grammar-lab.html)
// ============================================================
function createVerbsButton() {
    if (!document.getElementById('verbs-modal')) return;
    if (document.querySelector('.fab-verbs')) return;

    const fabContainer = getOrCreateFabContainer();
    const btn = document.createElement('button');
    btn.className = 'fab-item fab-purple fab-verbs';
    btn.title = 'Verbs Reference (Ctrl+V)';
    btn.innerHTML = '🔤';
    btn.onclick = openVerbs;
    fabContainer.appendChild(btn);
}

document.addEventListener('DOMContentLoaded', function () {
    createVerbsButton();

    const originalOpenVerbs = window.openVerbs;
    if (typeof originalOpenVerbs === 'function') {
        window.openVerbs = function () {
            originalOpenVerbs();
            loadVerbsContent();
        };
    }
});
