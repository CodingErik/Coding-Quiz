// startcard
let startCard = document.getElementById('startCard')
let startButton = document.getElementById('startButton');

// question card
//-------------------------------------------------------------
let questionCard = document.getElementById('questionCard');
// this is the current question that is being displayed 
let questionNumber  = document.getElementById('questionNumber');

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
let fiveMinutes = 60 * 5;

// timer
let interval;

// score
let score = 10;

// questionsIndex   !!!!!!!!! need to take care of this 
let i = 0;



// 5 questions
let questions = [
    {       // this is one question object
        prompt: "1 What color are apples?",
        answer1: "(a) Red/Green",
        answer2: "(b) Purple",
        answer3: "(c) Orange",
        answer4: "(d) wika",
        key: '(d) wika'
    },
    {       // this is one question object
        prompt: "2 This is another question?",
        answer1: "(a) Red/Green",
        answer2: "(b) Purple",
        answer3: "(c) Orange",
        answer4: "(d) wika",
        key: '(d) wika'
    },
    {       // this is one question object
        prompt: "3 This is another question?",
        answer1: "(a) Red/Green",
        answer2: "(b) Purple",
        answer3: "(c) Orange",
        answer4: "(d) wika",
        key: '(d) wika'
    },
    {       // this is one question object
        prompt: "4 This is another question?",
        answer1: "(a) Red/Green",
        answer2: "(b) Purple",
        answer3: "(c) Orange",
        answer4: "(d) wika",
        key: '(d) wika'
    },
    {       // this is one question object
        prompt: "5 This is yet another question?",
        answer1: "(a) Red/Green",
        answer2: "(b) Purple",
        answer3: "(c) Orange",
        answer4: "(d) wika",
        key: '(d) wika'
    }
];


// we need to cycle throught questions 
function cycleQuestions() {
    // // nextQuestion index
    displayNextQuestion();

    // user response
    answer();

}

function answer(){

    // wait for click
    questionButtons.addEventListener('click', function (event) {
        event.stopPropagation();
        let userChoice = event.target.textContent;
        let correcAnswer = keyAnswer.value;

        console.log(event.target);

        // event.target.parentNode.lastElementChild.value;
        if (userChoice === correcAnswer) {
            // ten questions ten points 
            score += 10;
            // prepare next question
         


            // display the new score
            scoreDisplay.textContent = score;
            console.log('you got the right answer');

            cycleQuestions();
        } else {
            console.log('you got the wrong answer');
            // 30 seconds are subtracted 
            fiveMinutes -= 30;
            // prepare next question
         


            // display the new score
            scoreDisplay.textContent = score;
            cycleQuestions();
        }
    });


        i++;
}



function displayNextQuestion() {
    console.log('this is what is being displayed', i );
    console.log('questions length',questions.length);


     // display the question 
     questionNumber.textContent = questions[i].prompt;
     // display choices on the DOM                        
     answerButtons1.textContent = questions[i].answer1;
     answerButtons2.textContent = questions[i].answer2;
     answerButtons3.textContent = questions[i].answer3;
     answerButtons4.textContent = questions[i].answer4;
     keyAnswer.value = questions[i].key;
 

    if ((questions.length) === i) {
        clearInterval(interval);
        console.log('test is done, ran out of questions');
        questionCard.setAttribute('class', 'd-none');
        gameOverCard.classList.remove('d-none');
        toScoreboardButton.addEventListener('click', function () {
            gameEnds();
        })
    }

   
};



//this is the start button START OF THE GAME
startButton.addEventListener('click', function (e) {
    // displaying the questions card, hiding the stardCard
    startCard.setAttribute('class', 'd-none');
    questionCard.classList.remove("d-none");

    // start to cycle the questions
    cycleQuestions();

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
}

// END OF THE GAME  and display the scorecard
function gameEnds() {

    gameOverCard.setAttribute('class', 'd-none');
    scoreCard.classList.remove("d-none");

    // we gotta display the scores and add an input form  !!!!!!!!!!!!!!!!!!
    // into the local storage and also preprend to the ones that are already there
};














