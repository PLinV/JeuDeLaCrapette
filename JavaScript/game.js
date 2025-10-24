import Card from './card.js'; 

const symbols = ["pique", "coeur", "carreau", "tréfle"]
const positionPossible = [0, 11, 12, 13, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 51, 52, 53, 54]

const deck = {}; 

for (const symbol of symbols) {
  for (let num = 1; num <= 13; num++) {
    const cardName = `${symbol}${num}`;
    deck[cardName] = new Card(symbol, num); 
  }
}

class Game {  
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.deckP1 = {...deck};
    this.deckP2 = {...deck};
  } 

  afficher() {
    console.log(this.deckP1["pique4"].position)
  }



  getPosition(nameCard, player) {
    if (player === this.player1) {
      console.log(this.deckP1[nameCard].position);
      return this.deckP1[nameCard].position;
    } else if (player === this.player2) {
      console.log(this.deckP2[nameCard].position);
      return this.deckP2[nameCard].position; 
    } else {
      console.log("pas ce player")
      return 0
    }
  }

  changePosition(nameCard, player, newPosition){
    if (!positionPossible.includes(position)) {
      console.log("Position invalide !");
      return 0;
    }

    if (player === this.player1) {
      this.deckP1[nameCard].position = newPosition;

    } else if (player === this.player2) {
      this.deckP2[nameCard].position = newPosition; 
    } else {
      console.log("Player invalide !")
      return 0
    }


  }
}

export {Game, deck}; 