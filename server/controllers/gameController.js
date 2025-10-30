import game from "../gameInstance.js";

export const getGame = (req, res) => {
  const getGame = game.findGame(); 
  res.JSON(getGame);
};