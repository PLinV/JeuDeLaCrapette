export default class Card {  
  constructor(symbol, num, position=0) {
    this.symbol = symbol;
    this.num = num; 
    this.position = position;
  }

  cardMove(newPosition){
    this.position = newPosition;
  }

  afficher() {
    console.log(`${this.num} de ${this.symbol}`);
  }
}