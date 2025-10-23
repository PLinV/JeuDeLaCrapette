import Card from './card.js'; 

const symbols = ["pique", "coeur", "carreau", "tréfle"]

const deck = {}; 

for (const symbol of symbols) {
  for (let num = 1; num <= 13; num++) {
    deck[`${symbol}${num}`] = new Card(symbol, num); 
  }
}

export default deck; 