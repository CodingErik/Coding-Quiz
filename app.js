// startcard
let startCard = document.getElementById('startCard')
let startButton = document.getElementById('startButton');

// question card
let questionCard = document.getElementById('questionCard');
let answerButtons = document.querySelector('.answerButtons')
let questionButtons = document.getElementById('questionButtons');

// scorecard
let endCard = document.querySelector('#endCard');
let scoreCard = document.getElementById('scoreCard');


//QUIZ SCORE & TIMER
//--------------------------------------------------------
//scoreDisplay
let scoreDisplay = document.querySelector('#score');
// timerDisplay
let timerDisplay = document.querySelector('#time');
//--------------------------------------------------------

// total time
let fiveMinutes = 9;

// timer
let interval;



//this is the start button 
startButton.addEventListener('click', function (e) {
    // displaying the questions card, hiding the stardCard
    startCard.setAttribute('class', 'd-none');
    questionCard.classList.remove("d-none");


    console.log('start button is being pressed');

    // start the timer function
    interval = setInterval(gameTimer, 1000);
});

// timer function, TIMER STARTS
function gameTimer() {
    let timer = fiveMinutes, minutes, seconds;

    minutes = parseInt(timer / 60);
    seconds = parseInt(timer % 60);
    
    if(minutes < 10){
        minutes =  "0" + minutes;
    }else {
        minutes = minutes;
    }
    if(seconds < 10){
        seconds =  "0" + seconds;
    }else {
        seconds = seconds;
    }

    timerDisplay.textContent = minutes + ':' + seconds;
    console.log(fiveMinutes);
    fiveMinutes--;

    if (fiveMinutes < 0) {
        clearInterval(interval);
        console.log('test is done');
        questionCard.setAttribute('class', 'd-none');
        endCard.classList.remove('d-none');
        toScoreboardButton.addEventListener('click', function(){
            gameEnds();
        })
        
    }

};

// game ENDS and display the scorecard
function gameEnds() {
    endCard.setAttribute('class', 'd-none');
    scoreCard.classList.remove("d-none");

    // we gotta display the scores and add an input form 
};





questionButtons.addEventListener('click', function (event) {
    // make a new question appear 
    // deduct or add points to the score
    if (event.target.matches('button').id === 'correct') {
        console.log('This is the wrong answer');


    }
});















// function startTimer(duration, display) {
//     let timer = duration, minutes, seconds;
//     setInterval(function () {
        // minutes = parseInt(timer / 60, 10);
        // seconds = parseInt(timer % 60, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        // seconds = seconds < 10 ? "0" + seconds : seconds;

        // display.textContent = minutes + ":" + seconds;

        // if (--timer < 0) {
        //     timer = duration;
        // }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 5, ****** total time
//     display = document.querySelector('#time');   ******
//         startTimer(fiveMinutes, display); ******
// };
