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
    
    this.distributeGame(deck1, 0);
    this.distributeGame(deck2, 1);
  }
    
  distributeGame(deck, player) {
    this.board[0 + player].push(...deck.take(12));
    this.board[2 + player].push(...deck.take(36));
    for(let i = 4; i < 16; i+=2) {
      this.board[i+ player].push(...deck.take(1))
    }
  }

  afficher() {
    console.log(this.board);
  }
}