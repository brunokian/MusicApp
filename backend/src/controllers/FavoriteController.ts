import FavoriteService from "../services/FavoriteService";
import { NextFunction, Request, Response } from "express";

class FavoriteController {
    private req: Request
    private res: Response
    private next: NextFunction
    private service: FavoriteService

    constructor(req: Request, res: Response, next: NextFunction) {
        this.req = req
        this.res = res
        this.next = next
        this.service = new FavoriteService()
    }

    public async create() {
        try {
            const newFavoriteList = await this.service.create(this.req.body.email)
            return this.res.status(201).json(newFavoriteList)
        } catch (error) {
            return this.res.status(401).json({ message: 'failed to create favorite list' })
        }
    }

    public async getAll() {
        try {
            const result = await this.service.getAll()
            return this.res.status(200).json(result)
        } catch (error) {
            return this.next(error)
        }
    }
}

export default FavoriteController;
