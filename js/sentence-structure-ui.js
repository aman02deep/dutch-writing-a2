// Sentence Structure Modal UI
function openSentenceStructure() {
    const modal = document.getElementById('sentence-modal');
    if (!modal) return;

    modal.style.display = 'block';
    renderSentenceStructure();
}

function closeSentenceStructure() {
    const modal = document.getElementById('sentence-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function renderSentenceStructure() {
    const container = document.getElementById('sentence-content');
    if (!container) return;

    let html = '';

    sentenceStructures.forEach(category => {
        html += `
            <div class="structure-category">
                <h3 class="category-title">${category.category}</h3>
        `;

        category.rules.forEach(rule => {
            html += `
                <div class="structure-rule">
                    <h4 class="rule-name">${rule.title}</h4>
                    <div class="pattern-box">
                        <strong>Pattern:</strong> ${rule.pattern}
                    </div>
                    <div class="examples">
            `;

            rule.examples.forEach(example => {
                html += `
                    <div class="example-item">
                        <div class="example-nl">🇳🇱 ${example.nl}</div>
                        <div class="example-en">🇬🇧 ${example.en}</div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `</div>`;
    });

    container.innerHTML = html;
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('sentence-modal');
    if (e.target === modal) {
        closeSentenceStructure();
    }
});

// Keyboard shortcut: Ctrl/Cmd + S for Sentence Structure
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        openSentenceStructure();
    }
});
