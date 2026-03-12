import { displayQuestion } from "./dom.js";

let currentQuestionIndex = 0;

export function initQuiz(quiz) {

  const startButton = document.querySelector("#start-button");

  startButton.addEventListener("click", () => {

    const question = quiz.questions[currentQuestionIndex];

    const questionText = document.querySelector("#question-text");
    const answersContainer = document.querySelector("#answers");

    displayQuestion(question, questionText, answersContainer);

  });

}g