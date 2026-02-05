// KNM Hub - Progress Tracking

function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('knm-progress') || '{}');

    for (let i = 1; i <= 8; i++) {
        const chapterProgress = progress[i] || { score: 0, total: 0, completed: false };

        // Calculate percentage
        const percentage = chapterProgress.total > 0
            ? Math.round((chapterProgress.score / chapterProgress.total) * 100)
            : 0;

        // Update progress bar
        const progressBar = document.getElementById(`progress-${i}`);
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }

        // Update status
        const status = document.getElementById(`status-${i}`);
        if (status) {
            if (chapterProgress.completed) {
                status.textContent = `✓ Completed (${percentage}%)`;
                status.className = 'chapter-status completed';
            } else if (chapterProgress.total > 0) {
                status.textContent = `In Progress (${percentage}%)`;
                status.className = 'chapter-status in-progress';
            } else {
                status.textContent = 'Not Started';
                status.className = 'chapter-status not-started';
            }
        }
    }
}

// Initialize on page load
window.onload = loadProgress;
