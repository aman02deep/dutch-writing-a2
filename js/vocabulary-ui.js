// Vocabulary Modal System
let vocabModal = null;

// Initialize vocabulary system
function initVocabulary() {
    createVocabButton();
    createVocabModal();
}

// Create floating vocabulary button
function createVocabButton() {
    const btn = document.createElement('button');
    btn.className = 'vocab-float-btn';
    btn.innerHTML = '📚';
    btn.title = 'Open Vocabulary Dictionary';
    btn.onclick = toggleVocabModal;
    document.body.appendChild(btn);
}

// Create vocabulary modal
function createVocabModal() {
    const modal = document.createElement('div');
    modal.className = 'vocab-modal';
    modal.id = 'vocab-modal';

    modal.innerHTML = `
        <div class="vocab-modal-content">
            <div class="vocab-modal-header">
                <h2>📚 Dutch A2 Vocabulary</h2>
                <button class="vocab-close-btn" onclick="toggleVocabModal()">×</button>
            </div>
            <div class="vocab-search">
                <input type="text" id="vocab-search-input" placeholder="Search Dutch or English..." onkeyup="searchVocab()">
            </div>
            <div class="vocab-list" id="vocab-list"></div>
        </div>
    `;

    document.body.appendChild(modal);
    vocabModal = modal;

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleVocabModal();
        }
    });

    // Populate vocabulary list
    populateVocabList();
}

// Toggle vocabulary modal
function toggleVocabModal() {
    vocabModal.classList.toggle('active');
    if (vocabModal.classList.contains('active')) {
        document.getElementById('vocab-search-input').focus();
    }
}

// Populate vocabulary list
function populateVocabList() {
    const list = document.getElementById('vocab-list');
    const sortedWords = Object.keys(vocabulary).sort();

    list.innerHTML = sortedWords.map(word => {
        const item = vocabulary[word];
        return `
            <div class="vocab-item" data-dutch="${word.toLowerCase()}" data-english="${item.en.toLowerCase()}">
                <div class="vocab-dutch">${word}</div>
                <div class="vocab-english">${item.en}</div>
                <div class="vocab-example">${item.example}</div>
            </div>
        `;
    }).join('');
}

// Search vocabulary
function searchVocab() {
    const searchTerm = document.getElementById('vocab-search-input').value.toLowerCase();
    const items = document.querySelectorAll('.vocab-item');

    items.forEach(item => {
        const dutch = item.getAttribute('data-dutch');
        const english = item.getAttribute('data-english');

        if (dutch.includes(searchTerm) || english.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Wrap vocabulary words with tooltips
function wrapVocabWords(text) {
    if (!text) return text;

    let wrappedText = text;

    // Sort words by length (longest first) to avoid partial matches
    const sortedWords = Object.keys(vocabulary).sort((a, b) => b.length - a.length);

    sortedWords.forEach(word => {
        const item = vocabulary[word];
        // Create regex to match whole words only
        const regex = new RegExp(`\\b(${word})\\b`, 'gi');

        wrappedText = wrappedText.replace(regex, (match) => {
            return `<span class="vocab-word">${match}<span class="vocab-tooltip"><span class="vocab-tooltip-en">${item.en}</span><span class="vocab-tooltip-ex">${item.example}</span></span></span>`;
        });
    });

    return wrappedText;
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVocabulary);
} else {
    initVocabulary();
}
