import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";

const bouton = document.createElement("button");

bouton.textContent = "Start Quiz";
bouton.id = "start-button";

bouton.addEventListener("click", () => {
  alert("Quiz Started!");
  document.body.style.display = "none";
});

document.body.appendChild(bouton);

const startScreen = document.createElement("div");
startScreen.id = "start-screen";
document.body.appendChild(startScreen);

const header = document.createElement("header");
const headerTitle = document.createElement("h1");
headerTitle.textContent = quiz.title;
header.appendChild(headerTitle);
app.appendChild(header);
