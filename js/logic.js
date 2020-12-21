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

}

function getQuestions(){
   
questionTitle.textContent = questions[currentQuestionIndex].title;

questionChoices.textContent = questions[currentQuestionIndex].choices;

}

function setTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  
  function sendMessage() {
    timeEl.textContent = " ";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
  
  }




