export function StartScreen(app, quizTitle) { //Cette fonction sert à afficher l'écran de départ du quiz.
  app.innerHTML = ""; //Je vide le contenu précédent pour repartir d'un écran propre. 
  

const section = document.createElement("section"); //Je crée une section qui va contenir le titre et le bouton de démarrage du quiz.
  section.className = "screen";//Je lui donne une classe pour pouvoir la styliser avec du CSS.

const h1 = document.createElement("h1"); //Je crée un élément h1 pour afficher le titre du quiz.
  h1.textContent = quizTitle;

const button = document.createElement("button"); //Je crée un bouton pour démarrer le quiz et lui donne un id pour pouvoir le sélectionner plus tard.
  button.id = "start-button";  //Je crée un bouton pour démarrer le quiz et lui donne un id pour pouvoir le sélectionner plus tard.
  button.textContent = "Démarrer"; 

section.appendChild(h1); 
section.appendChild(button); //J'ajoute le titre et le bouton à la section que j'ai créée.

app.appendChild(section); //J'ajoute la section à l'élément "app" pour l'afficher à l'écran.

}

export function displayQuestion(app, quizTitle, question) {  //Cette fonction sert à afficher une question du quiz.
app.innerHTML = ""; //Je vide le contenu précédent pour repartir d'un écran propre.

const section = document.createElement("section"); 
  section.className = "screen";

const header = document.createElement("header");

const h1 = document.createElement("h1");
  h1.textContent = quizTitle;

header.appendChild(h1);

const questionText = document.createElement("div");
  questionText.id = "question-text";
  questionText.textContent = question.question;

const answers = document.createElement("div");  //Je crée un conteneur pour les réponses et lui donne un id 
  answers.className = "answers";

const message = document.createElement("div"); 
  message.id = "message";
  message.className = "message";

const nextButton = document.createElement("button");

  nextButton.id = "next-button"; //Je crée un bouton pour passer à la question suivante 
  nextButton.className = "hidden"; //Je lui donne une classe "hidden" pour le cacher au départ
  nextButton.textContent = "Question suivante";//Je lui donne un texte pour indiquer à l'utilisateur qu'il peut passer à la question suivante.

section.appendChild(header);
section.appendChild(questionText); 
section.appendChild(answers);
section.appendChild(message);
section.appendChild(nextButton);//J'ajoute tous les éléments que j'ai créés à la section.

app.appendChild(section);

}

export function EndScreen(app, endTitle, score, totalQuestions) { //Cette fonction sert à afficher l'écran de fin du quiz avec le score de l'utilisateur.
  app.innerHTML = "";

const section = document.createElement("section");
  section.className = "screen";

const h1 = document.createElement("h1"); //Je crée le titre de l'écran de fin en fonction du score de l'utilisateur.
  h1.textContent = endTitle;

const h2 = document.createElement("h2"); //idem pour score
  h2.textContent = "Ton score est de";

const scoreDiv = document.createElement("div"); //affiche le score et points et total de questions
  scoreDiv.className = "score";
  scoreDiv.textContent = score + " / " + totalQuestions; //J'affiche le score de l'utilisateur en indiquant le nombre de points obtenus sur le nombre total de questions.

const button = document.createElement("button"); // bouton pour recommencer le quiz et lui donne un id pour pouvoir le sélectionner plus tard.
  button.id = "restart-button";
  button.textContent = "Recommencer le quiz";

section.appendChild(h1);
section.appendChild(h2);
section.appendChild(scoreDiv);
section.appendChild(button);

app.appendChild(section); //J'ajoute tous les éléments que j'ai créés à la section, puis j'ajoute la section à l'élément "app" pour l'afficher à l'écran.

}