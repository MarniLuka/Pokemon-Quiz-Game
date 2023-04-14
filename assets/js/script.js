// Click 'Start" button and quiz starts. Timer starts.
var timerEl = document.querySelector("#timer");
var timeLeft = 60;

function setTime() {
    var timer = setInterval(function() {
        timeLeft--;

        if (timeLeft >= 0) {
            timerEl.textContent = "Time: " + timeLeft;
        } else {
            timerEl.textContent = "";
            clearInterval(timer);
            endScreen();
        }

    }, 1000);
}

setTime();
 
// The questions, possible answers, and the correct answer
var quizArr = [
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png",
        options: {
            a: "1. Bayleef",
            b: "2. Nuzzleaf",
            c: "3. Leafeon",
            d: "4. Roserade",
        },
        answer: "3. Leafeon"
    },
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png",
        options: {
            a: "1. Togepi",
            b: "2. Exeggcute",
            c: "3. Budew",
            d: "4. Exeggutor",
        },
        answer: "1. Togepi"
    },
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
        options: {
            a: "1. Nidoking",
            b: "2. Tyrogue",
            c: "3. Makuhita",
            d: "4. Lucario",
        },
        answer: "4. Lucario"
    },
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
        options: {
            a: "1. Meowth",
            b: "2. Mew",
            c: "3. Espurr",
            d: "4. Meowstic",
        },
        answer: "2. Mew"
    },
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/771.png",
        options: {
            a: "1. Darumaka",
            b: "2. Jirachi",
            c: "3. Pyukumuku",
            d: "4. Hariyama",
        },
        answer: "3. Pyukumuku"
    },            
]      


var index = 0;
var score = [""];

// This goes through the array of objects with the questions and choices shown. When clicking any answer, it goes to the next one.
function showQuiz () {

    if(index < quizArr.length) {
        document.getElementById('question').innerHTML =
        `<img src='${quizArr[index].question}'/>`
    
        document.getElementById('choices').innerHTML=
        `<button>${quizArr[index].options.a}</button>
        <button>${quizArr[index].options.b}</button>
        <button>${quizArr[index].options.c}</button>
        <button>${quizArr[index].options.d}</button>`

    } else {
        document.getElementById('container').style.display = "none";
        document.getElementById('timer').style.display = "none";
        document.getElementById('final').style.display = "block";
        document.getElementById('score').innerHTML = timeLeft;
    }

}

document.getElementById('choices').onclick = function(e) {
    
// When clicking the right answer, displays 'Correct'
    if(e.target.innerText == quizArr[index].answer) {
        document.getElementById('check').innerHTML =
        `<h3>Correct</h3>`;

// When clicking the wrong answer, displays 'Wrong!', and subtracts 10 seconds from the timer
    } else {
        document.getElementById('check').innerHTML =
        `<h3>Wrong</h3>`;
        timeLeft -= 10;
    }
    index++;
    showQuiz();
}


// When finising the quiz, your score is shown as the seconds remaining, and you can enter your name
// Then shows the high score board.
document.getElementById('submitBtn').onclick = function() {
    var name = document.getElementById('name').value;
    localStorage.setItem('name', name);
    localStorage.setItem('score', timeLeft);
}

showQuiz();
