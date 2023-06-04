import { Router } from "express";
import FavoriteController from "../controllers/FavoriteController";

const favoriteRoutes = Router()

favoriteRoutes.post('/favorites', (req, res, next) => new FavoriteController(req, res, next).create())

favoriteRoutes.get('/favorites', (req, res, next) => new FavoriteController(req, res, next).getAll()) 

export default favoriteRoutes;
