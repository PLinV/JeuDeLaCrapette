import fs from 'fs'

const gameFile = './data/game.json'

export const readGame = () => {
  const data = fs.readFileSync(gameFile);
  return JSON.parse(data); 
}

export const writeGame = (game) => {
  fs.writeFileSync(gameFile, JSON.stringify(game, null, 2));
};