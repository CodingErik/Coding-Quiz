// startcard
let startCard = document.getElementById('startCard')
let startButton = document.getElementById('startButton');

// question card
let questionCard = document.getElementById('questionCard');
let answerButtons = document.querySelector('.answerButtons')
let questionButtons = document.getElementById('questionButtons');

// scorecard
let scoreCard = document.getElementById('scoreCard')


//QUIZ SCORE & TIMER
//--------------------------------------------------------
//scoreDisplay
let scoreDisplay = document.querySelector('#score');
// timerDisplay
let timerDisplay = document.querySelector('#timer');
//--------------------------------------------------------



// total time
let mins = 3;
let totalSeconds = 60;

// mins * 60;

// timer
let interval;

let question = [
    {
        question: 'What is the color of you skin',
        answer1: 'white',
        answer2: 'black',
        answer3: 'brown',
        answer4: 'yellow',
        correct: 'white'
    }
]


//this is the start button 
startButton.addEventListener('click', function(e){
    // displaying the questions card, hiding the stardCard
    startCard.setAttribute('class', 'd-none');
    questionCard.classList.remove("d-none");


    console.log('start button is being pressed');

    // start the timer 
    interval = setInterval(gameTimer, 1000);
});



// timer function, TIMER STARTS
function gameTimer() {
    timerDisplay.textContent = totalSeconds;
    console.log(totalSeconds);
    totalSeconds--;

    if (totalSeconds === 0) {
        clearInterval(interval);
        console.log('test is done');
        gameEnds();
    }

};



questionButtons.addEventListener('click', function (event) {
    // make a new question appear 
    // deduct or add points to the score
    if (event.target.matches('button').id === 'correct') {
        console.log('This is the wrong answer');


    }
});






// game ENDS and display the scorecard
function gameEnds() {
    questionCard.setAttribute('class', 'd-none');
    scoreCard.classList.remove("d-none");
};









function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// window.onload = function () {
//     var fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };