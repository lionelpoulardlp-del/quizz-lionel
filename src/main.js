import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";
import { initQuiz } from "./quiz.js";

const app = document.querySelector("#app");

initQuiz(app, quiz);
