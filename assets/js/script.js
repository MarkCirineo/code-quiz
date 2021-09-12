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

//clicking the start button
startButton.addEventListener("click", startQuestionOne);
 
function startQuestionOne() {
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
    }, 1000);
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
    }, 1000);
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
    showScores();
}

correctFive.addEventListener("click", correctAnswerFive);
function correctAnswerFive() {
    correctAlertAll();
    //show question two
    showScores();
}