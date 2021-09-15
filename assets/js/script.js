var startButton = document.querySelector("#start-button");
var startP = document.querySelector("#start-p");
var h1 = document.querySelector("h1");
var main = document.getElementById("main");
var question = document.createElement("h2")
var questionOne = document.getElementById("question-one");
var questionTwo = document.getElementById("question-two");
var questionThree = document.getElementById("question-three");
var questionFour = document.getElementById("question-four");
var questionFive = document.getElementById("question-five");
var time = 60;
var timerP = document.getElementById("timer-p");
var initialsInput = document.getElementById("initials");
var saveScoreButton = document.getElementById("save-score");
var endResult = document.createElement("p");
var scoreClass = document.querySelector(".score");
var scoreP = document.createElement("p")
var highScores = document.getElementById("high-scores")

//timer function
function timer() {
    var allTimer = setInterval(function() {
        time--;
        timerP.textContent = "Time: " + time;
        if (time === 0 || time < 0) {
            clearInterval(allTimer);
            time = 0;
            timerP.textContent = "Time: " + time;
            enterInitials();
        } else if (endResult.textContent === "You Win!") {
            clearInterval(allTimer);
            timerP.textContent = "Time: " + time;
        }
    }, 1000);
}

function wrongAnswer() {
    time = time - 10;
    timerP.textContent = "Time: " + time;
}

//clicking the start button
startButton.addEventListener("click", startQuestionOne);

function startQuestionOne() {
    timer();
    //got rid of starting screen
    startP.setAttribute("style", "display: none;");
    h1.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;")
    //created question
    question.textContent = "Commonly used data types DO NOT include: "
    main.prepend(question);
    //showed question 1 options
    questionOne.setAttribute("style", "display: block;")
}

//function for wrong alert for all question
function wrongAlertAll() {
    wrongAnswer();
    var wrongAlert = document.createElement("h3");
    wrongAlert.textContent = "Wrong!"
    main.appendChild(wrongAlert);
    var alertSeconds = 2;
    var alertTimer = setInterval(function() {
        alertSeconds--;
        if(alertSeconds === 0) {
            clearInterval(alertTimer);
            wrongAlert.setAttribute("style", "display: none")
        }
    }, 800);
}
//function for correct alert for all questions
function correctAlertAll() {
    var correctAlert = document.createElement("h3");
    correctAlert.textContent = "Correct!"
    main.appendChild(correctAlert);
    var alertSeconds = 2;
    var alertTimer = setInterval(function() {
        alertSeconds--;
        if(alertSeconds === 0) {
            clearInterval(alertTimer);
            correctAlert.setAttribute("style", "display: none;")
        }
    }, 800);
}

//choosing answer for question 1
var wrongOne = document.querySelectorAll(".wrong-one")
var correctOne = document.querySelector(".correct-one")

wrongOne.forEach(function(wrong) {
    wrong.addEventListener("click", wrongAnswerOne)
});
function wrongAnswerOne() {
    //show wrong message
    wrongAlertAll();
    //show question two
    startQuestionTwo();
}

correctOne.addEventListener("click", correctAnswerOne);
function correctAnswerOne() {
    //show correct message
    correctAlertAll();
    //show question two
    startQuestionTwo();
}

//starts question two
function startQuestionTwo() {
    questionOne.setAttribute("style", "display: none;");
    question.textContent = "The condition in an if / else statement is enclosed within _____."
    questionTwo.setAttribute("style", "display: block;")
}

//choosing answer for question 2
var wrongTwo = document.querySelectorAll(".wrong-two")
var correctTwo = document.querySelector(".correct-two")

wrongTwo.forEach(function(wrong) {
    wrong.addEventListener("click", wrongAnswerTwo)
});
function wrongAnswerTwo() {
    //show wrong message
    wrongAlertAll();
    //show question two
    startQuestionThree();
}

correctTwo.addEventListener("click", correctAnswerTwo);
function correctAnswerTwo() {
    correctAlertAll();
    //show question two
    startQuestionThree();
}

//starts question three
function startQuestionThree() {
    questionTwo.setAttribute("style", "display: none;");
    question.textContent = "Arrays in JavaScript can be used to store _____."
    questionThree.setAttribute("style", "display: block;")
}

//choosing answer for queston 3
var wrongThree = document.querySelectorAll(".wrong-three")
var correctThree = document.querySelector(".correct-three")

wrongThree.forEach(function(wrong) {
    wrong.addEventListener("click", wrongAnswerThree)
});
function wrongAnswerThree() {
    //show wrong message
    wrongAlertAll();
    //show question two
    startQuestionFour();
}

