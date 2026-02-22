# 🤖 Technical Reference for AI Assistants

This document serves as a guide to the architectural patterns, shared components, and conventions used in this application. Please **read this file before modifying shared UI components or making deep integrations.**

## 1. Unified Floating Action Button (FAB) System
To prevent UI clutter and ensure consistent positioning, all floating buttons (FABs) must use the decentralized injection system instead of being hardcoded into HTML.

**How it works:**
- The container is automatically created or retrieved by calling `getOrCreateFabContainer()` (defined in `js/common/common.js`).
- This creates a `#fab-container` at the bottom-right of the screen with `flex-direction: column-reverse`, ensuring buttons grow upwards from the bottom.
- Individual features (Vocabulary, Verbs, AI Chat) have their own logic (e.g., `createVocabButton()`, `aiRoleplay.injectUI()`) that appends a `<button class="fab-item">` to this shared container.

**Creating a new FAB:**
1. Do **not** hardcode the button in HTML.
2. In your feature's JS script (e.g., `myfeature-ui.js`), wait for DOMContentLoaded, then call `getOrCreateFabContainer()`.
3. Create a `<button class="fab-item">`. Add color variant classes (like `fab-blue`, `fab-orange`, `fab-purple`) defined in `style.css`.
4. Append it to the container.

**Current Stacking Order:**
Because it uses `column-reverse`, the button appended *first* is at the *bottom*. The script loading order in the HTML `<head>` or `<body>` dictates the stack order.
Standard order (bottom to top): `AI Chat` (orange) → `Vocab` (blue) → `Verbs` (purple) → `Sentence Structure` (blue).

## 2. AI Roleplay (Grammar Chat) Architecture
The `ai-roleplay.js` module provides a slide-out conversational UI for contextual tasks (like practicing an exam scenario or asking grammar questions).

**How to enable it on a page:**
1. Include `common.css`, `ai-roleplay.css`, `common.js`, `ai-service.js`, and `ai-roleplay.js` in the HTML.
2. Define a global `window.roleplayConfig` object *before* DOMContentLoaded fires:
   ```html
   <script>
       window.roleplayConfig = {
           systemPrompt: "You are a Dutch grammar expert. The user is asking about...",
           scenarioDesc: "Ask me any grammar question.",
           buttonText: "Grammar Chat" // Tooltip or extended text for the FAB
       };
   </script>
   ```
3. The `AIRoleplay` class automatically detects this config and injects the orange `🗣️` FAB into the unified container.

**Minimize vs Close:**
The chat header contains two buttons:
- **Minimize (`_`)** — Calls `toggleChat()`. Slides the panel off-screen. Preserves `this.messages` (full conversation history), so reopening the chat continues where it left off.
- **Close (`✕`)** — Calls `closeAndClearChat()`. Slides the panel off-screen AND clears `this.messages` + empties the `#roleplay-body` DOM. The next open will fire a fresh system prompt and start a new session.

**Keyboard shortcut guards:**
The Verbs (`Ctrl+V`) and Sentence Structure (`Ctrl+S`) shortcuts are guarded to not fire when the focused element is an `<input>`, `<textarea>`, or `<select>`. This prevents accidental overlay opens while typing in the AI Chat.

## 3. Settings UI & Dynamic Injection
The API Key configuration modal (`settings.js`) is also dynamically injected into the navigation bar (`.nav-container`).
- Adding `<script src="../js/common/settings.js"></script>` automatically injects the **AI** settings gear icon into the nav bar.
- It saves configuration (API keys, toggles) directly to `localStorage`.
- To respond to settings changes without refreshing the page, listen for the global event:
  `window.addEventListener('ai-settings-changed', (e) => { ... })`

## 4. CSS Modularity
- Shared utilities and classes are strictly kept in `css/common/` (e.g., `style.css` for CSS variables and base elements, `navigation.css`).
- Feature-specific styles go into their respective folders (`css/grammar/verbs.css`).
- Always use CSS variables from `:root` in `style.css` for colors (`var(--primary)`, `var(--secondary)`) to maintain the global theme.

