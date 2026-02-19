// Progressive Dutch Builder - Michel Thomas Inspired Learning
// All content is original and copyright-safe

const lessons = [
    {
        id: 1,
        title: "Subject + Verb (Present Tense)",
        description: "Learn basic sentence structure with 'to be' and 'to have'",
        exercises: [
            { english: "I am", dutch: "Ik ben", explanation: "Basic present tense of 'zijn' (to be)" },
            { english: "You are", dutch: "Jij bent", explanation: "Informal 'you'" },
            { english: "He is", dutch: "Hij is", explanation: "Third person singular" },
            { english: "She is", dutch: "Zij is", explanation: "Third person singular feminine" },
            { english: "We are", dutch: "Wij zijn", explanation: "First person plural" },
            { english: "I have", dutch: "Ik heb", explanation: "Present tense of 'hebben' (to have)" },
            { english: "You have", dutch: "Jij hebt", explanation: "Informal 'you' with hebben" },
            { english: "He has", dutch: "Hij heeft", explanation: "Third person singular" },
            { english: "I am here", dutch: "Ik ben hier", explanation: "Adding location 'hier' (here)" },
            { english: "You are there", dutch: "Jij bent daar", explanation: "Adding location 'daar' (there)" }
        ]
    },
    {
        id: 2,
        title: "Adding Objects",
        description: "Build sentences with direct objects",
        exercises: [
            { english: "I have a book", dutch: "Ik heb een boek", explanation: "'een' = a/an, 'boek' = book" },
            { english: "You have a house", dutch: "Jij hebt een huis", explanation: "'huis' = house" },
            { english: "He has a car", dutch: "Hij heeft een auto", explanation: "'auto' = car" },
            { english: "I have the book", dutch: "Ik heb het boek", explanation: "'het' = the (neuter)" },
            { english: "You have the house", dutch: "Jij hebt het huis", explanation: "Neuter article" },
            { english: "She has a cat", dutch: "Zij heeft een kat", explanation: "'kat' = cat" },
            { english: "We have a dog", dutch: "Wij hebben een hond", explanation: "'hond' = dog" },
            { english: "I am a teacher", dutch: "Ik ben een leraar", explanation: "'leraar' = teacher" },
            { english: "You are a student", dutch: "Jij bent een student", explanation: "'student' = student" },
            { english: "He is a doctor", dutch: "Hij is een dokter", explanation: "'dokter' = doctor" }
        ]
    },
    {
        id: 3,
        title: "Time Expressions",
        description: "Add when things happen",
        exercises: [
            { english: "I go", dutch: "Ik ga", explanation: "Present tense of 'gaan' (to go)" },
            { english: "I go tomorrow", dutch: "Ik ga morgen", explanation: "'morgen' = tomorrow" },
            { english: "You go today", dutch: "Jij gaat vandaag", explanation: "'vandaag' = today" },
            { english: "He goes now", dutch: "Hij gaat nu", explanation: "'nu' = now" },
            { english: "I work tomorrow", dutch: "Ik werk morgen", explanation: "'werken' = to work" },
            { english: "You work today", dutch: "Jij werkt vandaag", explanation: "Present tense conjugation" },
            { english: "I am here today", dutch: "Ik ben hier vandaag", explanation: "Combining location and time" },
            { english: "You have time now", dutch: "Jij hebt nu tijd", explanation: "'tijd' = time" },
            { english: "She goes later", dutch: "Zij gaat later", explanation: "'later' = later" },
            { english: "We work tomorrow", dutch: "Wij werken morgen", explanation: "Plural conjugation" }
        ]
    },
    {
        id: 4,
        title: "Questions",
        description: "Learn to ask questions",
        exercises: [
            { english: "Where is?", dutch: "Waar is?", explanation: "'Waar' = where" },
            { english: "Where is the book?", dutch: "Waar is het boek?", explanation: "Question word order" },
            { english: "Where are you?", dutch: "Waar ben jij?", explanation: "Inverted word order" },
            { english: "What is?", dutch: "Wat is?", explanation: "'Wat' = what" },
            { english: "What is that?", dutch: "Wat is dat?", explanation: "'dat' = that" },
            { english: "Who is?", dutch: "Wie is?", explanation: "'Wie' = who" },
            { english: "Who are you?", dutch: "Wie ben jij?", explanation: "Question formation" },
            { english: "When do you go?", dutch: "Wanneer ga jij?", explanation: "'Wanneer' = when" },
            { english: "How are you?", dutch: "Hoe ben jij?", explanation: "'Hoe' = how" },
            { english: "Why do you work?", dutch: "Waarom werk jij?", explanation: "'Waarom' = why" }
        ]
    },
    {
        id: 5,
        title: "Negations",
        description: "Make negative sentences",
        exercises: [
            { english: "I am not", dutch: "Ik ben niet", explanation: "'niet' = not (comes after verb)" },
            { english: "You are not here", dutch: "Jij bent niet hier", explanation: "Negating location" },
            { english: "He is not there", dutch: "Hij is niet daar", explanation: "Standard negation" },
            { english: "I do not have", dutch: "Ik heb niet", explanation: "Negating 'hebben'" },
            { english: "I do not have a book", dutch: "Ik heb geen boek", explanation: "'geen' = no/not a (before noun)" },
            { english: "You do not have a car", dutch: "Jij hebt geen auto", explanation: "Using 'geen' with objects" },
            { english: "I do not go", dutch: "Ik ga niet", explanation: "Negating action verbs" },
            { english: "You do not work", dutch: "Jij werkt niet", explanation: "Standard verb negation" },
            { english: "She does not have time", dutch: "Zij heeft geen tijd", explanation: "'geen' with abstract nouns" },
            { english: "We are not students", dutch: "Wij zijn geen studenten", explanation: "Plural negation" }
        ]
    },
    {
        id: 6,
        title: "Modal Verbs",
        description: "Express ability, permission, and obligation",
        exercises: [
            { english: "I can", dutch: "Ik kan", explanation: "'kunnen' = can/to be able to" },
            { english: "I can go", dutch: "Ik kan gaan", explanation: "Modal + infinitive" },
            { english: "You can work", dutch: "Jij kunt werken", explanation: "Alternative form 'kunt'" },
            { english: "I must", dutch: "Ik moet", explanation: "'moeten' = must/have to" },
            { english: "I must go", dutch: "Ik moet gaan", explanation: "Expressing obligation" },
            { english: "You must work", dutch: "Jij moet werken", explanation: "Modal structure" },
            { english: "I want", dutch: "Ik wil", explanation: "'willen' = to want" },
            { english: "I want to go", dutch: "Ik wil gaan", explanation: "Expressing desire" },
            { english: "You may go", dutch: "Jij mag gaan", explanation: "'mogen' = may/to be allowed" },
            { english: "I can not go", dutch: "Ik kan niet gaan", explanation: "Negating modals" }
        ]
    },
    {
        id: 7,
        title: "Past Tense (Perfect)",
        description: "Talk about completed actions",
        exercises: [
            { english: "I have worked", dutch: "Ik heb gewerkt", explanation: "Perfect tense with 'hebben'" },
            { english: "You have worked", dutch: "Jij hebt gewerkt", explanation: "Past participle 'gewerkt'" },
            { english: "He has gone", dutch: "Hij is gegaan", explanation: "Motion verbs use 'zijn'" },
            { english: "I have been", dutch: "Ik ben geweest", explanation: "Perfect of 'zijn'" },
            { english: "You have had", dutch: "Jij hebt gehad", explanation: "Perfect of 'hebben'" },
            { english: "I have seen", dutch: "Ik heb gezien", explanation: "'zien' = to see" },
            { english: "You have said", dutch: "Jij hebt gezegd", explanation: "'zeggen' = to say" },
            { english: "She has come", dutch: "Zij is gekomen", explanation: "'komen' uses 'zijn'" },
            { english: "We have done", dutch: "Wij hebben gedaan", explanation: "'doen' = to do" },
            { english: "I have not worked", dutch: "Ik heb niet gewerkt", explanation: "Negating perfect tense" }
        ]
    },
    {
        id: 8,
        title: "Prepositions & Location",
        description: "Describe where things are",
        exercises: [
            { english: "in the house", dutch: "in het huis", explanation: "'in' = in" },
            { english: "on the table", dutch: "op de tafel", explanation: "'op' = on, 'de tafel' = the table" },
            { english: "under the table", dutch: "onder de tafel", explanation: "'onder' = under" },
            { english: "I am in the house", dutch: "Ik ben in het huis", explanation: "Location with preposition" },
            { english: "The book is on the table", dutch: "Het boek is op de tafel", explanation: "Complete sentence" },
            { english: "next to the house", dutch: "naast het huis", explanation: "'naast' = next to" },
            { english: "behind the car", dutch: "achter de auto", explanation: "'achter' = behind" },
            { english: "in front of the house", dutch: "voor het huis", explanation: "'voor' = in front of/before" },
            { english: "between the houses", dutch: "tussen de huizen", explanation: "'tussen' = between" },
            { english: "I go to the house", dutch: "Ik ga naar het huis", explanation: "'naar' = to (direction)" }
        ]
    },
    {
        id: 9,
        title: "Adjectives & Descriptions",
        description: "Describe people and things",
        exercises: [
            { english: "a big house", dutch: "een groot huis", explanation: "Adjective before noun" },
            { english: "a small car", dutch: "een kleine auto", explanation: "'-e' ending with 'de' words" },
            { english: "the big house", dutch: "het grote huis", explanation: "'-e' ending with definite article" },
            { english: "I have a good book", dutch: "Ik heb een goed boek", explanation: "'goed' = good" },
            { english: "You are nice", dutch: "Jij bent aardig", explanation: "'aardig' = nice" },
            { english: "The house is big", dutch: "Het huis is groot", explanation: "Predicate adjective (no -e)" },
            { english: "a beautiful day", dutch: "een mooie dag", explanation: "'mooi' = beautiful" },
            { english: "an old book", dutch: "een oud boek", explanation: "'oud' = old" },
            { english: "a new car", dutch: "een nieuwe auto", explanation: "'nieuw' = new" },
            { english: "The car is expensive", dutch: "De auto is duur", explanation: "'duur' = expensive" }
        ]
    },
    {
        id: 10,
        title: "Complex Sentences",
        description: "Combine everything you've learned",
        exercises: [
            { english: "I want to go to the house", dutch: "Ik wil naar het huis gaan", explanation: "Modal + direction + infinitive" },
            { english: "You can not work tomorrow", dutch: "Jij kunt morgen niet werken", explanation: "Modal + time + negation" },
            { english: "Where have you been?", dutch: "Waar ben jij geweest?", explanation: "Question in perfect tense" },
            { english: "I have a big house in Amsterdam", dutch: "Ik heb een groot huis in Amsterdam", explanation: "Adjective + location" },
            { english: "She must go to the doctor today", dutch: "Zij moet vandaag naar de dokter gaan", explanation: "Complex sentence structure" },
            { english: "We have not seen the new car", dutch: "Wij hebben de nieuwe auto niet gezien", explanation: "Perfect tense + adjective + negation" },
            { english: "Why do you want to work tomorrow?", dutch: "Waarom wil jij morgen werken?", explanation: "Question + modal + time" },
            { english: "The book is on the small table", dutch: "Het boek is op de kleine tafel", explanation: "Preposition + adjective" },
            { english: "I can not go because I must work", dutch: "Ik kan niet gaan omdat ik moet werken", explanation: "'omdat' = because (subordinate clause)" },
            { english: "Have you been to the beautiful house?", dutch: "Ben jij naar het mooie huis geweest?", explanation: "Perfect tense question with adjective" }
        ]
    }
];

