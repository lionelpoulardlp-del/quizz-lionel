import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";   // Import du quiz depuis un fichier JSON
import { initQuiz } from "./quizz.js";            // Import de la fonction d'initialisation du quiz


const app = document.querySelector("#app");     // Sélection de l'élément HTML avec l'id "app"

initQuiz(app, quiz);                // Initialisation du quiz en passant l'élément "app" et les données du quiz