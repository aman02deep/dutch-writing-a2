// Prepositions UI - Display prepositions with examples

function showPrepLevel(level) {
    // Update active tab
    document.querySelectorAll('.prep-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase().includes(level)) {
            tab.classList.add('active');
        }
    });

    // Get prepositions for this level
    const preps = dutchPrepositions[level];
    const container = document.getElementById('prep-container');

    // Create info and cards
    let html = `
        <div class="prep-info">
            <p><strong>${level.toUpperCase()} Level:</strong> ${getLevelDescriptionPrep(level)}</p>
        </div>
        <div class="prep-grid">
    `;

    preps.forEach(prep => {
        const categoryIcon = getCategoryIcon(prep.category);
        html += `
            <div class="prep-card" data-prep="${prep.preposition}" data-english="${prep.english}">
                <div class="prep-header">
                    <div class="prep-title">
                        <span class="prep-icon">${categoryIcon}</span>
                        <strong class="prep-word">${prep.preposition}</strong>
                    </div>
                    <span class="prep-category">${prep.category.replace('_', ' ')}</span>
                </div>
                <div class="prep-english">${prep.english}</div>
                <div class="prep-usage">${prep.usage}</div>
                <div class="prep-examples">
                    ${prep.examples.map(ex => `
                        <div class="prep-example">
                            <div class="example-nl">${ex.nl}</div>
                            <div class="example-en">${ex.en}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function getLevelDescriptionPrep(level) {
    const descriptions = {
        'a1': 'Essential prepositions for basic communication about place, time, and direction.',
        'a2': 'More complex prepositions and time expressions for intermediate communication.',
        'b1': 'Fixed prepositional expressions and advanced usage patterns.'
    };
    return descriptions[level] || '';
}

function getCategoryIcon(category) {
    const icons = {
        'place': '📍',
        'time': '⏰',
        'direction': '➡️',
        'manner': '🔧',
        'possession': '🏷️',
        'purpose': '🎯',
        'topic': '💬',
        'opposition': '⚔️',
        'limit': '🚧',
        'fixed_verb': '🔗',
        'fixed_expression': '💡'
    };
    return icons[category] || '📌';
}

function filterPrepositions() {
    const searchTerm = document.getElementById('prep-search').value.toLowerCase();
    const cards = document.querySelectorAll('.prep-card');

    cards.forEach(card => {
        const prepText = card.getAttribute('data-prep').toLowerCase();
        const englishText = card.getAttribute('data-english').toLowerCase();
        const cardText = card.textContent.toLowerCase();

        if (prepText.includes(searchTerm) || englishText.includes(searchTerm) || cardText.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
