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
│   ├── common/ai-service.js      # AI provider wrapper (Groq, OpenRouter, Pollinations fallback)
│   ├── common/ai-roleplay.js     # AI Chat UI (slide-out sidebar, Minimize/Close session control)
│   ├── common/settings.js        # AI Settings gear — provider & per-provider API key management
│   ├── common/common.js          # Shared utilities
│   ├── grammar/                  # Grammar scripts & data
│   ├── writing/                  # Writing scripts
│   ├── knm/                      # KNM data & logic
│   └── vocabulary/               # Vocabulary scripts & lesson data
│
├── assets/
│   └── audio/lesson-{n}/ex-{n}.mp3  # Pre-generated Dutch TTS audio
│
├── scripts/                      # Python utility scripts
│   ├── generate_audio.py             # Generates audio for vocabulary exercises (lessons)
│   ├── generate_sentence_bank_audio.py  # Generates audio for sentence bank
│   ├── generate_elevenlabs_sentence_bank.py # High-quality ElevenLabs TTS replacement
│   ├── add_settings_css.py           # Auto-injects settings CSS link
│   └── add_seo_tags.py               # Auto-injects SEO & copyright meta tags
```

---

## 🛠️ Technical Reference & Developer Guide

If you are extending the application, modifying shared components, running the Python data generation scripts, or contributing as an AI Assistant, please read the **[`AI_REFERENCE.md`](./AI_REFERENCE.md)** file first.

The `AI_REFERENCE.md` covers:
- The Unified Floating Action Button (FAB) system architecture.
- AI Chat UI configuration and injection.
- The `localStorage` schema and data state mapping.
- Specific JS methods for AI integration (Pollinations.ai).
- How to run the Python `assets/audio` generation scripts and bypass rate limits.

---

## 🛠️ Tech Stack

- **HTML5 + CSS3 + Vanilla JS (ES6+)**
- **CSS Variables** for consistent theming (`css/common/style.css`)
- **No frameworks, no build step** — open `index.html` directly in a browser
- **Python** (optional) — used for the `scripts/generate_audio.py` utility to pre-generate audio files via Pollinations.ai TTS

---

## 🚀 Running Locally

Simply open `index.html` in your browser. No server needed for most features.

---

*Dutch A2 Exam Preparation App — Last updated February 2026.*

---

## 🔄 Recent Changes

| Area | Change |
|---|---|
| AI Chat | Added **Minimize** (`_`) button — hides chat, preserves history |
| AI Chat | **Close** (`✕`) now ends session and clears history entirely |
| AI Settings | API keys are now stored **per provider** (e.g. `ai-api-key-groq`) |
| Shortcuts | `Ctrl+V` / `Ctrl+S` guards added — don't fire inside text inputs |
| `vocabulary-lesson.html` | Removed broken `buttons.css` / `toast.css` link tags (files don't exist) |
| `exam-sim.html` | Added missing `vocabulary.js` dependency for the vocabulary FAB |
