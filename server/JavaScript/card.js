export default class Card {
  constructor(symbol, num, tags) {
    this.symbol = symbol;
    this.num = num;
    this.tags = tags;
  }
  static symbols = ['pique', 'coeur', 'carreau', 'tréfle'];

  discover() {
    this.tags[1] = true
  }

  cover() {
    this.tags[1] = false
  }
  
}