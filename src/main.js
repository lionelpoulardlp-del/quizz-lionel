import "./style.css";
import quiz from "./quiz-femmes-scientifiques.json";

const app = document.querySelector("#app");

let currentQuestionIndex = 0;
let score = 0;

function renderStartScreen() {  
 
  app.innerHTML = ` 
    <section class="screen">   
      <button id="start-button">Démarrer</button>
    </section>
  `;

  const startButton = document.querySelector("#start-button");  
  startButton.addEventListener("click", () => {   
    currentQuestionIndex = 0;
    score = 0;
    renderQuestionScreen();
  });
}


