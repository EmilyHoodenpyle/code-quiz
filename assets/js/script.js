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
function showResponse(event) {
    event.preventDefault();
    console.log(event);
    var response = initialsInput.value + timeLeft;
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