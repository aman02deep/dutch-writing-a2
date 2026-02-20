/**
 * Preposition Quiz — uses shared QuizEngine with preposition-specific configuration.
 */
document.addEventListener('DOMContentLoaded', () => {
    const categoryNames = {
        'place': 'Place (where?)',
        'time': 'Time (when?)',
        'direction': 'Direction (where to/from?)',
        'manner': 'Manner (how?)',
        'purpose': 'Purpose (what for?)',
        'topic': 'Topic (about what?)',
        'fixed_verb': 'Fixed verb combination',
        'fixed_expression': 'Fixed expression'
    };

    const quiz = new QuizEngine({
        data: prepositionQuizData,
        questionsPerRound: 10,
        hintFormatter: (q) => {
            const catName = categoryNames[q.category] || q.category;
            return `<strong>💡 Hint:</strong> ${q.hint} (category: <em>${catName}</em>)`;
        },
        wrongFormatter: (q) => `The correct answer is: <strong>${q.answer}</strong>`,
        aiErrorContext: (q, userAnswer) =>
            `Sentence: "${q.sentence}"
Correct preposition: "${q.answer}"
Student wrote: "${userAnswer}"
English meaning: "${q.english}"
Category: ${q.category}`
    });

    // Expose for onclick handlers in HTML
    window.showHint = () => quiz.showHint();
    window.checkAnswer = () => quiz.checkAnswer();
    window.nextQuestion = () => quiz.nextQuestion();
    window.restartQuiz = () => quiz.start();
});
