// Click 'Start" button and quiz starts. Timer starts.

var timerEl = document.querySelector("#timer");
var timeLeft = 60;

function setTime() {
    var timer = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        // if (answer is false) timeleft -=10

        // if timeleft === 0, timeLeft.length = score?
            // no time = alert: times up!


    }, 1000);
}

setTime();


var quizArr = [
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png",
        options: {
            a: "1. Bayleef",
            b: "2. Nuzzleaf",
            c: "3. Leafeon",
            d: "4. Roserade",
        },
        answer: "c"
    },
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png",
        options: {
            a: "1. Togepi",
            b: "2. Exeggcute",
            c: "3. Budew",
            d: "4. Exeggutor",
        },
        answer: "a"
    },
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
        options: {
            a: "1. Nidoking",
            b: "2. Tyrogue",
            c: "3. Makuhita",
            d: "4. Lucario",
        },
        answer: "d"
    },
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
        options: {
            a: "1. Meowth",
            b: "2. Mew",
            c: "3. Espurr",
            d: "4. Meowstic",
        },
        answer: "b"
    },
    {
        question: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/771.png",
        options: {
            a: "1. Darumaka",
            b: "2. Jirachi",
            c: "3. Pyukumuku",
            d: "4. Hariyama",
        },
        answer: "c"
    },            
]      

// practice to see if I could get it to work
// var url = [
//     "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png", 
//     "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png", 
//     "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"];

var index = 0;
var currentQuestion;

// function showQuiz () {
//     currentQuestion = quizArr[index];
//     index = index++;
//     for (var i = 0; i < quizArr.length; i++) {
//         quizArr[i].
//     };
// }


// showQuiz();


var imgEl = document.createElement("div");
var image = document.createElement("img");

document.body.appendChild(imgEl);
document.body.appendChild(image);

// imgEl.setAttribute("style", "display: flex; justify-content: center");
image.setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png");
image.setAttribute("style", "width: 20%; padding-left: 40%");

var listEl = document.createElement("ol")
var choice1 = document.createElement("button");
choice1.textContent = "1. Bayleef";

var choice2 = document.createElement("button");
choice2.textContent = "2. Nuzzleaf";

var choice3 = document.createElement("button");
choice3.textContent = "3. Leafeon";

var choice4 = document.createElement("button");
choice4.textContent = "4. Roserade";

document.body.appendChild(listEl);
listEl.appendChild(choice1);
listEl.appendChild(choice2);
listEl.appendChild(choice3);
listEl.appendChild(choice4);

var choices = choice1 + choice2 + choice3 + choice4;
listEl.setAttribute("style", "display: flex; flex-direction: column; margin: 4% 40%");
choices.setAttribute("style", "font-size: 30px");


// var button = ;
// button.addEventListener("click", function(event) {
//     event.stopPropagation();
//     clickButtonAndShowNextQuestionPlease();
// });

// function clickButtonAndShowNextQuestionPlease () {
//     index++;
//     currentImg = url[index];
//     question.textContent = currentImg;
// }





var scores = [""];




// When clicking the right answer, displays 'Right!'
// When clicking the wrong answer, displays 'Wrong!', and subtracts 10 seconds from the timer
// When clicking any answer, it goes to the next one.
// When finising the quiz, your score is shown as the seconds remaining, and you can enter your name
// Then shows the high score board.
