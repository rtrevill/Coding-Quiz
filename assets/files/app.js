var timeEl = document.getElementById('timer');
var answers = document.querySelectorAll("#options li");
var H1 = document.querySelector('h1');
var qBox = document.querySelector('#quiz-box');
var listDivs = document.querySelector('.list-item-container')
var score=0;
var i= 0;
var win= 0;
var lose = 0;
var newcounter = 0;
var timer=75;
var footResult = document.getElementById('result');
console.log(win, lose);


function Countdown(){
var timerRunning = setInterval(function() {
    timer--
    timeEl.textContent = "Time: "+timer;
    
    if (timer<=0){
        clearInterval(timerRunning);
        qBox.setAttribute("display", "none");
        listDivs.setAttribute('display', 'none'); 
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
                    footResult.innerText="Correct!!";
                    listDivs.style.display='none';
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
 