correctThree.addEventListener("click", correctAnswerThree);
function correctAnswerThree() {
    correctAlertAll();
    //show question two
    startQuestionFour();
}

//starts question four
function startQuestionFour() {
    questionThree.setAttribute("style", "display: none;");
    question.textContent = "String values must be encolsed within _____ when being assigned to variables."
    questionFour.setAttribute("style", "display: block;")
}

//choosing answer for queston 4
var wrongFour = document.querySelectorAll(".wrong-four")
var correctFour = document.querySelector(".correct-four")

wrongFour.forEach(function(wrong) {
    wrong.addEventListener("click", wrongAnswerFour)
});
function wrongAnswerFour() {
    //show wrong message
    wrongAlertAll();
    //show question two
    startQuestionFive();
}

correctFour.addEventListener("click", correctAnswerFour);
function correctAnswerFour() {
    correctAlertAll();
    //show question two
    startQuestionFive();
}

//starts question five
function startQuestionFive() {
    questionFour.setAttribute("style", "display: none;");
    question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
    questionFive.setAttribute("style", "display: block;")
}

//choosing answer for queston 5
var wrongFive = document.querySelectorAll(".wrong-five")
var correctFive = document.querySelector(".correct-five")

wrongFive.forEach(function(wrong) {
    wrong.addEventListener("click", wrongAnswerFive)
});
function wrongAnswerFive() {
    //show wrong message
    wrongAlertAll();
    //show question two
    enterInitials();
}

correctFive.addEventListener("click", correctAnswerFive);
function correctAnswerFive() {
    correctAlertAll();
    //show question two
    enterInitials();
}

function enterInitials() {
    questionOne.setAttribute("style", "display: none;")
    questionTwo.setAttribute("style", "display: none;")
    questionThree.setAttribute("style", "display: none;")
    questionFour.setAttribute("style", "display: none;")
    questionFive.setAttribute("style", "display: none;")
    question.textContent = "Enter Your Initials:"
    scoreP.setAttribute("class", "score")
    var score = time - 1;
    if (score >= 0) {
        scoreP.textContent = "Your score: " + score;
    } else if (score < 0) {
        scoreP.textContent = "Your score: " + time;
    }
    main.prepend(scoreP);
    endResult.setAttribute("class", "end-result")
    if (time === 0 ||  time < 0) {
        endResult.textContent = "You Lose!"
        main.prepend(endResult);
    } else {
        endResult.textContent = "You Win!"
        main.prepend(endResult);
    }
    console.log(time - 1);
    initialsInput.setAttribute("style", "display: block;")
    saveScoreButton.setAttribute("style", "display: block;")
}

saveScoreButton.addEventListener("click", saveScores);

var savedScores = [];

function saveScores () {
    // saves scores to local storage
    var scores = {};
    scores[initialsInput.value] = time;
    savedScores.push(scores);
    localStorage.setItem("scores", JSON.stringify(savedScores))
    showHighScores();
}

var restartButton = document.createElement("p");
var pScore = document.createElement("p");

function showHighScores() {
    question.textContent = "High Scores:";
    // hides other elements
    initialsInput.setAttribute("style", "display: none;");
    saveScoreButton.setAttribute("style", "display: none;");
    endResult.setAttribute("style", "display: none;");
    scoreP.setAttribute("style", "display: none;");
    // shows other elements
    var savedScoresTest = JSON.parse(localStorage.getItem("scores"));
    if (savedScoresTest !== null) {
        savedScores = savedScoresTest;
    }
    // TODO: get score to print after restarting game.
    for (let i = 0; i < savedScores.length; i++) {
        var score = savedScores[i];
        var scoreArray = Object.keys(score);
        var scoreString = scoreArray.toString();
        // console.log(scoreString)
        var scoreUpperCase = scoreString.toUpperCase();
        // var pScore = document.createElement("p");
        var index = i + 1
        pScore.textContent = index + ". " + scoreUpperCase + ": " + score[initialsInput.value];
        // li.setAttribute("data-index", i);
        highScores.appendChild(pScore);
        // console.log(score); 
    }
    // var restartButton = document.createElement("p");
    restartButton.setAttribute("style", "display: block;");
    pScore.setAttribute("style", "display: block");
    restartButton.setAttribute("class", "restart-button");
    restartButton.textContent = "Restart";
    main.appendChild(restartButton);
}

restartButton.addEventListener("click", startGame)

function startGame() {
    restartButton.setAttribute("style", "display: none;");
    pScore.setAttribute("style", "display: none");
    question.textContent = "";
    // shows start screen
    startP.setAttribute("style", "display: block;");
    h1.setAttribute("style", "display: block;");
    startButton.setAttribute("style", "display: flex;")
    time = 60;
}