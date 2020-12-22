var startScreen = document.getElementById("start-screen");
var questionArray = document.getElementById("questions");
var timerEl = document.getElementById("score-timer");
var startBtn = document.getElementById("button-start");
var questionTitle = document.getElementById("question-title");

var choiceBtn;


var choice = document.querySelector("#choices");


var currentQuestionIndex = -1;
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
// Need choices to appear in buttons
currentQuestionIndex++;
questionTitle.textContent = questions[currentQuestionIndex].title;

choiceBtn = questions[currentQuestionIndex].choices;
var correctBtn = questions[currentQuestionIndex].answer;

for (var i = 0; i < choiceBtn.length; i++){
    var btnCreator = document.createElement("button");
    btnCreator.textContent = choiceBtn[i];
    displayBtn = choice.appendChild(btnCreator).setAttribute("class", "btns");
    
}
}

function setTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = " timer display" + secondsLeft  ;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }


  




