var championName = document.querySelector("#firstchampion");
var championScore = document.querySelector("#firstscore");

getName();

function getName() {

    var lastChampion = JSON.parse(localStorage.getItem("lastUser"));
    championName.innerHTML = lastChampion[0].user;
    championScore.innerHTML = lastChampion[0].score;
  }