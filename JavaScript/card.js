export default class Card {  
  constructor(symbol, num) {
    this.symbol = symbol;
    this.num = num; 
  }

  cardMove(newPosition){
    this.position = newPosition;
  }

  afficher() {
    console.log(`${this.num} de ${this.symbol}`);
  }
}