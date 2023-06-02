import { Router } from "express";
import LoginController from "../controllers/LoginController";

const loginRoutes = Router()

loginRoutes.post('/login', (req, res, next) => new LoginController(req, res, next).create())

loginRoutes.get('/login', (req, res, next) => new LoginController(req, res, next).findAll())

loginRoutes.post('/checkLogin', (req, res, next) => new LoginController(req, res, next).checkLogin())

export default loginRoutes;