import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";
import { initQuiz } from "./quizz.js";

const app = document.querySelector("#app");

initQuiz(app, quiz);