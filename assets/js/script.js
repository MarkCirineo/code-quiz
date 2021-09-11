var startButton = document.querySelector("#start-button");
var startP = document.querySelector("#start-p")
var h1 = document.querySelector("h1")

startButton.addEventListener("click", startQuestionOne)

function startQuestionOne() {
    startP.setAttribute("style", "display: none;");
    h1.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;")

    var questionOne = document.createElement("h2")
    questionOne.textContent = "Commonly used data types DO NOT include: "
    document.body.children[1].appendChild(questionOne);


}