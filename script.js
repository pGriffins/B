const questions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "Who is the CEO of Tesla?",
        answer: "Elon Musk"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answer: "100"
    }
];

let currentQuestionIndex = 0;
let playerHealth = 100;
let botHealth = 100;

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const messageElement = document.getElementById("message");
const playerHealthElement = document.getElementById("player-health");
const botHealthElement = document.getElementById("bot-health");

function startGame() {
    currentQuestionIndex = 0;
    playerHealth = 100;
    botHealth = 100;
    showQuestion();
    updateHealth();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
}

function resetState() {
    answerInput.value = '';
    messageElement.innerHTML = '';
}

function submitAnswer() {
    const answer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer.trim();
    
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        botHealth -= 20;
        messageElement.innerHTML = 'Correct! You attacked the bot!';
    } else {
        playerHealth -= 20;
        messageElement.innerHTML = 'Wrong! The bot attacked you!';
    }

    updateHealth();
    
    if (playerHealth <= 0 || botHealth <= 0) {
        endGame();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }
}

function updateHealth() {
    playerHealthElement.innerHTML = `Player Health: ${playerHealth}`;
    botHealthElement.innerHTML = `Bot Health: ${botHealth}`;
}

function endGame() {
    resetState();
    if (playerHealth <= 0) {
        questionElement.innerHTML = 'Game Over! You were defeated by the bot.';
    } else if (botHealth <= 0) {
        questionElement.innerHTML = 'Congratulations! You defeated the bot.';
    } else {
        questionElement.innerHTML = 'Quiz Completed!';
    }
    document.getElementById("submit-btn").style.display = 'none';
}

startGame();
