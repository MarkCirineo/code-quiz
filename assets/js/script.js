var startButton = document.querySelector("#start-button");
var startP = document.querySelector("#start-p")
var h1 = document.querySelector("h1")
var main = document.getElementById("main")
var questionOne = document.getElementById("question-one")

startButton.addEventListener("click", startQuestionOne)

function startQuestionOne() {
    startP.setAttribute("style", "display: none;");
    h1.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;")

    var question = document.createElement("h2")
    question.textContent = "Commonly used data types DO NOT include: "
    main.prepend(question);

    questionOne.setAttribute("style", "display: block;")
}

var wrongOne = document.querySelectorAll(".wrong-one")
var correctOne = document.querySelector(".correct-one")

wrongOne.forEach(function(wrong) {
    wrong.addEventListener("click", wrongAnswer)
});

function wrongAnswer() {
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
    
}

correctOne.addEventListener("click", correctAnswer)

function correctAnswer() {
    var correctAlert = document.createElement("h3");
    correctAlert.textContent = "Correct!"
    main.appendChild(correctAlert);
}