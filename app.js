// startcard
let startCard = document.getElementById('startCard')
let startButton = document.getElementById('startButton');

// question card
//-------------------------------------------------------------
let questionCard = document.getElementById('questionCard');
// this is the current question that is being displayed 
let questionNumber = document.getElementById('questionNumber');

let answerButtons1 = document.querySelector('.answerButtons1')
let answerButtons2 = document.querySelector('.answerButtons2')
let answerButtons3 = document.querySelector('.answerButtons3')
let answerButtons4 = document.querySelector('.answerButtons4')
let keyAnswer = document.querySelector('.keyAnswer')

let questionButtons = document.getElementById('questionButtons');

//-------------------------------------------------------------




//endCard
let gameOverCard = document.querySelector('#endCard');
// scorecard
let scoreCard = document.getElementById('scoreCard');


//QUIZ SCORE & TIMER
//--------------------------------------------------------
//scoreDisplay
let scoreDisplay = document.querySelector('#score');
// timerDisplay
let timerDisplay = document.querySelector('#time');
//--------------------------------------------------------

// total time
let fiveMinutes = 5 * 60;

// timer
let interval;

// score
let score = 0;

// questionsIndex   !!!!!!!!! need to take care of this 
let i = 0;


// this function saves the game score for the current player
function save(){

}

// Questions Arr curtesy of 
//https://www.w3schools.com/js/js_quiz.asp
let questions = [
    {       // this is one question object
        prompt: "What is the correct syntax for a function declaration?",
        answer1: "(a) console.log('function')",
        answer2: "(b) let a = 2;",
        answer3: "(c) 1 === true",
        answer4: "(d) function (){}",
        key: "(d) function (){}"
    },
    {       // this is one question object
        prompt: "How to write an IF statement for executing some code if i is NOT equal to 5?",
        answer1: "(a) if(i <>5)",
        answer2: "(b) if(i !=5)",
        answer3: "(c) if i <> 5",
        answer4: "(d) if i =! 5 then",
        key: "(b) if(i !=5)"
    },
    {       // this is one question object
        prompt: "How does a FOR loop startt?",
        answer1: "(a) for(i=0; i<=5)",
        answer2: "(b) for i = 1 to 5",
        answer3: "(c) for (i=0; i<=5; i++)",
        answer4: "(d) for (i<=5; i++)",
        key: "(c) for (i=0; i<=5; i++)"
    },
    {       // this is one question object
        prompt: "How can you add a comment in a JavaScript?",
        answer1: "(a) 'this is a comment'",
        answer2: "(b) //this is a comment",
        answer3: "(c) <!--this is a comment -->",
        answer4: "(d) this is a comment ",
        key: "(b) //this is a comment"
    },
    {       // this is one question object
        prompt: "What is the correct way to write a JavaScript array?",
        answer1: "(a) var colors = 'red', 'green', 'blue'",
        answer2: "(b) var colors === [red, green, blue]",
        answer3: "(c) var colors = [red, green, blue]",
        answer4: "(d) var colors = ['red', 'green', 'blue']",
        key: "(d) var colors = ['red', 'green', 'blue']"
    }
];

// This checks if the game should end or keep going 
function continueGame() {
    if (i === (questions.length - 1)) {
        clearInterval(interval);
        console.log('test is done, ran out of questions');
        questionCard.setAttribute('class', 'd-none');
        gameOverCard.classList.remove('d-none');
        toScoreboardButton.addEventListener('click', function () {
            gameEnds();
        })
    } else {
        i++;
        displayNextQuestion();
    }
}
// this just displays the questions on the DOM 
function displayNextQuestion() {

    // display the question 
    questionNumber.textContent = questions[i].prompt;
    // display choices on the DOM                        
    answerButtons1.textContent = questions[i].answer1;
    answerButtons2.textContent = questions[i].answer2;
    answerButtons3.textContent = questions[i].answer3;
    answerButtons4.textContent = questions[i].answer4;
    keyAnswer.value = questions[i].key;

};
//this is the start button START OF THE GAME
startButton.addEventListener('click', function (e) {
    // displaying the questions card, hiding the stardCard
    startCard.setAttribute('class', 'd-none');
    questionCard.classList.remove("d-none");

    // start to cycle the questions
    displayNextQuestion()

    // start the gameTimer function
    interval = setInterval(gameTimer, 1000);
});
//timer function, TIMER STARTS
function gameTimer() {
    let timer = fiveMinutes, minutes, seconds;

    minutes = parseInt(timer / 60);
    seconds = parseInt(timer % 60);

    if (minutes < 10) {
        minutes = "0" + minutes;
    } else {
        minutes = minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    } else {
        seconds = seconds;
    }

    timerDisplay.textContent = minutes + ':' + seconds;

    fiveMinutes--;

    // runs the gameEnds function if the timer runs out 
    if (fiveMinutes < 0) {
        // takes you to the game over card 
        gameOver();

    }

};
// takes you to the game over card
function gameOver() {
    // clears the time 
    clearInterval(interval);
    // hides the questions card
    questionCard.setAttribute('class', 'd-none');
    // display the gameOver card
    gameOverCard.classList.remove('d-none');
    // waits for click to take you to the scoreboard
    toScoreboardButton.addEventListener('click', function () {
        gameEnds();
    });
};
// END OF THE GAME  and display the scorecard
function gameEnds() {

    gameOverCard.setAttribute('class', 'd-none');
    scoreCard.classList.remove("d-none");
    playersFinalScoreDisplay.textContent = score;
    // we gotta display the scores and add an input form  !!!!!!!!!!!!!!!!!!
    // into the local storage and also preprend to the ones that are already there
};


// this function lets the use answer the question an then calls continueGame(); 
questionButtons.addEventListener('click', function (event) {
    let userChoice = event.target.textContent;
    let correcAnswer = keyAnswer.value;

    if (event.target.matches('button')) {

        // event.target.parentNode.lastElementChild.value;
        if (userChoice === correcAnswer) {
            console.log('you got the right answer');
            // ten questions ten points 
            score += 10;
            // display the new score
            scoreDisplay.textContent = score;

        } else {
            console.log('you got the wrong answer');
            // 30 seconds are subtracted 
            fiveMinutes -= 10;
            // display the new score
            scoreDisplay.textContent = score;

        }
        continueGame();
    }

});










