var timeEl = document.getElementById('timer');


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