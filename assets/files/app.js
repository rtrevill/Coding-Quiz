var timeEl = document.getElementById('timer');
var answers = document.querySelectorAll("#options li");
var H1 = document.querySelector('h1');
var qBox = document.querySelector('#quiz-box');
var score=0;
var loopy=true;
var i= 0;
var win= 0;
var lose = 0;
var counter = 0;
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
    // var correctAnswer = questions[i].Correct;
};

// console.log(win, lose);
// console.log(i);
// askQuestions();
// console.log(win, lose);
// console.log(i);
// while ((loopy===true)&&(i<questions.length)){
// loopy=false;

askQuestions();
 
var correctOrNo = qBox.addEventListener("click", function(event){
                var correctAnswer = questions[i].Correct;   
                    console.log(correctAnswer);
                    element = event.target;
                    var eventLoop = false; 
                    console.log(i); 
                        while (eventLoop===false){
                            if (element.matches('li')){
                                if (element.textContent===correctAnswer){
                                    console.log("Correct!!");
                                    eventLoop = true;
                                    i++;
                                    newcounter++;
                                    ++win
                                    loopy=true;
                                    console.log("Wins: "+win);
                                    console.log("Losses: "+lose);
                                    askQuestions();
                                    return;
                                     
                                    }
                                else if (element.textContent!==correctAnswer){
                                    console.log("Incorrect!!");
                                    eventLoop = true;  
                                    i++;
                                    newcounter++;
                                    ++lose
                                    loopy=true;
                                    console.log("Wins: "+win);
                                    console.log("Losses: "+lose);
                                    askQuestions();
                                    return;
                                                    
                                    }
                                   
                            }
                        }
                        
                }) 
   
// }

// }

// do{
// askQuestions(i);
// if (newcounter>counter){
//     i++;
//     counter++;}
// console.log(i, newcounter, counter);
// }while(newcounter>counter);
