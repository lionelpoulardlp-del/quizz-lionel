import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";

const app = document.querySelector("#app");

let currentQuestionIndex = 0;
let score = 0;

// écran accueil
function renderStartScreen() {
  app.innerHTML = `
    <section class="screen">
      <h1>${quiz.title}</h1>
      <button id="start-button">Démarrer</button>
    </section>
  `;

  const startButton = document.querySelector("#start-button");

  startButton.addEventListener("click", () => {
    renderQuestionScreen();
  });
}

// écran question
function renderQuestionScreen() {
  const question = quiz.questions[currentQuestionIndex];

  app.innerHTML = `
    <section class="screen">
      <header>
        <h1>${quiz.title}</h1>
      </header>

      <div>
        <h2>${question.question}</h2>
      </div>

      <div class="answers" id="answers"></div>

      <div class="message" id="message"></div>

      <button id="next-button" class="hidden">Question suivante</button>
    </section>
  `;

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
        score++;
      } else {
        messageDiv.innerText = `Mauvaise réponse, la bonne réponse est ${question.options[question.correctIndex]}.`;
      }

      nextButton.classList.remove("hidden");
    });

    answersContainer.appendChild(answerButton);
  });

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.questions.length) {
      renderQuestionScreen();
    } else {
      renderEndScreen();
    }
  });
}

// écran fin
function renderEndScreen() {
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

  app.innerHTML = `
    <section class="screen">
      <h1>${endTitle}</h1>
      <h2>Ton score est de</h2>
      <div class="score">${score} / ${totalQuestions}</div>
      <button id="restart-button">Recommencer le quiz</button>
    </section>
  `;

  const restartButton = document.querySelector("#restart-button");

  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    renderStartScreen();
  });
}

// lancement
renderStartScreen();