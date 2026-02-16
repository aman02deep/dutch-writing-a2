# 🇳🇱 Dutch A2 Practice App - Developer Guide

## 📌 Overview
This is a comprehensive, local-first web application designed for Dutch A2 learners preparing for the Inburgering exam. It covers all 5 exam components:
1.  **Writing (Schrijven)**
2.  **Reading (Lezen)**
3.  **Listening (Luisteren / Audio)**
4.  **KNM (Kennis van de Nederlandse Maatschappij)**
5.  **Grammar (Grammatica)**

The app is built with **Vanilla HTML, CSS, and JavaScript** with no build steps or external dependencies, making it extremely easy to modify and run.

---

## 📂 Project Structure

```
c:/Learning/Dutch/app/
├── index.html              # Main dashboard
├── css/                    # Modular CSS files
│   ├── style.css           # Global variables & base styles
│   ├── navigation.css      # Header & nav components
│   └── [module].css        # Specific module styles (reading.css, verbs.css)
├── js/                     # Component logic & Data
│   ├── [module].js         # UI Controllers (reading.js, verbs.js)
│   └── questions-[mod].js  # Data files (questions-reading.js)
└── [module].html           # Module entry points
```

---

## 🛠️ Technology Stack

-   **HTML5**: Semantic markup.
-   **CSS3**:
    -   **Variables**: Defined in `style.css` for easy theming.
    -   **Flexbox/Grid**: Used for all layouts.
    -   **Mobile-First**: All pages are fully responsive.
-   **JavaScript (ES6+)**:
    -   **Modular Design**: Functions are split into logic (`.js`) and data (`questions-*.js`).
    -   **State Management**: `localStorage` is used to save all user progress.

---

## 🎨 Design System

The app follows a consistent design language defined in `css/style.css`.

### 1. Color Palette
Defined as CSS variables in `:root`.

| Variable | Color | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `--primary` | 🔵 Blue | `#0052cc` | Main Brand, Primary Buttons, Links |
| `--accent` | 🔴 Red | `#d92626` | Call to Actions, "Danger" operations |
| `--success` | � Green | `#2e7d32` | Correct answers, Success states |
| `--warning` | 🟠 Orange | `#f57f17` | Progress bars, Partial states |
| `--bg-gray` | 🌫️ Gray | `#f0f2f5` | Page Background |
| `--text-color` | ⚫ Black | `#333333` | Main Text |

### 2. Typography
-   **Font Family**: `'Segoe UI', system-ui, sans-serif`
-   **Scale**:
    -   `h1`: Dashboard Hero
    -   `h2`: Section Headers, Card Titles
    -   `p`: Body text (optimized for readability)

### 3. UI Components

#### Buttons
-   `.btn-primary`: Solid Brand Blue background. Used for main actions.
-   `.btn-secondary`: White background with Border. Used for secondary actions (Cancel, Back).
-   `.btn-danger`: White background with Red Border. Used for destructive actions (Reset).

#### Cards
-   `.card`: White background, rounded corners (`8px`), soft shadow (`box-shadow: 0 4px 6px`).
-   Used for: Dashboard tiles, Exam selectors, KNM chapters.

#### Navigation (`css/navigation.css`)
-   `.nav-header`: Sticky top bar with shadow.
-   `.nav-home`: "Home" pill with icon and hover effect.
-   `.nav-page-title`: Centered page title.

### 4. Layout Utilities
-   `.container`: Centers content with `max-width: 1400px`.
-   `.grid`: CSS Grid layout with `auto-fill` responsible for responsive card grids.
    -   *Desktop*: 3-4 columns
    -   *Tablet*: 2 columns
    -   *Mobile*: 1 column

### 5. Mobile Patterns
-   **Breakpoints**: `< 768px` is treated as Mobile.
-   **Sidebar Behavior**:
    -   **Desktop**: Sidebars (Reading, Forms) are fixed/visible on the left.
    -   **Mobile**: Sidebars are hidden off-canvas. Triggered via Hamburger Menu (`≡`).
-   **Backdrop**: `#sidebar-backdrop` overlays content when sidebar is open on mobile.

---

## 🧩 Core Modules

### 1. ✍️ Writing (`writing.html`)
-   **Exam Simulation**: Tasks (Emails) with validation.
-   **Forms**: Simulates Dutch forms.
-   **Grammar Lab**: Interactive puzzles.

### 2. 📖 Reading (`reading.html`)
-   **Split View**: Text (Left) vs Questions (Right).
-   **State**: Tracks progress & bookmarks in `localStorage`.

### 3. 🏛️ KNM (`knm.html`)
-   **Chapters**: 8 Topics.
-   **Tracking**: Visual progress bars per chapter.

---

## � Data & State Management

**All progress is saved locally using `localStorage` keys:**
-   `reading-progress`: Stores scores per exam `{score: 15, total: 25}`.
-   `reading-bookmarks`: Array of IDs `['text-1-1']`.
-   `knm-progress`: Completion status.
-   `verb-quiz-scores`: High scores.

---

## 👨‍💻 Developer Reference (AI Context)

This section is designed to help AI agents understand the codebase without reading every file.

### 1. Data Schemas
#### Reading Exam Data (`js/questions-reading.js`)
```javascript
const readingExams = [
    {
        id: "exam1", // Unique Exam ID
        title: "Oefentoets 1",
        texts: [
            {
                id: "e1-t1", // Unique Text ID
                title: "Tekst 1: Title",
                context: "Context paragraph...",
                text: "Main text content...",
                questions: [
                    {
                        id: "q1",
                        question: "Question text?",
                        options: ["Opt A", "Opt B", "Opt C"],
                        correct: 1 // Index of correct option (0-based)
                    }
                ]
            }
        ]
    }
];
```

### 2. Key State Objects (`js/reading.js`)
- `currentExamId`: String (e.g., `'exam1'`)
- `currentTextIndex`: Integer (0-based)
- `userAnswers`: Object `{ qIndex: optIndex }` (e.g., `{ 0: 1, 1: 0 }`)
- `examScores`: Object `{ textIndex: { score: 2, total: 3 } }`

### 3. Critical Functions
- **`init()`**: Entry point. Checks URL params (`?exam=exam1`).
- **`loadText(index)`**: Renders text & questions. Resets `userAnswers`.
- **`checkAnswers()`**: Validates input, updates `examScores`, saves to `localStorage`.
- **`toggleSidebar()`**: Handles mobile/desktop sidebar visibility (`.open` class).

---

## 🚀 Future Roadmap

1.  **Audio Upgrade**: Replace TTS with native audio.
2.  **Writing Analysis**: Integrate local LLM/Regex.
3.  **Export Data**: JSON export for backup.
4.  **PWA Support**: Offline capability.

---
*Created for the Dutch A2 Learning App Project.*
 
