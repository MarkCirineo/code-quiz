var startButton = document.querySelector("#start-button");
var startP = document.querySelector("#start-p")
var h1 = document.querySelector("h1")

startButton.addEventListener("click", questionTwo)

function questionTwo() {
    startP.setAttribute("style", "display: none;");
    h1.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;")
}