// BUTTON ELEMENTS
var startBtnEl = document.getElementById('#start-quiz');
var incorrectBtnEl = document.getElementById('#incorrect');
var correctBtnEl = document.getElementById('#correct');
var submitBtnEl = document.getElementById('#submit');
var goBackBtnEl = document.getElementById('#goBack');
var clearHighScoresBtnEl = document.getElementById('#clearHighScores');

// DIV ELEMENTS
var startingPageEl = document.getElementById('startingPage');
var questionsEl = document.getElementById('questions');
var allDoneEl = document.getElementById('allDone');
var highScoresEl = document.getElementById ('highScores');

// START BTN
startBtnEl.addeventListener('click', function(event){
    // do stuff here...
});

// INCORRECT BTN
incorrectBtnEl.addeventListener('click', function(event){
    // do stuff here...
});

// CORRECT BTN
correctBtnEl.addeventListener('click', function(event){
    // do stuff here...
});

// SUBMIT BTN
submitBtnEl.addeventListener('click', function(event){
    // do stuff here...
});

// GO BACK BTN
goBackBtnEl.addeventListener('click', function(event){
    // do stuff here...
});

// CLEAR HIGHSCORES BTN
clearHighScoresBtnEl.addeventListener('click', function(event){
    // do stuff here...
});

//  TIMER
var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = ' ';
            clearInterval(timeInterval);
        }
    }, 1000);
}

console.log(countdown())

let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}

console.log(text)