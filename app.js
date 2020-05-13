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
let fiveMinutes = 60 * 5;

// timer
let interval;

// score
let score = 10;


// questions   !!!!!!!!! needd to take care of this 

var questions = [
    {
          prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
          answer: "a"
    },
    {
         prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
         answer: "c"
    },
    {
         prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
         answer: "a"
    }
];


// we need to cycle throught questions 
function cycleQuestions() {

    questionButtons.addEventListener('click', function (event) {
    
        for(var i = 0; i < questions.length; i++){
            // display the question 
            questionNumber.textContent = questions[i].prompt
            // var response = window.prompt(questions[i].prompt);
            if(response == questions[i].answer){
                 score++;
                 alert("Correct!");
            } else {
                 alert("WRONG!");
            }
        }
        alert("you got " + score + "/" + questions.length);
    
        // make a new question appear 
        // deduct or add points to the score
        if (event.target.matches('button').id === 'correct') {
            console.log('This is the wrong answer');
    
    
        }
    });

}



//this is the start button START OF THE GAME
startButton.addEventListener('click', function (e) {
    // displaying the questions card, hiding the stardCard
    startCard.setAttribute('class', 'd-none');
    questionCard.classList.remove("d-none");


    console.log('start button is being pressed');

    // start the timer function
    interval = setInterval(gameTimer, 1000);
});

// timer function, TIMER STARTS
// function gameTimer() {
//     let timer = fiveMinutes, minutes, seconds;

//     minutes = parseInt(timer / 60);
//     seconds = parseInt(timer % 60);

//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     } else {
//         minutes = minutes;
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     } else {
//         seconds = seconds;
//     }

//     timerDisplay.textContent = minutes + ':' + seconds;
//     console.log(fiveMinutes);
//     fiveMinutes--;

//     if (fiveMinutes < 0) {
//         clearInterval(interval);
//         console.log('test is done');
//         questionCard.setAttribute('class', 'd-none');
//         endCard.classList.remove('d-none');
//         toScoreboardButton.addEventListener('click', function () {
//             gameEnds();
//         })

//     }

// };

// END OF THE GAME  and display the scorecard
function gameEnds() {
    endCard.setAttribute('class', 'd-none');
    scoreCard.classList.remove("d-none");

    // we gotta display the scores and add an input form  !!!!!!!!!!!!!!!!!!
};














