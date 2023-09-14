var timeEl = document.getElementById('timer');
var answers = document.querySelectorAll("#options li");
var H1 = document.querySelector('h1');
var qBox = document.querySelector('#quiz-box');
var listDivs = document.querySelectorAll('.list-item-container')
var score=0;
var i= 0;
var win= 0;
var lose = 0;
var newcounter = 0;
var timer=75;
var footResult = document.getElementById('result');
var introText = document.querySelector('#intro-text');
var startButton = document.getElementById('start-game');
var endGame = document.querySelector('form');
var submit = document.getElementById('submit-score');
console.log(win, lose);


function beforeStart(){
    H1.innerText = "Welcome to the Quiz Game"
    introText.innerText = "Try to answer all the questions to get the job. If you run out of time, or score a poor mark you will be expelled ungraciously. Good Luck."
    startButton.innerText = "Press to start"
}

beforeStart()

var startGame = startButton.addEventListener("click", function(event){
    introText.classList.add('invis');
    startButton.classList.add('invis');
    Countdown();
    askQuestions();

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
{   Question:  "What color is yellow?",
    Answer1:   "Yellow",
    Answer2:    "Blue",
    Answer3:    "Red",
    Answer4:    "Green",
    Correct:    "Yellow"
},
{   Question:  "Best local bird",
    Answer1:    "Cockatoo",
    Answer2:    "Magpie",
    Answer3:    "King Parrot",
    Answer4:    "Plover",
    Correct:    "King Parrot"
},
{   Question:  "What is 10 plus 2",
    Answer1:    "14",
    Answer2:    "8",
    Answer3:    "5",
    Answer4:    "12",
    Correct:    "12"
},
{   Question:  "What sport do the Soceroos play?",
    Answer1:    "Handball",
    Answer2:    "Soccer",
    Answer3:    "Table Tennis",
    Answer4:    "Diving",
    Correct:    "Soccer"
},
{   Question:  "What do trees do?",
    Answer1:    "Make oxygen",
    Answer2:    "Cool and provide shade",
    Answer3:    "Improve soil",
    Answer4:    "All of the above",
    Correct:    "All of the above"
},
{   Question:  "Which is the best Die Hard movie?",
    Answer1:    "Die Hard",
    Answer2:    "Die Hard 2",
    Answer3:    "Die Hard With A Vengeance",
    Answer4:    "Live Free or Die Hard",
    Correct:    "Die Hard"
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
                    win++
                    console.log("Wins: "+win);
                    console.log("Losses: "+lose);
                    footResult.innerText="Correct!!";
                    // listDivs.style.display='none';
                    askQuestions();
                    return;
                        
                    }
                else if (element.textContent!==correctAnswer){
                    console.log("Incorrect!!");
                    i++;
                    newcounter++;
                    lose++
                    console.log("Wins: "+win);
                    console.log("Losses: "+lose);
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
    if (sessionStorage.getItem("Score")===null){
       gameScore = [];
       gameScore.push(score);
       console.log(gameScore);
    }
    else{
        gameScore = JSON.parse(sessionStorage.getItem("Score"));
        
            function topScore(prevScores){
                return prevScores.Score ===doubleS;   
             }
             function moreScore(prevScores){
                return prevScores.Score >doubleS;
             }
                var positionOf = (gameScore.findIndex(topScore));
                var justUnder = (gameScore.findIndex(moreScore));
                console.log(positionOf, justUnder);
            if (moreScore===-1){
                gameScore.push(score);
            }
            else if ((moreScore!==-1)&&(topScore>0)){
                gameScore.splice(justUnder,0,score);
            }
            else {
                gameScore.unshift(score);
            }
        
             if (gameScore.length > 10){
            gameScore.shift();
        }
        console.log(gameScore);
    }

    
    console.log(gameScore);
    sessionStorage.setItem("Score", JSON.stringify(gameScore));
}


function topScore(prevScores){
 return prevScores.Score ===doubleS;   
}



function endOfGame() {
    H1.innerText = "Game Over!!";
    introText.classList.toggle('invis');
    introText.innerText = ("you scored "+win+" points");
    endGame.classList.toggle('invis');
    var initials = document.getElementById('initials');
    console.log(initials);
}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.getElementById('initials');
    var gameScore = {
      Score: win,
      Initials: initials.value
    };
    postScore(gameScore);
    console.log(gameScore);
});

// function postScore(score){
//     console.log(this);
// }
