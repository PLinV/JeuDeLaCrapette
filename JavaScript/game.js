import Card from './card.js'; 

const symbols = ["pique", "coeur", "carreau", "tréfle"]
const positionPossible = [0, 11, 12, 13, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 51, 52, 53, 54]
export const deck = {}; 
const deckPosition = {};

for (const symbol of symbols) {
  for (let num = 1; num <= 13; num++) {
    deck[`${symbol}${num}`] = new Card(symbol, num); 
    deckPosition[`${symbol}${num}`] = positionPossible[0]; 
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.deckPositionPlayer1 = deckPosition;
    this.deckPositionPlayer2 = deckPosition;
  }

  afficher() {
    console.log(this.deckPositionPlayer1)
  }

  getPosition(nameCard, player) {
    if (player === this.player1) {
      console.log(this.deckPositionPlayer1[nameCard]);
      return this.deckPositionPlayer1[nameCard];
    } else if (player === this.player2) {
      console.log(this.deckPositionPlayer2[nameCard]);
      return this.deckPositionPlayer2[nameCard]; 
    } else {
      console.log("pas ce player")
      return 0
    }
  }

  changePosition(nameCard, player, position){
    if (!positionPossible.includes(position)) {
      console.log("Position invalide !");
      return 0;
    }

    if (player === this.player1) {
      this.deckPositionPlayer1[nameCard] = position;
    } else if (player === this.player2) {
      this.deckPositionPlayer2[nameCard] = position; 
    } else {
      console.log("Player invalide !")
      return 0
    }
  }
}

export {Game, deckPosition}; 

