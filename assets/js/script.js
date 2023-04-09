// Click 'Start" button and quiz starts. Timer starts.

var timerEl = document.querySelector("#timer");
var timeLeft = 60;

function setTime() {
    var timer= setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        // if wrong answer timeleft -=10

        // if timeleft = 0, score.length = ?
            // no time = alert: times up!


    }, 1000);
}

setTime();

var images = document.querySelector("#pokemonImg");
var quizPics = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png", 
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png", 
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png", 
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png", 
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png", 
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/771.png"]






var question = document.querySelector("#question");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");




// When clicking the right answer, displays 'Right!'
// When clicking the wrong answer, displays 'Wrong!', and subtracts 10 seconds from the timer
// When clicking any answer, it goes to the next one.
// When finising the quiz, your score is shown as the secdons remaining, and you can enter your name
// Then shows the high score board.
