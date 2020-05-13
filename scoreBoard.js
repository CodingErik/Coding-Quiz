// this is all the code for the last registration form 

let emailInput = document.querySelector("#email");
// let passwordInput = document.querySelector("#password");
let signUpButton = document.querySelector("#sign-up");
let msgDiv = document.querySelector("#msg");
let userEmailSpan = document.querySelector("#user-email");
let userPasswordSpan = document.querySelector("#user-password");
let finalScore = document.querySelector('#finalScore');
// the saved final score 
let finalScoreSpan = document.querySelector('#finalScoreSpan');




renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");
//             && password 
  if (email === null) {
    return;
  }

  userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else {
    displayMessage("SUCCESS SCORE SUBMITTED");

    localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
    renderLastRegistered();
  }
});

