// Verbs Reference System

// Open verbs modal
function openVerbs() {
    const modal = document.getElementById('verbs-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close verbs modal
function closeVerbs() {
    const modal = document.getElementById('verbs-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
    const modal = document.getElementById('verbs-modal');
    if (modal && event.target === modal) {
        closeVerbs();
    }
});

// Keyboard shortcut: Ctrl+V to open verbs
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'v') {
        event.preventDefault();
        openVerbs();
    }

    // ESC to close
    if (event.key === 'Escape') {
        closeVerbs();
    }
});