## 5. Script Inclusion Best Practices
If your new script relies on shared logic:
- Ensure `common.js` is included *before* your script for utility functions like `getOrCreateFabContainer`.
- Ensure `ai-service.js` is included if you plan to make API requests to Pollinations.ai or OpenRouter.

## 6. AI Integration & API Methods
AI features support three providers. The active provider is selected from the **Settings gear** in the top nav. Pollinations is always the fallback.

| Provider | API Key required | Key stored as |
|---|---|---|
| **Pollinations.ai** | No | *(none — fallback)* |
| **Groq** | Yes | `ai-api-key-groq` |
| **OpenRouter** | Yes | `ai-api-key-openrouter` |

| Feature | File | Method |
|---|---|---|
| Writing feedback | `ai-service.js` | `checkText()` |
| Grammar sentence check | `ai-service.js` | `checkSentence()` |
| Smart grammar validation + feedback | `ai-service.js` | `smartAnalyze()` |
| AI verb hints (V2 Quiz) | `ai-service.js` | `getVerbHint()` |
| AI verb error explanation (V2 Quiz) | `ai-service.js` | `explainVerbError()` |

## 7. Data & State Management (localStorage)
All progress is saved in the browser's **`localStorage`**:

| Key | Contents |
|---|---|
| `reading-progress` | Score per reading exam |
| `reading-bookmarks` | Bookmarked text IDs |
| `knm-progress` | Chapter completion status |
| `completedLessons` | Completed vocabulary lesson IDs |
| `verb-quiz-scores` | High scores per level |
| `ai-provider` | Selected AI provider (`pollinations` / `groq` / `openrouter`) |
| `ai-api-key-groq` | Groq API key (provider-specific) |
| `ai-api-key-openrouter` | OpenRouter API key (provider-specific) |
| `ai-roleplay-enabled` | `true`/`false` — whether AI Chat FAB is shown |

## 8. Python Audio Generation Utilities
Two scripts pre-generate Dutch TTS audio as `.mp3` files into `assets/audio/`.

### Scripts
| Script | Source data | Output |
|---|---|---|
| `generate_audio.py` | `js/vocabulary/progressive-dutch.js` | `assets/audio/lesson-{n}/ex-{n}.mp3` |
| `generate_sentence_bank_audio.py` | `js/writing/sentence-bank-data.js` | `assets/audio/sentence-bank/{id}.mp3` |
| `generate_elevenlabs_sentence_bank.py` | `js/writing/sentence-bank-data.js` | `assets/audio/sentence-bank/{id}.mp3` (High Quality) |

### How to run
```bash
# Option 1: Basic Audio (Google TTS)
pip install gtts
python scripts/generate_sentence_bank_audio.py

# Option 2: High Quality Audio (ElevenLabs)
python scripts/generate_elevenlabs_sentence_bank.py
```
*Note: Basic scripts skip files that already exist and are > 2 KB. ElevenLabs script overwrites files.*

### ⚠️ Known Issues regarding TTS Generation
**Problem 1 — Pollinations `openai-audio` model: 429 errors**
- The original `generate_audio.py` used Pollinations, but the free anonymous tier allows **only 1 queued request per IP**.
- **Fix:** New scripts use **`gTTS`** (Google Text-to-Speech) which is reliable and fast.

**Problem 2 — Windows console `UnicodeEncodeError`**
- Python prints through Windows `cp1252` codec which breaks on `✓` / `✗`.
- **Fix:** Use plain ASCII (`OK:` / `FAILED:`) in print statements.

**Recommendation:** Always prefer `gTTS` or ElevenLabs for new audio generation scripts. Pollinations is currently only reliable for AI text features (chat/feedback), not bulk TTS.
