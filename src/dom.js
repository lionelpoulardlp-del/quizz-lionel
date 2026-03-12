export function StartScreen(app, quizTitle) {
  app.innerHTML = "";

  const section = document.createElement("section");
  section.className = "screen";

  const h1 = document.createElement("h1");
  h1.textContent = quizTitle;

  const button = document.createElement("button");
  button.id = "start-button";
  button.textContent = "Démarrer";

  section.appendChild(h1);
  section.appendChild(button);

  app.appendChild(section);
}

export function displayQuestion(app, quizTitle, question) {
  app.innerHTML = "";

  const section = document.createElement("section");
  section.className = "screen";

  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.textContent = quizTitle;

  header.appendChild(h1);

  const questionText = document.createElement("div");
  questionText.id = "question-text";
  questionText.textContent = question.question;

  const answers = document.createElement("div");
  answers.id = "answers";
  answers.className = "answers";

  const message = document.createElement("div");
  message.id = "message";
  message.className = "message";

  const nextButton = document.createElement("button");
  nextButton.id = "next-button";
  nextButton.className = "hidden";
  nextButton.textContent = "Question suivante";

  section.appendChild(header);
  section.appendChild(questionText);
  section.appendChild(answers);
  section.appendChild(message);
  section.appendChild(nextButton);

  app.appendChild(section);
}

export function EndScreen(app, endTitle, score, totalQuestions) {
  app.innerHTML = "";

  const section = document.createElement("section");
  section.className = "screen";

  const h1 = document.createElement("h1");
  h1.textContent = endTitle;

  const h2 = document.createElement("h2");
  h2.textContent = "Ton score est de";

  const scoreDiv = document.createElement("div");
  scoreDiv.className = "score";
  scoreDiv.textContent = score + " / " + totalQuestions;

  const button = document.createElement("button");
  button.id = "restart-button";
  button.textContent = "Recommencer le quiz";

  section.appendChild(h1);
  section.appendChild(h2);
  section.appendChild(scoreDiv);
  section.appendChild(button);

  app.appendChild(section);
}