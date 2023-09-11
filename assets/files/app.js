var timeEl = document.getElementById('timer');
var answers = document.querySelectorAll("#options li");
var H1 = document.querySelector('h1');
var qBox = document.querySelector('#quiz-box');

function Countdown(){

var timer=75;
var timerRunning = setInterval(function() {
    timer--
    timeEl.textContent = "Time: "+timer;
    
    if (timer===0){
        clearInterval(timerRunning);

    }
}, 1000);

}
Countdown()

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
}
]

function askQuestions(){
    for (i=0; i<questions.length; i++){
        H1.textContent = questions[i].Question;
        answers[0].textContent = questions[i].Answer1;
        answers[1].textContent = questions[i].Answer2;
        answers[2].textContent = questions[i].Answer3;
        answers[3].textContent = questions[i].Answer4;
        qBox.addEventListener('click', function(event){
            if 

        })
    }
}



askQuestions()
