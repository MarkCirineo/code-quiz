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
