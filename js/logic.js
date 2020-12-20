// Select start button
var startBtn = document.getElementById("start");

// Call startQuiz function on button click
startBtn.onclick = startQuiz;

// Function to start quiz
function startQuiz() {
var startScreen = document.querySelector("#start-screen");
startScreen.setAttribute("class", "hide");

}