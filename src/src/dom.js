export function displayQuestion(question, questionText, answersContainer) {

  questionText.innerText = question.question;
  answersContainer.innerHTML = "";

  question.options.forEach((option) => {

    const button = document.createElement("button");
    button.innerText = option;

    answersContainer.appendChild(button);

  });
}