import { deck, deckPosition, Game } from './game.js';
import Card from './card.js'; 

const game1 = new Game("paulin", "anna")
const asDePique = deck["pique1"];
console.log(asDePique);
game1.afficher();
game1.getPosition("pique4", "paulin");
game1.changePosition("pique4", "paulin", 11);
game1.getPosition("pique4", "paulin");

asDePique.afficher(); 