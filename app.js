// startcard
let startCard = document.getElementById('startCard')
let startButton = document.getElementById('startButton');

// question card
let questionCard = document.getElementById('questionCard')
let answerButtons = document.querySelector('.answerButtons')

// scorecard
let scoreCard = document.getElementById('scoreCard')


// total time
let mins = 3;
let totalSeconds = 10000;

// mins * 60;

// timer
let interval; 





startButton.addEventListener('click', function(){
    startCard.setAttribute('class', 'd-none');
    questionCard.classList.remove("d-none");

    // start the timer 
    interval = setInterval(gameTimer, 1000);
});


function gameTimer() {
  console.log('hello');
  totalSeconds--;
  if(totalSeconds === 0){
      clearInterval(interval);
      console.log('test is done')
  }

}; 

