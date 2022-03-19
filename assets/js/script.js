// CLICK EVENT (TIMER)
var startBtnEl = document.getElementById('#start-quiz')

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

// INCORRECT ANSWER
var count = timerEl;
//  Select increment and decrement button elements
var incorrectEl = document.querySelector("#incorrect");
var correctEl = document.querySelector("#correct");
var countEl = document.querySelector("#countdown");

// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
incorrectEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

// Attach event listener to decrement button element
correctEl.addEventListener("click", function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});

// HIDDEN ELEMENTS
var container = document.querySelector(".container")

container.addEventListener("click", function(event) {
    var state = event.target;

    if (element.matches(".box")) {
        var state = element.getAttribute(data-state);

        if (state === hidden) {
            element.textContent = "element.dataset.number";
            element.dataset.state= "visible";
        } else {
            element.textContent ="";
            element.setAttribute("data-state", "hidden");
        }
    }

});

// SUBMIT HIGHSCORE
var submitEl = document.querySelector('#submit');
var initialsInput = document.querySelector('#initials')

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

// HIGHSCORE PAGE
var body =  document.body;
var highscoreEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")

li1.textContent = initialsInput.value;

body.appendChild(highscoreEl)
highscoreEl.appendChild(listEl);
listEl.appendChild(li1)