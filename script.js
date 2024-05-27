const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "Who is the CEO of Tesla?",
        choices: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
        answer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "What is the boiling point of water?",
        choices: ["90°C", "100°C", "110°C", "120°C"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choiceButtons = document.querySelectorAll(".choice");
const nextButton = document.getElementById("next-btn");

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    currentQuestion.choices.forEach((choice, index) => {
        const button = choiceButtons[index];
        button.innerHTML = choice;
        button.dataset.correct = index === currentQuestion.answer;
        button.style.backgroundColor = "#007bff";
    });
}

function resetState() {
    nextButton.style.display = "none";
    choiceButtons.forEach(button => {
        button.disabled = false;
    });
}

function selectAnswer(index) {
    const correct = questions[currentQuestionIndex].answer;
    choiceButtons.forEach((button, btnIndex) => {
        button.disabled = true;
        if (btnIndex === correct) {
            button.style.backgroundColor = "#28a745";
        } else {
            button.style.backgroundColor = "#dc3545";
        }
    });
    if (index === correct) {
        score++;
    }
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.onclick = startGame;
}

startGame();
