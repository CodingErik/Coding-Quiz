///SCORE BOARD INPUTS--------------------------------------------------
//---------------------------------------------------------------------
// this shows the final score for the current player 
let playersFinalScoreDisplay = document.getElementById('playersFinalScoreDisplay');
// player name input
let playerNameInput = document.getElementById("playerNameInput");
// message that displays if player is validated
let validationMsg = document.getElementById('validationMsg');
//---------------------------------------------------------------------

//PLAYER OBJECT--------------------------------------------------------
//---------------------------------------------------------------------
// currect player objects
let player;
// arr with all of the player that have played
var historyArray = [];
//---------------------------------------------------------------------

///SCORE BOARD BUTTON--------------------------------------------------
//---------------------------------------------------------------------
// sign up button
let signUpButton = document.getElementById('signUpButton');
//---------------------------------------------------------------------


///SCORE BOARD DISPLAY-------------------------------------------------
//---------------------------------------------------------------------
// this display the players name on the highscore board
let playerNameDisplay = document.getElementById('playerNameDisplay');
// this display the score on the highscore board
let finalScoreDisplay = document.getElementById('finalScoreDisplay');
//---------------------------------------------------------------------


// * getting the user name from the user
// * getting the score from the user
// * store score and user name 


// * save & append these to the list of highscores
// * display these in the list of highscores





renderLastRegistered();


  





function save() {

  localStorage.setItem("players", JSON.stringify(historyArray));

}


signUpButton.addEventListener('click', function () {

  let playerName = playerNameInput.value;

  // player object 
  player = {
    name: playerName,
    score: score
  };

  if (playerName === "") {
    validationMsg.textContent = "error, Player name cannot be blank!";
  }
  else {
    validationMsg.textContent = "SUCCESS SCORE SUBMITTED";
    historyArray.push(player);
    console.log(historyArray);
    save();
    location.reload();
  }
  renderLastRegistered();
});


function renderLastRegistered() {

  let temp = JSON.parse(localStorage.getItem('players'));
  if (temp !== null) {

    historyArray = temp;
  }


  if (historyArray === null) {
    return;
  } else {

    for (let i = 0; i < historyArray.length; i++) {

      let name = document.createElement('div');
      let score = document.createElement('div');

      name.textContent = historyArray[i].name;
      score.textContent = historyArray[i].score;


      playerNameDisplay.prepend(name);
      finalScoreDisplay.prepend(score);

    }
    
  }
}






































// // this is all the code for the last registration form 

// let playerName = document.querySelector("#email");
// // let passwordInput = document.querySelector("#password");
// let signUpButton = document.querySelector("#sign-up");
// let msgDiv = document.querySelector("#msg");
// let userPlayerSpan = document.querySelector("#user-email");
// let userPasswordSpan = document.querySelector("#user-password");
// let finalScore = document.querySelector('#finalScore');
// // the saved final score 
// let finalScoreSpan = document.querySelector('#finalScoreSpan');


// // this will store the scores of other players
// let playersScores = [];

// // player Index
// let playerIndex = 0;


// renderLastRegistered();



// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//   let playeName = localStorage.getItem("email");
//   let scoreMemory = localStorage.getItem('score');

//   if (playeName === null || score === null) {
//     return;
//   }

//   userPlayerSpan.textContent = playeName;
//   finalScoreSpan.textContent = scoreMemory; 


// }


// // this button submits the players stats to the Highscoreboard
// signUpButton.addEventListener("click", function (event) {
//   event.preventDefault();

//   playersScores = [];

//   let playeName = document.querySelector("#email").value;
//   console.log(score);
//   // newScore.textContent.

//   // playersScores.push(newScore);



//   // ParentNode.prepend();

//   if (playeName === "") {
//     displayMessage("error", "Player name cannot be blank");
//   } 
//   else 
//   {
//     displayMessage("SUCCESS SCORE SUBMITTED");

//     localStorage.setItem("playerName", playeName);
//     localStorage.setItem('score', score);

//     renderLastRegistered();
//   }
// });
