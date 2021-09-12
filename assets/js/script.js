var startButton = document.querySelector("#start-button");
var startP = document.querySelector("#start-p");
var h1 = document.querySelector("h1");
var main = document.getElementById("main");
var question = document.createElement("h2")
var questionOne = document.getElementById("question-one");
var questionTwo = document.getElementById("question-two");

//clicking the start button
startButton.addEventListener("click", startQuestionOne);
 
function startQuestionOne() {
    //got rid of starting screen
    startP.setAttribute("style", "display: none;");
    h1.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;")
    //created quetsion
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

function startQuestionThree() {

}