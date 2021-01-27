// var championName = document.querySelector("#firstchampion");
// var championScore = document.querySelector("#firstscore");
var tableB = document.querySelector("#tableB");

getName();

//This function get the users name and score from the local storage and display it on the Champions Hall
function getName() {

  var lastChampion = JSON.parse(localStorage.getItem("highscores")) || []; 
  for (let i = 0; i < lastChampion.length; i++) {
    
    var rowchamp = document.createElement("tr");
    var tdChampions = document.createElement("td");
    var tdScore = document.createElement("td");

    rowchamp.append(tdChampions, tdScore)

    tdChampions.innerHTML = lastChampion[i].user
    tdScore.innerHTML = lastChampion[i].score

    tableB.append(rowchamp)

  }
  }