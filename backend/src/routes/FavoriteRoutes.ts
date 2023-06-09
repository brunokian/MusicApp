import { Router } from "express";
import FavoriteController from "../controllers/FavoriteController";

const favoriteRoutes = Router()

favoriteRoutes.post('/favorites', (req, res, next) => new FavoriteController(req, res, next).create())

favoriteRoutes.get('/favorites', (req, res, next) => new FavoriteController(req, res, next).getAll())

favoriteRoutes.post('/favorites/find', (req, res, next) => new FavoriteController(req, res, next).findOne()) 

favoriteRoutes.post('/favorites/add', (req, res, next) => new FavoriteController(req, res, next).addSong()) 

favoriteRoutes.post('/favorites/remove', (req, res, next) => new FavoriteController(req, res, next).removeSong()) 

favoriteRoutes.delete('/favorites', (req, res, next) => new FavoriteController(req, res, next).deleteAll()) 

export default favoriteRoutes;
