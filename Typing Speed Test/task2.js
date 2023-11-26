let timer;
let timeLeft;

function startTest() {
    const startButton = document.querySelector('.info button');
    startButton.disabled = true;

    const timerElement = document.getElementById('timer');
    timerElement.classList.add('running');

    // Set the time for the test (in seconds)  
    timeLeft = 60; 
    updateTimer();

    timer = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(timer);
            startButton.disabled = false;
            timerElement.classList.remove('running');
            document.getElementById('input').disabled = true;
        }
    }, 1000);

    setRandomQuote();
}

function updateTimer() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function setRandomQuote() {
    const quotes = [
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "We cannot solve problems with the kind of thinking we employed when we came up with them",
        "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out",
        "When you change your thoughts, remember to also change your world.”—Norman Vincent Peale",
        "Success usually comes to those who are too busy looking for it",
        "There is little success where there is little laughter",
        "There is no substitute for victory",
        "Men are born to succeed, not to fail",
        "Success is a lousy teacher. It seduces smart people into thinking they can’t lose"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

function calculateSpeed() {
    const quoteText = document.getElementById('quote').innerText.trim();
    const userInput = document.getElementById('input').value.trim();

    const words = quoteText.split(' ');
    const userWords = userInput.split(' ');

    let correctWords = 0;

    for (let i = 0; i < words.length; i++) {
        if (userWords[i] && userWords[i] === words[i]) {
            correctWords++;
        }
    }

    const accuracy = ((correctWords / words.length) * 100).toFixed(2);
     // Assuming an average word length of 5 characters and 0.5 minutes for the test
    const speed = Math.round((userInput.length / 5) / 0.5);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your typing speed is ${speed} words per minute with ${accuracy}% accuracy.<br>CODED BY ARUN`;
    resultElement.style.display = 'block';
    resultElement.scrollIntoView({ behavior: 'smooth' });
}
