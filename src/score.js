let score = 0;       // Variable globale pour stocker le score

export function resetScore() {    // Fonction pour réinitialiser le score à zéro
  score = 0;
}

export function addPoint() {     // Fonction pour ajouter un point au score
  score++;
}

export function getScore() {    // Fonction pour récupérer le score actuel
  return score;
}