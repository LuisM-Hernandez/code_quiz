var championName = document.querySelector("#firstchampion");
var championScore = document.querySelector("#firstscore");

getName();

//This function get the users name and score from the local storage and display it on the Champions Hall
function getName() {

    var lastChampion = JSON.parse(localStorage.getItem("highscores")) || []; 
    championName.innerHTML = lastChampion[0].user;
    championScore.innerHTML = lastChampion[0].score;
  }