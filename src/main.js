import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";

const titleElement = document.querySelector("#start-screen h1");
const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const questionScreen = document.querySelector("#question-screen");

titleElement.innerText = quiz.title;

startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
});
