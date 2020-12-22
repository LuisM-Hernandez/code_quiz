var screen = document.getElementById("start-screen");
var questionsDisplay = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("button-start");
var questionTitle = document.getElementById("question-title");
var choiceEl = document.getElementById("choices");
var feedbackEL = document.getElementById("feedback")

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
    
    

    
    if(correctAnswer === choicesBtn){
      feedbackEL = ("Correct!");
    }

    else{
      feedbackEL = ("Wrong!");
    }



    //Necesito que cuando el usuario haga click en una de las opciones, compare la respuesta con
    //la respuesta correcta y determine si esta bien o mal.


    
    

  





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


  



