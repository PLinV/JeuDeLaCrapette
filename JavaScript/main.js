import { deck, Game } from './game.js';
import Card from './card.js'; 

const game1 = new Game("paulin", "anna")

const p1Container = document.getElementById('player1');
const p2Container = document.getElementById('player2');

p1Container.innerHTML = "<h2>Joueur 1</h2>";
p2Container.innerHTML = "<h2>Joueur 2</h2>";

game1.afficher();

game1.deckP1["pique4"].position = 1;

for (const key in game1.deckP1) {
  const carte = game1.deckP1[key];

  const cardDiv = document.createElement('div');
  cardDiv.className = "cardP1";
  cardDiv.innerHTML = `
    <strong>${carte.symbol}</strong><br/>
    ${carte.num} <br/>
    ${carte.position}
  `;

  p1Container.appendChild(cardDiv);
}

for (const key in game1.deckP2) {
  const carte = game1.deckP2[key];

  const cardDiv = document.createElement('div');
  cardDiv.className = "cardP2";
  cardDiv.innerHTML = `
    <strong>${carte.symbol}</strong><br/>
    ${carte.num} <br/>
    ${carte.position}
  `;

  p2Container.appendChild(cardDiv);
}