import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";   // Import du quiz depuis un fichier JSON
import { initQuiz } from "./quizz.js";            // Import de la fonction d'initialisation du quiz


const app = document.querySelector("#app");     // Sélection de l'élément HTML avec l'id "app"

initQuiz(app, quiz);                // Je lance le quiz en transmettant deux choses : le conteneur HTML et
//les données.