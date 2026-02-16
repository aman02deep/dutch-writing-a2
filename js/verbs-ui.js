// Verbs Reference UI - Display verb conjugations

function loadVerbsContent() {
    const verbsContentDiv = document.querySelector('.verbs-content');
    if (!verbsContentDiv || !dutchVerbs) return;

    // Create tabs for A1, A2, B1 levels
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

    // Show A1 level by default
    showVerbLevel('a1');
}

function showVerbLevel(level) {
    // Update active tab
    document.querySelectorAll('.verb-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase().includes(level)) {
            tab.classList.add('active');
        }
    });

    // Get verbs for this level
    const verbs = dutchVerbs[level];
    const container = document.getElementById('verbs-table-container');

    // Create table
    let tableHTML = `
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

    verbs.forEach(verb => {
        tableHTML += `
            <tr class="verb-row" data-verb="${verb.infinitive}" data-english="${verb.english}">
                <td class="verb-infinitive"><strong>${verb.infinitive}</strong></td>
                <td class="verb-imperfectum">${verb.imperfectum}</td>
                <td class="verb-perfectum">
                    ${verb.perfectum}
                    <span class="auxiliary-hint">(${verb.auxiliary})</span>
                </td>
                <td class="verb-english">${verb.english}</td>
                <td class="verb-example">
                    <div class="example-present">${verb.example}</div>
                    ${verb.examplePast ? `<div class="example-past">${verb.examplePast}</div>` : ''}
                </td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
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

    rows.forEach(row => {
        const verbText = row.getAttribute('data-verb').toLowerCase();
        const englishText = row.getAttribute('data-english').toLowerCase();
        const rowText = row.textContent.toLowerCase();

        if (verbText.includes(searchTerm) || englishText.includes(searchTerm) || rowText.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Load verbs content when modal opens
document.addEventListener('DOMContentLoaded', function () {
    // Override the openVerbs function to load content
    const originalOpenVerbs = window.openVerbs;
    window.openVerbs = function () {
        originalOpenVerbs();
        loadVerbsContent();
    };
});
 
