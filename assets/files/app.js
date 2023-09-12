var timeEl = document.getElementById('timer');
var answers = document.querySelectorAll("#options li");
var H1 = document.querySelector('h1');
var qBox = document.querySelector('#quiz-box');
var score=0;
var i= 0;
var win= 0;
var lose = 0;
var newcounter = 0;
console.log(win, lose);


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
},
{   Question:  "Best Season",
    Answer1:    "Summer",
    Answer2:    "Spring",
    Answer3:    "Autumn",
    Answer4:    "Winter",
    Correct:    "Autumn"

}
]

function askQuestions(){
        
    H1.innerHTML = questions[i].Question;
    answers[0].innerHTML = questions[i].Answer1;
    answers[1].innerHTML = questions[i].Answer2;
    answers[2].innerHTML = questions[i].Answer3;
    answers[3].innerHTML = questions[i].Answer4;
};


askQuestions();

var usersChoice = qBox.addEventListener("click", function listener(event){
    var correctAnswer = questions[i].Correct;   
    console.log(correctAnswer);
    element = event.target;
    console.log(i); 
            if (element.matches('li')){
                if (element.textContent===correctAnswer){
                    console.log("Correct!!");
                    i++;
                    newcounter++;
                    win++
                    console.log("Wins: "+win);
                    console.log("Losses: "+lose);
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
                    if (i<questions.length-1){
                        askQuestions();}
                    return;
                    }
                    
                // }
            }
        
}) 
 

