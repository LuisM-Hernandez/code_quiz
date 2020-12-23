var screen = document.getElementById("start-screen");
var questionsDisplay = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("button-start");
var questionTitle = document.getElementById("question-title");
var choiceEl = document.getElementById("choices");
var feedbackEL = document.getElementById("feedback");
var choicesBtns = document.getElementById("btn");


var choicesArray;
var answer;

var questionIndex = -1;
var secondsLeft = 200;


startBtn.onclick = startQuiz;

function startQuiz() {
screen = document.getElementById("start-screen");
screen.setAttribute("class", "hide");
questionsDisplay.setAttribute("class", "start");
getQuestions();
setTimer();
}

function getQuestions(){

questionIndex++;

questionTitle.textContent = questions[questionIndex].title;
choicesArray = questions[questionIndex].choices;
correctAnswer = questions[questionIndex].answer

for (var i = 0; i < choicesArray.length; i++){
    var btnCreator = document.createElement("button");
    btnCreator.textContent = choicesArray[i];
    choicesBtn = choiceEl.appendChild(btnCreator).setAttribute("class", "btns");
    
}

}

choiceEl.addEventListener("click", function (event) {
  
  if (correctAnswer === event.target.textContent) {   
      feedbackEL.innerHTML = "YES!";
     
  } else {
      feedbackEL.innerHTML = "WRONG.";

  }    
});


















function setTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = " timer display" + secondsLeft  ;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }


  




