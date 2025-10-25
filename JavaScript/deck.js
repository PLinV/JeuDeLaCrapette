import Card from './card.js'

export default class Deck {
  constructor(tag) {
    this.cards = [];

    for (const symbol of Card.symbols) {
      for (let num = 1; num <= 13; num++) {
        this.cards.push(new Card(symbol, num, tag, false));
      }
    }
  }

  shuffle() {
    const res = []
    for (let i = 0; i < 52; i++) {
      const indexRandom = Math.floor(Math.random() * this.cards.length);
      const element = this.cards[indexRandom];
      
      res.push(element);
      this.cards.splice(indexRandom, 1);
    }  
    this.cards = res;
  }

  take(n) {
    return this.cards.slice (0, n - 1);
  }

  static random(tag) {
    const deck = new Deck(tag);
    deck.shuffle();
    return deck;
  }
}