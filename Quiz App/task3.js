// Sample questions and answers
const questions = [
    {
        question: "1. The Luna Programme was a series of unmanned space mission launched by which country?",
        options: ["Soviet Union", "LondoUnited States of America", "Chinarlin", "None of the above"],
        correctAnswer: "Soviet Union"
    },
    {
        question: "2. Which of the following launched vehicle was used for the Project Apollo?",
        options: ["Electron (Rocket Lab)", "Saturn Launch Vehicle", "MFalcon Heavy launch", "Rocket Lab Test Launch"],
        correctAnswer: "Saturn Launch Vehicle"
    },
    {
        question: "3. Which of the following was the first artificial satellite?",
        options: ["Lander Beagle", "Sojourner", "Apollo 11", "Sputnik"],
        correctAnswer: "Sputnik"
    },
    {
        question: "4. Which of the following is the India's first lunar probe launched by the Indian Space Research Organisation?",
        options: ["Mangalyaan Program", "Chandrayaan Program", "Both A and B", "Discovery program"],
        correctAnswer: "Chandrayaan Program"
    },
    {
        question:"5. Which of the following unmanned spacecraft sent by NASA to study the planet Jupiter and its moon?",
        options: ["Galileo", "Suisei (Planet-A)", "Cassini-Huygens", "NEAR Shoemaker"],
        correctAnswer: "Galileo"

    },
    {
        question:"6. What is the process by which a star shines due to nuclear fusion reactions in its core?",
        options: ["Supernova", "Solar wind", "Stellar nucleosynthesis", "None of the above"],
        correctAnswer: "Stellar nucleosynthesis"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("credit").innerText = "CODED BY ARUN";

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;

    const optionsContainer = document.getElementById("options-container");
    const optionButtons = optionsContainer.getElementsByClassName("option");

    for (let i = 0; i < currentQuestion.options.length; i++) {
        optionButtons[i].innerText = currentQuestion.options[i];
        optionButtons[i].disabled = false; // Enable options for the new question
    }
}

function checkAnswer(button) {
    const selectedAnswer = button.innerText;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        document.body.style.backgroundColor = "#81c784"; // Green background for correct answer
        document.getElementById("result").innerText = "Correct!";
        score++;
    } else {
        document.body.style.backgroundColor = "#ef5350"; // Red background for wrong answer
        document.getElementById("result").innerText = "Wrong!";
    }

    // Disable further button clicks for this question
    const optionButtons = document.getElementsByClassName("option");
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].disabled = true;
    }

    // Move to the next question directly
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            displayFinalResult();
        }
       
        document.body.style.backgroundColor = "#ffe082";
    }, 1000); // Wait for 1 second before moving to the next question
}

function displayFinalResult() 
{
    // Display the final result and appreciation message based on the score
    let appreciation = "";
    let resultColor = "";

    if (score === questions.length) {
        appreciation = "Congratulations! Perfect score!";
        resultColor = "#4caf50"; // Green color for perfect score
    } else if (score >= questions.length / 2) {
        appreciation = "Well done! You did a great job!";
        resultColor = "#4caf50"; // Green color for passing score
    } else {
        appreciation = "Better luck next time. Keep learning!";
        resultColor = "#d32f2f"; // Red color for failing score
    }

    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
        <p>Your score: ${score} out of ${questions.length}</p>
        <p style="color: ${resultColor}; font-weight: bold;">${appreciation}</p>
        <p class="credit-highlight">${"CODED BY ARUN"}</p>
    `;
    quizContainer.style.backgroundColor = "#ffe082"; 
    quizContainer.classList.add("final-result");
}
displayQuestion();
