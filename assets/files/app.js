var timeEl = document.getElementById('timer');
var answers = document.querySelectorAll("#options li");
var H1 = document.querySelector('h1');
var qBox = document.querySelector('#quiz-box');
var listDivs = document.querySelectorAll('.list-item-container')
var score=0;
var i= 0;
// var win= 0;
// var lose = 0;
var newcounter = 0;
var timer=75;
var footResult = document.getElementById('result');
var introText = document.querySelector('#intro-text');
var startButton = document.getElementById('start-game');
var endGame = document.querySelector('form');
var submit = document.getElementById('submit-score');
// console.log(win, lose);


function beforeStart(){
    H1.innerText = "Coding Quiz Challenge"
    introText.innerText = "Try to answer the following code related questions within the time limit. \n Keep in mind that incorrect answers will penalise your score/time by ten seconds."
    startButton.innerText = "Start Quiz"
}

beforeStart()

var startGame = startButton.addEventListener("click", function(event){
    introText.classList.add('invis');
    startButton.classList.add('invis');
    Countdown();
    askQuestions();
    document.qbox.classList.add("margin")

})

function Countdown(){
var timerRunning = setInterval(function() {
    timer--
    timeEl.textContent = "Time: "+timer;
    for (var m=0; m<4; m++){
            listDivs[m].classList.remove('invis');
        }
    if ((timer<=0)||(newcounter===questions.length)){
        console.log("Newcounter: "+newcounter);
        clearInterval(timerRunning);
        for (var m=0; m<4; m++){
            listDivs[m].classList.add('invis');
        }
    endOfGame(); 
    }
}, 1000);
}




var questions = [
{   Question:  "Commonly used data types DO Not include:",
    Answer1:   "strings",
    Answer2:    "booleans",
    Answer3:    "alerts",
    Answer4:    "numbers",
    Correct:    "alerts"
},
{   Question:  "The condition in an if / else statement is enclosed with ______.",
    Answer1:    "quotes",
    Answer2:    "curly brackets",
    Answer3:    "parenthesis",
    Answer4:    "square brackets",
    Correct:    "parenthesis"
},
{   Question:  "Arrays in Javascript can be used to store _______.",
    Answer1:    "numbers and strings",
    Answer2:    "other arrays",
    Answer3:    "booleans",
    Answer4:    "all of the above",
    Correct:    "all of the above"
},
{   Question:  "String values must be enclosed within ______ when being assigned to variables.",
    Answer1:    "commas",
    Answer2:    "curly brackets",
    Answer3:    "quotes",
    Answer4:    "parenthesis",
    Correct:    "commas"
},
{   Question:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    Answer1:    "JavaScript",
    Answer2:    "terminal/bash",
    Answer3:    "for loops",
    Answer4:    "console.log",
    Correct:    "console.log"
}
]

function askQuestions(){
        
    H1.innerHTML = questions[i].Question;
    answers[0].innerHTML = questions[i].Answer1;
    answers[1].innerHTML = questions[i].Answer2;
    answers[2].innerHTML = questions[i].Answer3;
    answers[3].innerHTML = questions[i].Answer4;
};




var usersChoice = qBox.addEventListener("click", function listener(event){
    var correctAnswer = questions[i].Correct;   
    console.log(correctAnswer);
    element = event.target;
    console.log(i); 
            if (element.matches('li')&&(timer>0)&&(newcounter<questions.length)){
                if (element.textContent===correctAnswer){
                    console.log("Correct!!");
                    i++;
                    newcounter++;
                    // win++
                    // console.log("Wins: "+win);
                    // console.log("Losses: "+lose);
                    footResult.innerText="Correct!!";
                    // listDivs.style.display='none';
                    askQuestions();
                    return;
                        
                    }
                else if (element.textContent!==correctAnswer){
                    console.log("Incorrect!!");
                    i++;
                    newcounter++;
                    // lose++
                    // console.log("Wins: "+win);
                    // console.log("Losses: "+lose);
                    timer-=15;
                    footResult.innerText="Wrong!!";
                    askQuestions();
                    return;
                    }
                    
               
            }
        
}) 
 

function postScore(score){
    console.log(score.Score);
    var doubleS = score.Score;
    var gameScore;
    if (localStorage.getItem("Score")===null){
       gameScore = [];
       gameScore.push(score);
       console.log(gameScore);
    }
    else{
        gameScore = JSON.parse(localStorage.getItem("Score"));
        
            function topScore(prevScores){
                return prevScores.Score > doubleS;   
             }
             function moreScore(prevScores){
                return prevScores.Score === doubleS;
             }
                var positionOf = (gameScore.findIndex(topScore));
                var justUnder = (gameScore.findIndex(moreScore));
                console.log(positionOf, justUnder);
            if (positionOf===-1){
                gameScore.push(score);
            }
            else if ((positionOf!==-1)){
                gameScore.splice(positionOf,0,score);
            }
            else {
                gameScore.unshift(score);
            }
            // &&(justUnder>-1)
     if (gameScore.length > 10){
            gameScore.shift();
      }
        console.log(gameScore);
    }

    
    console.log(gameScore);
    localStorage.setItem("Score", JSON.stringify(gameScore));
    window.location.replace("./assets/files/highscores.html")
}


function topScore(prevScores){
 return prevScores.Score ===doubleS;   
}



function endOfGame() {
    H1.innerText = "Game Over!!";
    introText.classList.toggle('invis');
    introText.innerText = ("you scored "+timer+" points");
    endGame.classList.toggle('invis');
    var initials = document.getElementById('initials');
    console.log(initials);
}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.getElementById('initials');
    var gameScore = {
      Score: timer,
      Initials: initials.value
    };
    postScore(gameScore);
    console.log(gameScore);
});

// function postScore(score){
//     console.log(this);
// }
