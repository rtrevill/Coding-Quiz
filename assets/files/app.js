var timeEl = document.getElementById('timer');
var answers = document.querySelectorAll("#options li");
var H1 = document.querySelector('h1');
var questionText = document.querySelector('h2');
var qBox = document.querySelector('#quiz-box');
var listDivs = document.querySelectorAll('.list-item-container')
var qNum= 0;
var timer=75;
var footResult = document.getElementById('result');
var introText = document.querySelector('#intro-text');
var startButton = document.getElementById('start-game');
var endGame = document.querySelector('form');
var submit = document.getElementById('submit-score');

//Opening screen
function beforeStart(){
    H1.innerText = "Coding Quiz Challenge"
    questionText.classList.toggle('invis');
    introText.innerText = "Try to answer the following code related questions within the time limit. \n Keep in mind that incorrect answers will penalise your score/time by fifteen seconds."
}

beforeStart()
//Starts the game when the start button is clicked
var startGame = startButton.addEventListener("click", function(event){
    introText.classList.add('invis');
    startButton.classList.add('invis');
    Countdown();
    askQuestions();
})

//Starts the timer, and makes the options for the game visible. Also removes the options when timer runs out.
function Countdown(){
var timerRunning = setInterval(function() {
    timer--
    timeEl.textContent = "Time: "+timer;
    for (var m=0; m<4; m++){
            listDivs[m].classList.remove('invis');
        }
    if ((timer<=0)||(qNum===questions.length)){
        clearInterval(timerRunning);
        for (var m=0; m<4; m++){
            listDivs[m].classList.add('invis');
        }
    endOfGame(); 
    }
}, 1000);
}

//Setting the questions and answers in an array
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

//Prints on screen the questions and answers each round
function askQuestions(){
    H1.classList.add('invis');
    questionText.classList.remove('invis');    
    questionText.innerText = questions[qNum].Question;
    answers[0].innerText = questions[qNum].Answer1;
    answers[1].innerText = questions[qNum].Answer2;
    answers[2].innerText = questions[qNum].Answer3;
    answers[3].innerText = questions[qNum].Answer4;
};

//Checks each choice made by user for validity, and whether correct. Subtracts time if incorrect.
var usersChoice = qBox.addEventListener("click", function listener(event){
    var correctAnswer = questions[qNum].Correct;   
    element = event.target;
            if (element.matches('li')&&(timer>0)&&(qNum<questions.length)){
                if (element.textContent===correctAnswer){
                    qNum++;
                    footResult.innerText="Correct!";
                    askQuestions();
                    return;
                    }
                else if (element.textContent!==correctAnswer){
                    qNum++;
                    timer-=15;
                    footResult.innerText="Wrong!";
                    askQuestions();
                    return;
                    }
            }
}) 

//displays end game screen with score. Displays form for user to enter initials.
function endOfGame() {
    H1.classList.remove('invis');
    H1.innerText = "All done!";
    questionText.classList.add('invis');
    introText.classList.toggle('invis');
    introText.innerText = ("Your final score is "+timer+".");
    introText.classList.add('texty2');
    endGame.classList.toggle('invis');
}

//Creates object with user initials and score.
submit.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.getElementById('initials');
    var gameScore = {
      Score: timer,
      Initials: initials.value
    };
    postScore(gameScore);
});

//Checks if any scores are in local storage. will add latest score in ranking order, trim list to max 10 entries, and store score list in local storage.
function postScore(score){
    var doubleS = score.Score;
    var gameScore;
    if (localStorage.getItem("Score")===null){
       gameScore = [];
       gameScore.push(score);
    }
    else{
        gameScore = JSON.parse(localStorage.getItem("Score"));
        
            function topScore(prevScores){
                return prevScores.Score > doubleS;   
             }
                var positionOf = (gameScore.findIndex(topScore));
            if (positionOf===-1){
                gameScore.push(score);
            }
            else {
                gameScore.splice(positionOf,0,score);
            }
     if (gameScore.length > 10){
            gameScore.shift();
      }
    }
    localStorage.setItem("Score", JSON.stringify(gameScore));
    window.location.replace("./assets/files/highscores.html");
}



