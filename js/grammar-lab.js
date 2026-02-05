let currentIdx = 0;
let writingMode = false;
let results = new Array(100).fill(null);

function initNav() {
    const grid = document.getElementById('nav-grid');
    grid.innerHTML = "";
    for (let i = 0; i < 100; i++) {
        const item = document.createElement('div');
        item.className = 'nav-item'; item.innerText = i + 1;
        item.id = `nav-${i}`; item.onclick = () => jumpTo(i);
        grid.appendChild(item);
    }
}

function loadQuestion() {
    const q = questions[currentIdx];
    document.getElementById('header-progress').innerText = `${currentIdx + 1} / 100`;
    document.getElementById('translation').innerText = `🇬🇧 ${q.eng}`;
    document.getElementById('rule-text').innerText = q.logic;
    document.getElementById('rule-formula').innerText = q.formula;
    document.getElementById('writing-input').value = "";
    document.getElementById('feedback').innerText = "";
    document.getElementById('diff-label').innerText = q.diff;
    document.getElementById('diff-label').style.color = q.diff === 'easy' ? 'var(--success)' : q.diff === 'hard' ? 'var(--accent)' : 'var(--warning)';

    const bank = document.getElementById('word-bank');
    const zone = document.getElementById('answer-zone');
    bank.innerHTML = ""; zone.innerHTML = "";

    [...q.words].sort(() => Math.random() - 0.5).forEach(w => {
        let div = document.createElement('div');
        div.className = 'word'; div.innerText = w;
        div.onclick = () => zone.appendChild(div);
        bank.appendChild(div);
    });
    updateNav();
}

function checkAnswer() {
    const q = questions[currentIdx];
    let user = writingMode ? document.getElementById('writing-input').value :
        Array.from(document.getElementById('answer-zone').children).map(c => c.innerText).join(" ");

    const isCorrect = user.toLowerCase().replace(/[.,?]/g, "").trim() === q.dut.toLowerCase().replace(/[.,?]/g, "").trim();
    const fb = document.getElementById('feedback');

    if (isCorrect) {
        fb.innerHTML = "<span style='color:var(--success)'>✅ Correct!</span>";
        results[currentIdx] = true;
    } else {
        fb.innerHTML = "<span style='color:var(--accent)'>❌ Incorrect</span>";
        results[currentIdx] = false;
    }
    updateNav();
}

function updateNav() {
    for (let i = 0; i < 100; i++) {
        const item = document.getElementById(`nav-${i}`);
        if (!item) continue;
        item.style.background = results[i] === true ? "#c8e6c9" : results[i] === false ? "#ffcdd2" : "transparent";
        item.style.borderColor = i === currentIdx ? "var(--primary)" : "#eee";
        item.style.fontWeight = i === currentIdx ? "bold" : "normal";
    }
}

function toggleMode() {
    writingMode = !writingMode;
    document.getElementById('mode-text').innerText = writingMode ? "Writing" : "Blocks";
    document.getElementById('block-area').style.display = writingMode ? "none" : "block";
    document.getElementById('writing-input').style.display = writingMode ? "block" : "none";
}

function toggleRule() {
    const box = document.getElementById('rule-box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

function returnToBank(e) { if (e.target.className === 'word') document.getElementById('word-bank').appendChild(e.target); }
function jumpTo(i) { currentIdx = i; loadQuestion(); }
function next() { currentIdx = (currentIdx + 1) % 100; loadQuestion(); }
function prev() { currentIdx = (currentIdx - 1 + 100) % 100; loadQuestion(); }

window.onload = () => { initNav(); loadQuestion(); };
