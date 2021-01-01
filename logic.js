
var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#button-start");
var questionId = document.querySelector("#questions");
var titleId = document.querySelector("#question-title");
var choiceId = document.querySelector("#choices");
var feedbackId = document.querySelector("#feedback");
var timerId = document.querySelector("#timer");
var endquizId = document.querySelector("#endquiz");
var gameoverId = document.querySelector("#gameover");
var submitBtn = document.querySelector("#submit");
var userInput = document.querySelector("#nameInput");
var championName = document.querySelector("#firstchampion");
var championScore = document.querySelector("#firstscore");



var secondsLeft = 30;
var questionIndex = -1;
var choiceArray;



startBtn.onclick = startQuiz;

function startQuiz() {

  startScreen.setAttribute("class", "hide");
  questionId.removeAttribute("class", "hide");

  setTimer();
  questionDisplay();

}

function setTimer() {

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerId.textContent = " Time Left " + secondsLeft;
    if (secondsLeft === 0 || questionIndex === questions.length) {
      clearInterval(timerInterval);
      gameOver();
      getName();
    }
  }, 1000);
}

function questionDisplay() {
  questionIndex++;
  choiceId.textContent = "";
  titleId.textContent = questions[questionIndex].title
  choiceArray = questions[questionIndex].choices
  correctAnswer = questions[questionIndex].answer

  for (var i = 0; i < choiceArray.length; i++) {
    var choicesbtns = document.createElement("button");
    choicesbtns.textContent = choiceArray[i];
    choicesBtn = choiceId.appendChild(choicesbtns).setAttribute("class", "btns");

  }

}

choiceId.addEventListener("click", function (event) {

  if (correctAnswer === event.target.textContent) {
    feedbackId.textContent = "Correct!";

  }

  else {
    feedbackId.textContent = "Wrong!";
    secondsLeft -= 5;
  }
  questionDisplay();
});

function gameOver() {
  questionId.setAttribute("class", "hide");
  endquizId.removeAttribute("class", "hide");
}


function getName() {
  
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    
    var userInput = document.querySelector("#nameinput")
    
    if (userInput === "") {
      alert("Need a valid input");
  
    }

    var champion = {
      user: userInput.value.trim(),
      score: secondsLeft
    };

    localStorage.setItem("user", JSON.stringify(champion));
    var lastChampion = JSON.parse(localStorage.getItem("user"));
    championName.textContent = lastChampion.user;
    championScore.textContent = lastChampion.score;

  })
 

}

















