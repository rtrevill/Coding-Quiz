var list = document.getElementById('hs-list');

var highScoreArray = JSON.parse(localStorage.getItem("Score"));
var revHighScore = highScoreArray.reverse();
console.log(highScoreArray);

for(let i =0; i < highScoreArray.length; i++){
    var idAndScore = document.createElement('li')
    idAndScore.textContent = "  " + revHighScore[i].Initials + "  -  " + revHighScore[i].Score;
    idAndScore.classList.add("listItem");
    list.appendChild(idAndScore);
}