// State management
let currentLesson = 1;
let currentExercise = 0;
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];

// Text-to-speech functionality
function speakDutch(text, lessonId = currentLesson, exerciseIndex = currentExercise) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Try to play pre-generated audio file first
    // Path: ../assets/audio/lesson-{id}/ex-{index}.mp3
    // Note: We need to use relative path from the HTML file (which is in vocabulary/ folder)
    // So: ../assets/audio/...

    const audioPath = `../assets/audio/lesson-${lessonId}/ex-${exerciseIndex}.mp3`;
    const audio = new Audio(audioPath);

    audio.play().catch(e => {
        // Fallback to Web Speech API if file doesn't exist or fails
        console.warn("Audio file not found or failed, using fallback:", audioPath);

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'nl-NL';
        utterance.rate = 0.8; // Slightly faster for natural flow
        utterance.pitch = 1.0;

        window.speechSynthesis.speak(utterance);
    });
}

// Initialize lesson view
function initializeLesson(lessonId) {
    currentLesson = lessonId;
    currentExercise = 0;

    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-description').textContent = lesson.description;
    document.getElementById('exercise-counter').textContent = `Exercise 1 of ${lesson.exercises.length}`;

    displayExercise();
}

// Display current exercise
function displayExercise() {
    const lesson = lessons.find(l => l.id === currentLesson);
    const exercise = lesson.exercises[currentExercise];

    document.getElementById('english-prompt').textContent = exercise.english;
    document.getElementById('dutch-answer').textContent = exercise.dutch;
    document.getElementById('explanation').textContent = exercise.explanation;
    document.getElementById('exercise-counter').textContent =
        `Exercise ${currentExercise + 1} of ${lesson.exercises.length}`;

    // Hide answer initially
    document.getElementById('answer-section').classList.add('hidden');
    document.getElementById('reveal-btn').classList.remove('hidden');
}

