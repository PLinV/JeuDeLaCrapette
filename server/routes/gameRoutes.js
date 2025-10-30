import { Router } from "express";
import { getGame } from "../controllers/gameController.js";

const gameRoutes = Router();

gameRoutes.get('/', getGame);

export default gameRoutes; 