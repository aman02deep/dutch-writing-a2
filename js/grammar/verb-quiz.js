/**
 * Verb Quiz — uses shared QuizEngine with verb-specific configuration.
 */
document.addEventListener('DOMContentLoaded', () => {
    const quiz = new QuizEngine({
        data: verbQuizData,
        questionsPerRound: 10,
        hintFormatter: (q) => `<strong>💡 Hint:</strong> ${q.hint} (infinitive: <em>${q.infinitive}</em>)`,
        wrongFormatter: (q) => `The correct answer is: <strong>${q.answer}</strong> (${q.infinitive})`,
        aiErrorContext: (q, userAnswer) =>
            `Sentence: "${q.sentence}"
Correct answer: "${q.answer}" (infinitive: ${q.infinitive})
Student wrote: "${userAnswer}"
English meaning: "${q.english}"`
    });

    // Expose for onclick handlers in HTML
    window.showHint = () => quiz.showHint();
    window.checkAnswer = () => quiz.checkAnswer();
    window.nextQuestion = () => quiz.nextQuestion();
    window.restartQuiz = () => quiz.start();
});
