let currentQuestion = 0;

// Perguntas do questionário
const questions = [
    {
        question: "Qual é a principal causa do desmatamento?",
        options: ["Expansão agrícola", "Turismo", "Atividades de lazer"],
        correct: 0
    },
    {
        question: "Qual bioma brasileiro é o mais ameaçado pelo desmatamento?",
        options: ["Pantanal", "Amazônia", "Caatinga"],
        correct: 1
    },
    {
        question: "Como você pode ajudar a combater o desmatamento?",
        options: ["Reciclando", "Plantando árvores", "Ambos"],
        correct: 2
    }
];

// Função para começar o questionário
function startQuiz() {
    window.location.href = 'question.html';
}

// Função para carregar a próxima pergunta
function loadQuestion() {
    const questionContainer = document.getElementById("question-container");

    if (currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        questionContainer.innerHTML = `
            <h2>${questionData.question}</h2>
            <div class="options">
                ${questionData.options.map((option, index) => `
                    <button onclick="nextQuestion(${index})">${option}</button>
                `).join('')}
            </div>
        `;
    } else {
        showMotivationMessage();
    }
}

// Função para avançar para a próxima pergunta
function nextQuestion(selectedOption) {
    if (selectedOption === questions[currentQuestion].correct) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

// Função para exibir a mensagem motivacional no final
function showMotivationMessage() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>Parabéns por completar o questionário!</h2>
        <p>Agora que você sabe mais sobre o desmatamento, continue fazendo a sua parte para proteger o meio ambiente.</p>
        <p>Lembre-se: cada pequena ação conta.</p>
        <button onclick="restartQuiz()">Refazer Questionário</button>
    `;
}

// Função para reiniciar o questionário
function restartQuiz() {
    currentQuestion = 0;
    loadQuestion();
}

// Carrega a primeira pergunta ao abrir a página de perguntas
window.onload = function() {
    if (window.location.pathname.includes('question.html')) {
        loadQuestion();
    }
};
