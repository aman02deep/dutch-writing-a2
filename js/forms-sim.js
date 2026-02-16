let currentFormIndex = 0;
let completedForms = new Set();

// Initialize the app
function init() {
    renderFormList();
    loadForm(0);
}

// Render sidebar form list
function renderFormList() {
    const formList = document.getElementById('form-list');
    formList.innerHTML = '';

    formTasks.forEach((form, index) => {
        const formItem = document.createElement('div');
        formItem.className = 'form-item';
        formItem.id = `form-item-${index}`;
        formItem.textContent = `${form.id}. ${form.title.split(':')[1].trim()}`;
        formItem.onclick = () => loadForm(index);
        formList.appendChild(formItem);
    });
}

// Load a specific form
function loadForm(index) {
    currentFormIndex = index;
    const form = formTasks[index];

    // Update header and title
    document.getElementById('form-header').textContent = form.header;
    document.getElementById('form-title').textContent = form.title;
    document.getElementById('form-prompt').textContent = form.promptNL;
    document.getElementById('form-prompt-en').textContent = form.promptEN;
    document.getElementById('progress-text').textContent = `Form ${index + 1} of ${formTasks.length}`;

    // Generate form fields
    const fieldsContainer = document.getElementById('form-fields');
    fieldsContainer.innerHTML = '';

    form.fields.forEach((field, fieldIndex) => {
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'field';

        const label = document.createElement('label');
        label.textContent = field.label + (field.required ? ' *' : '');

        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.placeholder = field.placeholder || '';
        input.id = `field-${fieldIndex}`;

        // Load saved value if exists
        const savedValue = localStorage.getItem(`form-${form.id}-${field.name}`);
        if (savedValue) {
            input.value = savedValue;
            input.classList.add('filled');
        }

        // Auto-save on input
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            localStorage.setItem(`form-${form.id}-${field.name}`, val);
            if (val.trim()) {
                e.target.classList.add('filled');
            } else {
                e.target.classList.remove('filled');
            }
            updateFieldCounter();
            updateCharInfo(field.label, val.length);
        });

        // Show char count on focus
        input.addEventListener('focus', (e) => {
            updateCharInfo(field.label, e.target.value.length);
        });

        // Clear char count on blur
        input.addEventListener('blur', () => {
            document.getElementById('char-info').textContent = '';
        });

        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);
        fieldsContainer.appendChild(fieldDiv);
    });

    // Update counters and sidebar
    document.getElementById('total-count').textContent = form.fields.length;
    updateFieldCounter();
    updateSidebarHighlight();
}

// Update field counter
function updateFieldCounter() {
    const form = formTasks[currentFormIndex];
    let filledCount = 0;

    form.fields.forEach((field, index) => {
        const input = document.getElementById(`field-${index}`);
        if (input && input.value.trim()) {
            filledCount++;
        }
    });

    document.getElementById('filled-count').textContent = filledCount;

    // Show completion message if all filled
    const completionMsg = document.getElementById('completion-message');
    if (filledCount === form.fields.length) {
        completionMsg.style.display = 'block';
        completedForms.add(currentFormIndex);
        updateSidebarHighlight();
    } else {
        completionMsg.style.display = 'none';
    }
}

// Update character info display
function updateCharInfo(label, count) {
    const infoEl = document.getElementById('char-info');
    if (infoEl) {
        infoEl.textContent = `Current Field: ${label} (${count} chars)`;
    }
}

// Update sidebar highlighting
function updateSidebarHighlight() {
    document.querySelectorAll('.form-item').forEach((item, index) => {
        item.classList.remove('active', 'completed');
        if (index === currentFormIndex) {
            item.classList.add('active');
        }
        if (completedForms.has(index)) {
            item.classList.add('completed');
        }
    });
}

// Check form (validate all fields are filled)
function checkForm() {
    const form = formTasks[currentFormIndex];
    let allFilled = true;
    let emptyFields = [];

    form.fields.forEach((field, index) => {
        const input = document.getElementById(`field-${index}`);
        if (!input.value.trim()) {
            allFilled = false;
            emptyFields.push(field.label);
            input.style.borderColor = '#d92626';
        } else {
            input.style.borderColor = '#2e7d32';
        }
    });

    if (allFilled) {
        alert('✅ Perfect! All fields are filled correctly.');
        completedForms.add(currentFormIndex);
        updateSidebarHighlight();
    } else {
        alert(`❌ Please fill in the following fields:\n\n${emptyFields.join('\n')}`);
    }
}

// Clear form
function clearForm() {
    if (confirm('Are you sure you want to clear all fields?')) {
        const form = formTasks[currentFormIndex];
        form.fields.forEach((field, index) => {
            const input = document.getElementById(`field-${index}`);
            if (input) {
                input.value = '';
                input.classList.remove('filled');
                input.style.borderColor = '#ddd';
                localStorage.removeItem(`form-${form.id}-${field.name}`);
            }
        });
        updateFieldCounter();
    }
}

// Navigation
function nextForm() {
    if (currentFormIndex < formTasks.length - 1) {
        loadForm(currentFormIndex + 1);
    }
}

function previousForm() {
    if (currentFormIndex > 0) {
        loadForm(currentFormIndex - 1);
    }
}

// Toggle between Dutch and English
function toggleLanguage() {
    const promptEN = document.getElementById('form-prompt-en');
    const toggleBtn = document.getElementById('toggle-lang-btn');

    if (promptEN.style.display === 'none') {
        // Show English
        promptEN.style.display = 'block';
        toggleBtn.innerHTML = '🇳🇱 Hide English';
        toggleBtn.style.background = '#2e7d32';
    } else {
        // Hide English
        promptEN.style.display = 'none';
        toggleBtn.innerHTML = '🇬🇧 Show English';
        toggleBtn.style.background = '#0052cc';
    }
}

// Initialize on page load
window.onload = init;
 