// Reveal answer
function revealAnswer() {
    document.getElementById('answer-section').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');

    // Auto-play audio
    const lesson = lessons.find(l => l.id === currentLesson);
    const exercise = lesson.exercises[currentExercise];
    speakDutch(exercise.dutch);
}

// Navigation
function nextExercise() {
    const lesson = lessons.find(l => l.id === currentLesson);

    if (currentExercise < lesson.exercises.length - 1) {
        currentExercise++;
        displayExercise();
    } else {
        // Lesson complete
        if (!completedLessons.includes(currentLesson)) {
            completedLessons.push(currentLesson);
            localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
        }
        showLessonComplete();
    }
}

function previousExercise() {
    if (currentExercise > 0) {
        currentExercise--;
        displayExercise();
    }
}

function showLessonComplete() {
    document.getElementById('exercise-area').classList.add('hidden');
    document.getElementById('lesson-complete').classList.remove('hidden');
}

function returnToLessons() {
    window.location.href = 'vocabulary.html';
}

function nextLesson() {
    if (currentLesson < lessons.length) {
        initializeLesson(currentLesson + 1);
        document.getElementById('lesson-complete').classList.add('hidden');
        document.getElementById('exercise-area').classList.remove('hidden');
    } else {
        returnToLessons();
    }
}

// Render lesson list on main page
function renderLessonList() {
    const container = document.getElementById('lessons-container');
    if (!container) return;

    container.innerHTML = '';

    lessons.forEach(lesson => {
        const isCompleted = completedLessons.includes(lesson.id);

        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card';
        if (isCompleted) lessonCard.classList.add('completed');

        lessonCard.innerHTML = `
            <div class="lesson-number">Lesson ${lesson.id}</div>
            <h3>${lesson.title}</h3>
            <p>${lesson.description}</p>
            <div class="lesson-meta">
                <span>${lesson.exercises.length} exercises</span>
                ${isCompleted ? '<span class="completed-badge">✓ Completed</span>' : ''}
            </div>
            <button onclick="startLesson(${lesson.id})" class="btn-primary">
                ${isCompleted ? 'Review Lesson' : 'Start Lesson'} →
            </button>
        `;

        container.appendChild(lessonCard);
    });
}

function startLesson(lessonId) {
    window.location.href = `vocabulary-lesson.html?lesson=${lessonId}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the lesson list page or lesson page
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = urlParams.get('lesson');

    if (lessonId) {
        // We're on a lesson page
        initializeLesson(parseInt(lessonId));
    } else {
        // We're on the main lessons list page
        renderLessonList();
    }
});
