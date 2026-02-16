let currentTemplate = "formalEmail";
let currentIndex = 0;

// DOM elements
const templateCol = document.getElementById("templateCol");
const dutchCol = document.getElementById("dutchCol");
const englishCol = document.getElementById("englishCol");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const paginationNumbers = document.getElementById("paginationNumbers");

const templateSelect = document.getElementById("templateSelect");
const toggleTemplate = document.getElementById("toggleTemplate");
const toggleDutch = document.getElementById("toggleDutch");
const toggleEnglish = document.getElementById("toggleEnglish");

// Render current sample
function renderSample() {
    const sampleArray = writingSamples[currentTemplate];
    // Using renamed global variables
    if (!sampleArray || !writingTemplates[currentTemplate]) return;

    const sample = sampleArray[currentIndex];

    templateCol.textContent = writingTemplates[currentTemplate] || "";
    dutchCol.textContent = sample.dutch;
    englishCol.textContent = sample.english;

    // Render pagination numbers
    paginationNumbers.innerHTML = "";
    sampleArray.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.onclick = () => {
            currentIndex = i;
            renderSample();
        };
        if (i === currentIndex) {
            btn.style.background = "#2980b9";
            btn.style.color = "#fff";
        }
        paginationNumbers.appendChild(btn);
    });
}

// Navigation
if (prevBtn) {
    prevBtn.onclick = () => {
        const arr = writingSamples[currentTemplate];
        currentIndex = (currentIndex - 1 + arr.length) % arr.length;
        renderSample();
    };
}

if (nextBtn) {
    nextBtn.onclick = () => {
        const arr = writingSamples[currentTemplate];
        currentIndex = (currentIndex + 1) % arr.length;
        renderSample();
    };
}

// Template change
if (templateSelect) {
    templateSelect.onchange = (e) => {
        currentTemplate = e.target.value;
        currentIndex = 0;
        renderSample();
    };
}

// Toggle columns
if (toggleTemplate) {
    toggleTemplate.onclick = () => {
        templateCol.style.display = templateCol.style.display === "none" ? "block" : "none";
    };
}

if (toggleDutch) {
    toggleDutch.onclick = () => {
        dutchCol.style.display = dutchCol.style.display === "none" ? "block" : "none";
    };
}

if (toggleEnglish) {
    toggleEnglish.onclick = () => {
        englishCol.style.display = englishCol.style.display === "none" ? "block" : "none";
    };
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderSample();
});
