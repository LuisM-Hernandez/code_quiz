var startScreen = document.getElementById("start-screen");
var questionArray = document.getElementById("questions");
var timerEl = document.getElementById("score-timer");



var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var startBtn = document.getElementById("button-start");

var currentQuestionIndex = 0;
var secondsLeft = 200;


startBtn.onclick = startQuiz;


function startQuiz() {
startScreen = document.getElementById("start-screen");
startScreen.setAttribute("class", "hide");
questionArray.setAttribute("class", "start");
getQuestions();
setTimer();

}

function getQuestions(){

questionTitle.textContent = questions[currentQuestionIndex].title;

questionChoices.textContent = questions[currentQuestionIndex].choices;

}

function setTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " timer display";
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }


  




