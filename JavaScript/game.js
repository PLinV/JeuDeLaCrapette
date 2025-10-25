import Deck from './deck.js';
import Stack from './stack.js';


export default class Game {
  board = [];

  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    
    for (let i = 0; i < 22; i++) {
      this.board.push(new Stack());
    }

    const deck1 = Deck.random(player1);
    const deck2 = Deck.random(player2);
    
    this.distributeGame(deck1);
    this.distributeGame(deck2);
  }
    
  distributeGame(deck) {
    this.board[0].push(deck.take(12));
    this.board[1].push(deck.take(36));
    for(let i = 3; i < 8; i++) {
      this.board[i].push(deck.take(1))
    }
  }

  afficher() {
    console.log(this.deck1);
  }
}