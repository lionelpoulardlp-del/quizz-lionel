import { StartScreen, displayQuestion, EndScreen } from "./dom.js";   // Import des fonctions pour afficher les différentes parties du quiz
import { resetScore, addPoint, getScore } from "./score.js";          // Import des fonctions pour gérer le score du quiz

let questionIndex = 0;  // Variable globale pour suivre l'index de la question actuelle dans le quiz

export function initQuiz(app, quiz) {   // Fonction d'initialisation du quiz, qui affiche l'écran de démarrage et prépare les événements pour démarrer le quiz
  Start(app, quiz);  // Appelle la fonction Start pour afficher l'écran de démarrage du quiz
}

function Start(app, quiz) {   // Fonction pour afficher l'écran de démarrage du quiz et configurer l'événement pour démarrer le quiz lorsque le bouton est cliqué
  StartScreen(app, quiz.title);  // Affiche l'écran de démarrage du quiz en utilisant la fonction StartScreen et en passant le titre du quiz

  const startButton = document.querySelector("#start-button");  // Sélectionne le bouton de démarrage dans l'écran de démarrage du quiz

  startButton.addEventListener("click", () => {    // Ajoute un événement de clic au bouton de démarrage pour lancer le quiz lorsque l'utilisateur clique dessus
    questionIndex = 0;   // Réinitialise l'index de la question à zéro pour commencer le quiz depuis la première question
    resetScore();  // Réinitialise le score à zéro en appelant la fonction resetScore pour s'assurer que le score est correct au début du quiz
    question(app, quiz);   // Appelle la fonction question pour afficher la première question du quiz en passant l'élément "app",
    //  et les données du quiz
  });
}

function question(app, quiz) {
  const question = quiz.questions[questionIndex];

  displayQuestion(app, quiz.title, question);

  const answersContainer = document.querySelector("#answers");
  const messageDiv = document.querySelector("#message");
  const nextButton = document.querySelector("#next-button");

  question.options.forEach((option, index) => {
    const answerButton = document.createElement("button");
    answerButton.innerText = option;

    answerButton.addEventListener("click", () => {
      const allButtons = answersContainer.querySelectorAll("button");

      allButtons.forEach((button) => {
        button.disabled = true;
      });

      if (index === question.correctIndex) {
        messageDiv.innerText = "Bonne réponse";
        addPoint();
      } else {
        messageDiv.innerText =
          "Mauvaise réponse, la bonne réponse est " + question.options[question.correctIndex] +  ".";
      }

      nextButton.classList.remove("hidden");
    });

    answersContainer.appendChild(answerButton);
  });

  nextButton.addEventListener("click", () => {
    questionIndex++;

    if (questionIndex < quiz.questions.length) {
      question(app, quiz);
    } else {
      End(app, quiz);
    }
  });
}

function End(app, quiz) {
  const score = getScore();
  const totalQuestions = quiz.questions.length;
  const percentage = (score / totalQuestions) * 100;

  let endTitle = "";

  if (percentage === 0) {
    endTitle = "Oups ! Tu n'as trouvé aucune bonne réponse 😱";
  } else if (percentage < 50) {
    endTitle = "Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅";
  } else if (percentage < 80) {
    endTitle = "C'est pas mal, mais tu peux encore t'améliorer 💪";
  } else if (percentage < 100) {
    endTitle = "C'est bien, tu as fait peu d'erreurs 😉";
  } else {
    endTitle = "Aucune erreur, c'est parfait 😎";
  }

  EndScreen(app, endTitle, score, totalQuestions);

  const restartButton = document.querySelector("#restart-button");

  restartButton.addEventListener("click", () => {
    questionIndex = 0;
    resetScore();
    Start(app, quiz);
  });
}