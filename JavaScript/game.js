import Card from './card.js'; 

const symbols = ["pique", "coeur", "carreau", "tréfle"]
const positionPossible = [0, 1, 11, 12, 13, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 51, 52, 53, 54]

const deck = {}; 

for (const symbol of symbols) {
  for (let num = 1; num <= 13; num++) {
    const cardName = `${symbol}${num}`;
    deck[cardName] = new Card(symbol, num); 
  }
}


class Game {  
  constructor(player1, player2, board = {}) {
    this.player1 = player1;
    this.player2 = player2;
    this.deckP1 = {...deck};
    this.deckP2 = {...deck};
    this.board = board
    
    this.deckP1 = Object.fromEntries(
      Object.entries(this.deckP1).map(([key, value]) => {
        const newKey = "P1_" + key;
        return [newKey, value];
      })
    );

    this.deckP2 = Object.fromEntries(
      Object.entries(this.deckP2).map(([key, value]) => {
        const newKey = "P2_" + key;
        return [newKey, value];
      })
    );
    
    for(let index = 0; index <= 22; index++){
      board[positionPossible[index]] = [];
    }

    const keyDeckP1 = Object.keys(this.deckP1);
    const keyDeckP2 = Object.keys(this.deckP2);

    for (let element in keyDeckP1) {
      this.board[0].push([keyDeckP1[element], 0])
    }

    for(let element in keyDeckP2) {
      this.board[1].push([keyDeckP2[element], 0])
    }

    this.randomNumber(12, 36, positionPossible[0]);
    this.randomNumber(22, 36, positionPossible[1]);
    this.randomNumber(13, 12, positionPossible[0]);
    this.randomNumber(23, 12, positionPossible[1]);
    this.randomNumber(31, 1, positionPossible[0]);
    this.randomNumber(32, 1, positionPossible[0]);
    this.randomNumber(33, 1, positionPossible[0]);
    this.randomNumber(34, 1, positionPossible[0]);
    this.randomNumber(35, 1, positionPossible[1]);
    this.randomNumber(36, 1, positionPossible[1]);
    this.randomNumber(37, 1, positionPossible[1]);
    this.randomNumber(38, 1, positionPossible[1]);

  }

  afficher() {
    console.log(this.board)
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

  randomNumber(position, elementCount, playerKey) {
    const source = this.board[playerKey];
    
    for (let i = 0; i < elementCount; i++) {
      const indexRandom = Math.floor(Math.random() * source.length)
      const element = source[indexRandom];
      
      this.board[position].push(element);
      source.splice(indexRandom, 1);
    }
  } 
}

export {Game, deck}; 