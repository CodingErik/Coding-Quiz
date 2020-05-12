// startcard
let startCard = document.getElementById('startCard')
let startButton = document.getElementById('startButton');

// question card
let questionCard = document.getElementById('questionCard');
let answerButtons = document.querySelector('.answerButtons')
let questionButtons = document.getElementById('questionButtons');

// scorecard
let scoreCard = document.getElementById('scoreCard')


// total time
let mins = 3;
let totalSeconds = 60;

// mins * 60;

// timer
let interval;

let question =  {

    question1: { question:'how many wood can you eat',
                answer1:'i can eat about 1',
                answer1:'i can eat about 2',
                answer1:'i can eat about 3'
            },
    question2: { question:'how many wood can you eat',
                answer1:'i can eat about 1',
                answer1:'i can eat about 2',
                answer1:'i can eat about 3'
            },
    question3: { question:'how many wood can you eat',
                answer1:'i can eat about 1',
                answer1:'i can eat about 2',
                answer1:'i can eat about 3'
            }
}


// this is the start button 
// startButton.addEventListener('click', function(e){
//     // displaying the questions card, hiding the stardCard
//     startCard.setAttribute('class', 'd-none');
//     questionCard.classList.remove("d-none");


//     console.log('start button is being pressed');

//     // start the timer 
//     interval = setInterval(gameTimer, 1000);
// });



// timer function, TIMER STARTS
function gameTimer() {
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