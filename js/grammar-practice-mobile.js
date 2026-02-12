// Populate mobile dropdown on page load
function populateMobileDropdown() {
    const dropdown = document.getElementById('exercise-select-mobile');
    if (!dropdown) return;

    // Check if grammarExercises is defined
    if (typeof grammarExercises === 'undefined' || !grammarExercises || grammarExercises.length === 0) {
        setTimeout(populateMobileDropdown, 100);
        return;
    }

    dropdown.innerHTML = '';
    grammarExercises.forEach((ex, idx) => {
        const option = document.createElement('option');
        option.value = idx;
        option.textContent = (idx + 1) + '. ' + ex.title;
        dropdown.appendChild(option);
    });

    if (typeof currentExerciseIndex !== 'undefined') {
        dropdown.value = currentExerciseIndex;
    }
}

function loadExerciseFromDropdown(index) {
    if (typeof loadExercise === 'function') {
        loadExercise(parseInt(index));
    }
}

// Try to populate immediately and on DOMContentLoaded
populateMobileDropdown();
document.addEventListener('DOMContentLoaded', populateMobileDropdown);
