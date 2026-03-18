import { StartScreen, displayQuestion, EndScreen } from "./dom.js";
import { resetScore, addPoint, getScore } from "./score.js";

let questionIndex = 0;  // Variable globale pour suivre l'index de la question actuelle

export function initQuiz(app, quiz) {    //Cette fonction sert à initialiser le quiz en affichant l'écran de démarrage.
  Start(app, quiz);
}

function Start(app, quiz) { //Cette fonction sert à afficher l'écran de démarrage du quiz.
  StartScreen(app, quiz.title); //J'affiche l'écran de démarrage en passant le conteneur HTML et le titre du quiz.

  const startButton = document.querySelector("#start-button");

 startButton.addEventListener("click", () => {  
    
questionIndex = 0;
 resetScore(); 
   
 question(app, quiz);  //Lorsque l'utilisateur clique sur le bouton de démarrage, je réinitialise l'index des questions et le score, puis j'affiche la première question du quiz.

  });
}

function question(app, quiz) {  // fonction QUI sert à afficher une question du quiz
 const currentQuestion = quiz.questions[questionIndex]; // Je récupère la question actuelle en utilisant l'index de la question dans le tableau
//
 displayQuestion(app, quiz.title, currentQuestion);  //J'affiche la question en passant le conteneur HTML, le titre du quiz et la question actuelle.

const answersContainer = document.querySelector("#answers");
const messageDiv = document.querySelector("#message");
const nextButton = document.querySelector("#next-button");

currentQuestion.options.forEach((option, index) => {  //Je parcours les options de réponse de la question  et pour chaque option, je crée un bouton de réponse.
 const answerButton = document.createElement("button"); 
answerButton.textContent = option;  //Je lui donne un texte correspondant à l'option de réponse.

answerButton.addEventListener("click", () => {  //Lorsque l'utilisateur clique sur un bouton de réponse, je vérifie si la réponse est correcte ou non
                                              //  en comparant l'index de la réponse sélectionnée avec l'index de la réponse correcte.
 const allButtons = answersContainer.querySelectorAll("button"); //Je sélectionne tous les boutons de réponse pour les désactiver après que l'utilisateur ait cliqué sur une réponse.

allButtons.forEach((button) => {  //Je parcours tous les boutons de réponse et je les désactive pour empêcher l'utilisateur de cliquer sur une autre réponse 
button.disabled = true; 
 });

if (index === currentQuestion.correctIndex) { //Si la réponse sélectionnée est correcte, j'affiche un message de félicitations et j'ajoute un point au score de l'utilisateur.
       
messageDiv.textContent = "Bonne réponse"; 
 addPoint();//j appelle la fonction addpoint
 }

else {
messageDiv.textContent = "Mauvaise réponse, la bonne réponse est " + currentQuestion.options[currentQuestion.correctIndex] + ".";   }

nextButton.classList.remove("hidden"); //je supprime la classe "hidden" du bouton
    });

answersContainer.appendChild(answerButton); 
  });

  nextButton.addEventListener("click", () => {  //Lorsque l'utilisateur clique sur le bouton "Question suivante", je passe à la question suivante 
    questionIndex++; 

if (questionIndex < quiz.questions.length) { //Si l'index de la question est inférieur au nombre total de questions, je continue à afficher les questions suivantes en appelant la fonction question.
      question(app, quiz); //J'appelle la fonction question pour afficher la question suivante.
    } 
else {
      
  End(app, quiz); //Si l'index de la question est égal ou supérieur au nombre total de questions, cela signifie que l'utilisateur a répondu à toutes les questions du quiz
  }
  });
}

function End(app, quiz) {  //Cette fonction sert à afficher l'écran de fin du quiz avec le score de l'utilisateur et un message personnalisé en fonction de son score.
  const score = getScore();
  const totalQuestions = quiz.questions.length;
  const percentage = (score / totalQuestions) * 100; //je calcule le % de bonnes réponses 

let endTitle = ""; //Je définis une variable pour stocker le titre de l'écran de fin en fonction du score de l'utilisateur.

  if (percentage === 0) {  
    endTitle = "Oups ! Tu n'as trouvé aucune bonne réponse 😱";
  } 
  else if (percentage < 50) {
    endTitle = "Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅";
  } 
  else if (percentage < 80) {
    endTitle = "C'est pas mal, mais tu peux encore t'améliorer 💪";
  } 
  else if (percentage < 100) {
    endTitle = "C'est bien, tu as fait peu d'erreurs 😉";
  } 
  else {
    endTitle = "Aucune erreur, c'est parfait 😎";
  }

  EndScreen(app, endTitle, score, totalQuestions); //J'affiche l'écran de fin en passant le conteneur HTML, le titre de fin, le score de l'utilisateur et le nombre total de questions.

  const restartButton = document.querySelector("#restart-button"); //bouton pour recommencer le quiz

  restartButton.addEventListener("click", () => { //ecouteur pour reinitialiser le quiz
    questionIndex = 0;
    resetScore();
    Start(app, quiz);
  });
}