var list = document.getElementById('hs-list');
var returnButton = document.getElementById('rButt');
var resetScores = document.querySelector('#reset-score');

var highScoreArray = JSON.parse(localStorage.getItem("Score"));
var revHighScore = highScoreArray.reverse();

for(let i =0; i < highScoreArray.length; i++){
    var idAndScore = document.createElement('li')
    idAndScore.textContent = "   " + revHighScore[i].Initials + "  -  " + revHighScore[i].Score;
    idAndScore.classList.add("listItem");
    list.appendChild(idAndScore);
}

returnButton.addEventListener('click', function(event){
    event.preventDefault();
    window.location.replace("https://rtrevill.github.io/Coding-Quiz/")
})

resetScores.addEventListener('click', function(event){
    event.preventDefault();
    var highScores = JSON.parse(localStorage.getItem("Score"))
    highScores = [];
    localStorage.setItem("Score", JSON.stringify(highScores));
    location.reload();
})