import { StartScreen, displayQuestion, EndScreen } from "./dom.js";
import { resetScore, addPoint, getScore } from "./score.js";

let questionIndex = 0;

export function initQuiz(app, quiz) {
Start(app, quiz);
}

function Start(app, quiz) {
StartScreen(app, quiz.title);

const startButton = document.querySelector("#start-button");

startButton.addEventListener("click", () => {
questionIndex = 0;
resetScore();
question(app, quiz);
  });
}

//-------- mes fonctions pour gérer les questions et l'écran de fin --------

function question(app, quiz) {
const currentQuestion = quiz.questions[questionIndex];

displayQuestion(app, quiz.title, currentQuestion);

const answersContainer = document.querySelector("#answers");
const messageDiv = document.querySelector("#message");
const nextButton = document.querySelector("#next-button");

currentQuestion.options.forEach((option, index) => {
const answerButton = document.createElement("button");
answerButton.textContent = option;
answerButton.addEventListener("click", () => {
const allButtons = answersContainer.querySelectorAll("button");

      // Désactiver tous les boutons de réponse après une sélection

allButtons.forEach((button) => {
button.disabled = true;
});

if (index === currentQuestion.correctIndex) { messageDiv.textContent = "Bonne réponse"; addPoint();

} 
else {
        messageDiv.textContent = "Mauvaise réponse, la bonne réponse est " + currentQuestion.options[currentQuestion.correctIndex] + ".";
}

 nextButton.classList.remove("hidden");
 });

 answersContainer.appendChild(answerButton);
 });
 nextButton.addEventListener("click", () => {
    questionIndex++;

  if (questionIndex < quiz.questions.length) {
      question(app, quiz);
 } 
 else {
      End(app, quiz);
    }
  });}

//-------- Fonction pour gérer l'écran de fin --------

function End(app, quiz) {
  const score = getScore();
  const totalQuestions = quiz.questions.length;
  const percentage = (score / totalQuestions) * 100; // Calcul du pourcentage de bonnes réponses

  //------------ Détermination du message à afficher en fonction du pourcentage de bonnes réponses ------------

  let endTitle = ""; // Variable pour stocker le message de fin à afficher

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
else {endTitle = "Aucune erreur, c'est parfait 😎";
}

EndScreen(app, endTitle, score, totalQuestions); // Affichage de l'écran de fin avec le message, le score et le nombre total de questions
const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {

  questionIndex = 0;
resetScore();
Start(app, quiz);
});
}
