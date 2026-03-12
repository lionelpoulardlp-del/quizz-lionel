export function StartScreen(app, quizTitle) {   // Fonction pour afficher l'écran de démarrage du quiz

  app.innerHTML = "";      // Efface le contenu de l'élément "app" pour préparer l'affichage du nouvel écran

  const section = document.createElement("section");  // Crée un nouvel élément "section" pour contenir le contenu de l'écran de démarrage
  section.className = "screen";

  const h1 = document.createElement("h1");   // Crée un élément "h1" pour afficher le titre du quiz
  h1.textContent = quizTitle;   // Définit le texte du titre du quiz en utilisant la variable "quizTitle" passée en paramètre

  const button = document.createElement("button");  // Crée un élément "button" pour permettre à l'utilisateur de démarrer le quizz
  button.id = "start-button";     // Définit l'id du bouton pour pouvoir le sélectionner plus tard et lui ajouter un événement
  button.textContent = "Démarrer";  // Définit le texte du bouton pour indiquer à l'utilisateur qu'il peut cliquer pour démarrer le quizz

  section.appendChild(h1);    // Ajoute le titre du quiz à la section
  section.appendChild(button);  // Ajoute le bouton de démarrage à la section

  app.appendChild(section);  // Ajoute la section contenant le titre et le bouton à l'élément "app" pour l'afficher à l'utilisateur
}


export function displayQuestion(app, quizTitle, question) {    // Fonction pour afficher une question du quiz, 
// avec les options de réponse et les éléments pour afficher les messages et le bouton de question suivante.


  app.innerHTML = "";    // Efface le contenu de l'élément "app" pour préparer l'affichage de la question suivante

  const section = document.createElement("section");   // Crée un nouvel élément "section" pour contenir le contenu de la question
  section.className = "screen";   //  Définit la classe de la section pour appliquer les styles correspondants

  const header = document.createElement("header");  // Crée un élément "header" pour contenir le titre du quiz

  const h1 = document.createElement("h1");   // Crée un élément "h1" pour afficher le titre du quiz en haut de la question
  h1.textContent = quizTitle;   // Définit le texte du titre du quiz en utilisant la variable "quizTitle" passée en paramètre, 
  // pour que le titre soit visible pendant toute la durée du quiz

  header.appendChild(h1);  // Ajoute le titre du quiz au header

  const questionText = document.createElement("div");  // Crée un élément "div" pour afficher le texte de la question
  questionText.id = "question-text";   // Définit l'id du div pour pouvoir le sélectionner plus tard et lui ajouter du contenu
  questionText.textContent = question.question;   // Définit le texte de la question en utilisant la propriété "question" de l'objet "question" passé en paramètre,
  // pour afficher le texte de la question à l'utilisateur

  const answers = document.createElement("div");  // Crée un élément "div" pour contenir les options de réponse de la question
  answers.id = "answers";   // Définit l'id du div pour pouvoir le sélectionner plus tard et lui ajouter les boutons de réponse
  answers.className = "answers";  // Définit la classe du div pour appliquer les styles correspondants aux options de réponse

  const message = document.createElement("div"); // Crée un élément "div" pour afficher les messages de feedback après que l'utilisateur ait sélectionné une réponse
  message.id = "message"; //  Définit l'id du div pour pouvoir le sélectionner plus tard et lui ajouter du contenu pour afficher les messages de feedback
  message.className = "message";  // Définit la classe du div pour appliquer les styles correspondants aux messages 

  const nextButton = document.createElement("button");  // Crée un élément "button" pour permettre à l'utilisateur de passer à la question suivante;,
  //  après avoir sélectionné une réponse
  nextButton.id = "next-button";  // Définit l'id du bouton pour pouvoir le sélectionner plus tard et lui ajouter un événement pour passer à la question suivante
  nextButton.className = "hidden";   // Définit la classe du bouton pour le cacher initialement, et ne l'afficher que lorsque l'utilisateur aura sélectionné une réponse
  nextButton.textContent = "Question suivante";  // Définit le texte du bouton pour indiquer à l'utilisateur qu'il peut cliquer pour passer à la question suivante

  section.appendChild(header);            // Ajoute le header contenant le titre du quiz à la section 
  section.appendChild(questionText);      // Ajoute le div contenant le texte de la question à la section
  section.appendChild(answers);         // Ajoute le div contenant les options de réponse à la section  
  section.appendChild(message);       // Ajoute le div contenant les messages de feedback à la section
  section.appendChild(nextButton);      // Ajoute le bouton de question suivante à la section

  app.appendChild(section); // Ajoute la section contenant tous les éléments de la question à l'élément "app",
  // pour l'afficher à l'utilisateur 
}


export function EndScreen(app, endTitle, score, totalQuestions) {   // Fonction pour afficher l'écran de fin du quiz, avec le score final de l'utilisateur et un bouton pour recommencer le quiz

  app.innerHTML = "";  // Efface le contenu de l'élément "app" pour préparer l'affichage de l'écran de fin du quiz

  const section = document.createElement("section");  // Crée un nouvel élément "section" pour contenir le contenu de l'écran de fin du quiz
  section.className = "screen";   

  const h1 = document.createElement("h1");  // Crée un élément "h1" pour afficher le titre de l'écran de fin du quiz
  h1.textContent = endTitle;      // Définit le texte du titre de l'écran de fin du quiz en utilisant la variable "endTitle" passée en paramètre,

  const h2 = document.createElement("h2");    
  h2.textContent = "Ton score est de";    // Définit le texte du sous-titre de l'écran de fin du quiz pour introduire le score final de l'utilisateur

  const scoreDiv = document.createElement("div");    // Crée un élément "div" pour afficher le score final de l'utilisateur
  scoreDiv.className = "score";       // Définit la classe du div pour appliquer les styles correspondants au score final
  scoreDiv.textContent = score + " / " + totalQuestions;     // Définit le texte du div pour afficher le score final de l'utilisateur, en utilisant les variables "score" et "totalQuestions" passées en paramètre,

  const button = document.createElement("button");  // Crée un élément "button" pour permettre à l'utilisateur de recommencer le quiz
  button.id = "restart-button";     // Définit l'id du bouton pour pouvoir le sélectionner plus tard et lui ajouter un événement,
  //  pour recommencer le quiz
  button.textContent = "Recommencer le quiz";  

  section.appendChild(h1);    // Ajoute le titre de l'écran de fin du quiz à la section
  section.appendChild(h2);  // Ajoute le sous-titre de l'écran de fin du quiz à la section
  section.appendChild(scoreDiv);   // Ajoute le div contenant le score final de l'utilisateur à la section
  section.appendChild(button);   // Ajoute le bouton de recommencement du quiz à la section

  app.appendChild(section);   // Ajoute la section contenant tous les éléments de l'écran de fin du quiz à l'élément "app",
  // pour l'afficher à l'utilisateur
}