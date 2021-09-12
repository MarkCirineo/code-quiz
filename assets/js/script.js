var startButton = document.querySelector("#start-button");
var startP = document.querySelector("#start-p")
var h1 = document.querySelector("h1")
var main = document.getElementById("main")
var questionOne = document.getElementById("question-one")

//clicking the start button
startButton.addEventListener("click", startQuestionOne)
 
function startQuestionOne() {
    //got rid of starting screen
    startP.setAttribute("style", "display: none;");
    h1.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;")
    //created quetsion
    var question = document.createElement("h2")
    question.textContent = "Commonly used data types DO NOT include: "
    main.prepend(question);
    //showed question 1 options
    questionOne.setAttribute("style", "display: block;")
}

//choosing answer for question 1
var wrongOne = document.querySelectorAll(".wrong-one")
var correctOne = document.querySelector(".correct-one")

wrongOne.forEach(function(wrong) {
    wrong.addEventListener("click", wrongAnswer)
});
function wrongAnswer() {
    //show wrong message
    var wrongAlert = document.createElement("h3");
    wrongAlert.textContent = "Wrong!"
    main.appendChild(wrongAlert);
    var alertSeconds = 3;
    var alertTimer = setInterval(function() {
        alertSeconds--;
        if(alertSeconds === 0) {
            clearInterval(alertTimer);
            wrongAlert.setAttribute("style", "display: none")
        }
    }, 1000);
    //show question two
    startQuestionTwo();
}

correctOne.addEventListener("click", correctAnswer);
function correctAnswer() {
    var correctAlert = document.createElement("h3");
    correctAlert.textContent = "Correct!"
    main.appendChild(correctAlert);
    var alertSeconds = 3;
    var alertTimer = setInterval(function() {
        alertSeconds--;
        if(alertSeconds === 0) {
            clearInterval(alertTimer);
            correctAlert.setAttribute("style", "display: none")
        }
    }, 1000);
    //show question two
    startQuestionTwo();
}

function startQuestionTwo() {
    
}

//choosing answer for question 2
