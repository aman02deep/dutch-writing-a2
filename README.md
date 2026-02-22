# 🇳🇱 Dutch A2 Practice App

A comprehensive, local-first web application for Dutch A2 learners preparing for the **Inburgering exam**. Covers all five exam components: Writing, Reading, Grammar, KNM, and Vocabulary.

Built with **vanilla HTML, CSS, and JavaScript** — no build step or dependencies required.

---

## 📂 Project Structure

```
dutch-writing-a2/
├── index.html                    # Main dashboard
│
├── writing/                      # Writing hub & tools
│   ├── writing.html              # Writing hub
│   ├── exam-sim.html             # Exam simulator (email writing)
│   ├── forms-sim.html            # Dutch form filling simulator
│   └── writing-templates-v2.html # Interactive writing templates
│
├── grammar/                      # Grammar hub & tools
│   ├── grammar.html              # Grammar hub
│   ├── grammar-lab.html          # AI grammar lab (sentence correction)
│   ├── grammar-practice.html     # AI-assisted grammar exercises
│   ├── grammar-verbs.html        # Dutch verb reference
│   ├── grammar-prepositions.html # Dutch prepositions reference
│   ├── grammar-sentences.html    # Sentence formation guide
│   ├── verb-quiz.html            # Verb conjugation quiz
│   └── preposition-quiz.html     # Preposition quiz
│
├── reading/                      # Reading hub & texts
│   ├── reading-hub.html          # Reading hub / exam picker
│   └── reading.html              # Reading exam page (split view)
│
├── knm/                          # Kennis van de Nederlandse Maatschappij
│   ├── knm.html                  # KNM chapter overview
│   └── knm-chapter.html          # Chapter question page
│
├── vocabulary/                   # Vocabulary section
│   ├── vocabulary.html           # Lesson selector
│   └── vocabulary-lesson.html    # Individual lesson page
│
├── css/                          # Modular CSS
│   ├── common/style.css          # Global variables & base styles
│   ├── common/navigation.css     # Shared nav/header styles
│   └── [module]/[module].css     # Per-section styles
│
├── js/                           # All JavaScript
│   ├── common/ai-service.js      # Pollinations.ai API wrapper (shared)
│   ├── common/common.js          # Shared utilities
│   ├── grammar/                  # Grammar scripts & data
│   ├── writing/                  # Writing scripts
│   ├── knm/                      # KNM data & logic
│   └── vocabulary/               # Vocabulary scripts & lesson data
│
├── assets/
│   └── audio/lesson-{n}/ex-{n}.mp3  # Pre-generated Dutch TTS audio
│
└── scripts/                      # Python utility scripts
    ├── generate_audio.py             # Generates audio for vocabulary exercises (lessons)
    └── generate_sentence_bank_audio.py  # Generates audio for sentence bank (116 phrases)
```

---

## 🔊 Audio Generation

Two scripts pre-generate Dutch TTS audio as `.mp3` files into `assets/audio/`.

### Scripts

| Script | Source data | Output |
|---|---|---|
| `generate_audio.py` | `js/vocabulary/progressive-dutch.js` | `assets/audio/lesson-{n}/ex-{n}.mp3` |
| `generate_sentence_bank_audio.py` | `js/writing/sentence-bank-data.js` | `assets/audio/sentence-bank/{id}.mp3` |
| `generate_elevenlabs_sentence_bank.py` | `js/writing/sentence-bank-data.js` | `assets/audio/sentence-bank/{id}.mp3` (High Quality) |

### How to run

```bash
# From the project root

# Option 1: Basic Audio (Google TTS)
pip install gtts
python scripts/generate_sentence_bank_audio.py

# Option 2: High Quality Audio (ElevenLabs)
# Edit scripts/generate_elevenlabs_sentence_bank.py to add your API_KEY first
python scripts/generate_elevenlabs_sentence_bank.py
```

Basic scripts (`generate_audio` and `generate_sentence_bank_audio`) **skip files that already exist and are > 2 KB**, so they are safe to re-run to fill in gaps. The ElevenLabs script overwrites files to upgrade them.

### ⚠️ Known Issues & Solutions

