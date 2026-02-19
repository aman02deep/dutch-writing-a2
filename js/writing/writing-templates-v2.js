// Writing Templates V2 Logic

// State
let currentTemplateId = 'formalEmail';
let activeTab = 'template'; // 'template', 'examples', 'practice'

// DOM Elements
const templateList = document.getElementById('templateList');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const practiceInput = document.getElementById('practiceInput');
const feedbackContainer = document.getElementById('feedbackContainer');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTemplateList();
    loadTemplate(currentTemplateId);
    setupTabs();
});

// 1. Render Sidebar List
function renderTemplateList() {
    templateList.innerHTML = '';

    // Group templates (Logic from data file)
    // Assuming writingTemplates is available from global scope
    // We'll use the keys from writingTemplates object

    const templates = Object.keys(writingTemplates);

    templates.forEach(key => {
        // Create readable title from CamelCase
        const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

        const item = document.createElement('div');
        item.className = `template-item ${key === currentTemplateId ? 'active' : ''}`;
        item.textContent = title;
        item.onclick = () => {
            selectTemplate(key);
        };
        templateList.appendChild(item);
    });
}

function selectTemplate(id) {
    currentTemplateId = id;

    // Update sidebar UI
    document.querySelectorAll('.template-item').forEach(el => el.classList.remove('active'));
    // Re-rendering list is easiest to set active class properly without complex DOM traversal
    renderTemplateList();

    loadTemplate(id);

    // Reset Practice Mode
    practiceInput.value = '';
    feedbackContainer.innerHTML = '';
}

// 2. Load Content into Tabs
function loadTemplate(id) {
    const templateText = writingTemplates[id];
    const samples = writingSamples[id];

    // Tab 1: Structure
    const structEl = document.getElementById('templateStructure');
    structEl.textContent = templateText;

    // Tab 2: Examples
    const examplesContainer = document.getElementById('examplesContainer');
    examplesContainer.innerHTML = '';

    if (samples && samples.length > 0) {
        samples.forEach((sample, idx) => {
            const exDiv = document.createElement('div');
            exDiv.style.marginBottom = '30px';
            exDiv.innerHTML = `
                <h4 style="color:#666; margin-bottom:10px;">Example ${idx + 1}</h4>
                <div class="example-box">
                    <div class="dutch-text">${sample.dutch.replace(/\n/g, '<br>')}</div>
                    <div class="english-text">${sample.english.replace(/\n/g, '<br>')}</div>
                </div>
            `;
            examplesContainer.appendChild(exDiv);
        });
    } else {
        examplesContainer.innerHTML = '<p>No examples available for this template.</p>';
    }
}

// 3. Tab Logic
function setupTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Toggle
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Content Toggle
            const target = btn.dataset.tab;
            tabContents.forEach(c => c.classList.remove('active'));
            document.getElementById(`${target}Tab`).classList.add('active');

            activeTab = target;
        });
    });
}

// 4. Practice Mode & AI
async function checkPractice() {
    const text = practiceInput.value.trim();

    if (text.length < 10) {
        showNotification("Please write a bit more first!", "info");
        return;
    }

    // Show loading state
    feedbackContainer.innerHTML = renderFeedbackCard(
        '🤖 AI Analysis',
        'Checking Structure...',
        '<span class="loading-dots">Analyzing your email structure...</span>',
        'ai'
    );

    // Call AI
    const templateType = currentTemplateId.replace(/([A-Z])/g, ' $1');
    const context = `Writing a ${templateType} in Dutch. Check if the student followed the correct formal/informal structure.`;

    // Using smartAnalyze for advanced check
    const result = await aiService.smartAnalyze(text, "Generic Template Structure", context);

    if (result.isValid) {
        feedbackContainer.innerHTML = renderFeedbackCard(
            '✅ Excellent!',
            'Structure Matched',
            result.feedback || `<strong>Great job!</strong> Your text follows the ${templateType} structure perfectly.`,
            'success'
        );
    } else {
        // AI usually returns HTML-ready text now, but we check
        const formatted = result.feedback.replace(/\n/g, '<br>');
        feedbackContainer.innerHTML = renderFeedbackCard(
            '🤖 Feedback',
            'Improvement Tips',
            formatted,
            'ai'
        );
    }
}

// Copy Functionality
function copyTemplate() {
    const text = document.getElementById('templateStructure').textContent;
    navigator.clipboard.writeText(text).then(() => {
        showNotification("Template copied to clipboard!", "success");
    });
}

// Sidebar Toggle (Mobile & Desktop)
function toggleSidebar() {
    const sidebar = document.querySelector('.template-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Mobile Logic: Toggle .mobile-show
        if (sidebar.classList.contains('mobile-show')) {
            sidebar.classList.remove('mobile-show');
            backdrop.style.display = 'none';
        } else {
            sidebar.classList.add('mobile-show');
            backdrop.style.display = 'block';
        }
    } else {
        // Desktop Logic: Toggle .collapsed
        sidebar.classList.toggle('collapsed');
    }
}
