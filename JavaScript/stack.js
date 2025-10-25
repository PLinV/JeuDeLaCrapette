export default class Stack {
  constructor(cards = []) {
    this.cards = cards;
  }

  push(...cards) {
    this.cards.push(...cards);
  }
  pop() {
    elementPop = this.cards[-1]; 
    this.cards.pop();
    return 
  }
}