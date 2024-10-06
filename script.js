function submitQuiz() {
    const correctAnswers = {
        q1: 'b', 
        q2: 'a', 
        q3: 'a', 
        q4: 'a', 
        q5: 'c'  
    };

    let score = 0;
    const totalQuestions = 5;

    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    for (let [question, answer] of formData.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';

    if (score === totalQuestions) {
        resultElement.innerHTML = `<p class="correct">Parabéns! Você acertou todas as perguntas!</p>`;
    } else {
        resultElement.innerHTML = `<p class="incorrect">Você acertou ${score} de ${totalQuestions} perguntas. Continue praticando!</p>`;
    }
}