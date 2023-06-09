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

    public async findOne() {
        try {
            const result = await this.service.findOne(this.req.body.email)
            return this.res.status(200).json(result)
        } catch (error) {
            return this.next(error)
        }
    }

    public async addSong() {
        try {
            const add = await this.service.addSong(this.req.body)
            return this.res.status(200).json(add)
        } catch (error) {
            return this.next(error)
        }
    }

    public async removeSong() {
        try {
            const remove = await this.service.removeSong(this.req.body)
            return this.res.status(200).json(remove)
        } catch (error) {
            return this.next(error)
        }
    }

    public async deleteAll() {
        try {
            await this.service.deleteAll()
            this.res.status(200).json({ message: 'documentos deletados com sucesso' })
        } catch (error) {
            this.res.status(500).json({error: 'erro ao deletar'})
        }
    }
}

export default FavoriteController;