**Problem 1 — Pollinations `openai-audio` model: 429 rate limits + 404 errors**
- The original `generate_audio.py` used `https://text.pollinations.ai/?model=openai-audio`.
- The free anonymous tier allows **only 1 queued request per IP** → persistent `429` errors.
- After several retries the API also returns `404: Model not found: openai-audio` (endpoint is being deprecated for authenticated users, intermittently broken for anon users too).
- **Fix:** `generate_sentence_bank_audio.py` was rewritten to use **`gTTS`** (Google Text-to-Speech via `pip install gtts`) which is reliable, fast, and supports Dutch (`lang="nl"`).

**Problem 2 — Windows console `UnicodeEncodeError` on `✓` / `✗` characters**
- Python prints through Windows `cp1252` codec which doesn't support those characters.
- **Fix:** Use plain ASCII (`OK:` / `FAILED:`) in print statements, or add `sys.stdout.reconfigure(line_buffering=True)` at the top of the script.

**Problem 3 — Exponential backoff growing too large**
- Uncapped `delay *= 2` causes waits of 80s, 160s, etc. per entry, making the script appear frozen.
- **Fix:** Cap the delay: `delay = min(delay * 2, 15)`.

> **Recommendation:** Always prefer `gTTS` for new audio generation scripts. Pollinations is used for AI text features (chat/feedback) but should not be used for TTS.

---

## ✨ Features

### ✍️ Writing
| Tool | Description |
|---|---|
| **Exam Simulator** | Practice writing emails with AI feedback |
| **Forms Simulator** | Fill in Dutch administrative forms |
| **Writing Templates V2** | Study templates with AI-powered practice mode |

### 📚 Grammar
| Tool | Description |
|---|---|
| **Grammar Lab** | Sentence puzzles with AI checking |
| **Grammar Practice** | Fill-in-the-blank exercises with AI "Check" button |
| **Verb Reference** | 67 Dutch verbs with full conjugation tables |
| **Verb Quiz** | Static fill-in-the-blank conjugation quiz |
| **AI Verb Quiz (V2)** | Same quiz with AI-powered hints & error explanations |
| **Prepositions** | 40+ Dutch prepositions with examples |
| **Preposition Quiz** | Fill-in-the-blank preposition quiz |

### 📖 Reading
- Split-view layout: text on the left, questions on the right
- Multiple reading exams with scored progress tracking
- Sidebar toggleable on mobile

### 🏛️ KNM
- 8 chapters covering Dutch society, culture, history, and government
- ~20 questions per chapter (~160 total)
- Visual progress bars, 2-column question layout

### 🗣️ Vocabulary (Progressive Dutch Builder)
- 10 progressive lessons with 10 exercises each
- Audio auto-plays when the answer is revealed (pre-generated MP3, falls back to TTS)
- No memorization method inspired by Michel Thomas

---

## 🤖 AI Integration

All AI features use **[Pollinations.ai](https://pollinations.ai)** — **no API key required**.

| Feature | File | Method |
|---|---|---|
| Writing feedback | `ai-service.js` | `checkText()` |
| Grammar sentence check | `ai-service.js` | `checkSentence()` |
| Smart grammar validation + feedback | `ai-service.js` | `smartAnalyze()` |
| AI verb hints (V2 Quiz) | `ai-service.js` | `getVerbHint()` |
| AI verb error explanation (V2 Quiz) | `ai-service.js` | `explainVerbError()` |

---

## 💾 Data & State

All progress is saved in **`localStorage`**:

| Key | Contents |
|---|---|
| `reading-progress` | Score per reading exam |
| `reading-bookmarks` | Bookmarked text IDs |
| `knm-progress` | Chapter completion status |
| `completedLessons` | Completed vocabulary lesson IDs |
| `verb-quiz-scores` | High scores per level |

---

## 🛠️ Tech Stack

- **HTML5 + CSS3 + Vanilla JS (ES6+)**
- **CSS Variables** for consistent theming (`css/common/style.css`)
- **No frameworks, no build step** — open `index.html` directly in a browser
- **Python** (optional) — used for the `scripts/generate_audio.py` utility to pre-generate audio files via Pollinations.ai TTS

---

## 🚀 Running Locally

Simply open `index.html` in your browser. No server needed for most features.

> **Note:** Audio playback from local `assets/audio/` files may require a local HTTP server (e.g. VS Code Live Server) — browsers may block local file audio due to CORS policy. TTS fallback via Web Speech API will work without a server.

---

*Dutch A2 Exam Preparation App — Last updated February 2026.*
