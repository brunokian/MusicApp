import { NextFunction, Request, Response } from "express";
import LoginService from "../services/LoginService";

class LoginController {
    private req: Request;
    private res: Response;
    private next: NextFunction;
    private service: LoginService;

    constructor(req: Request, res: Response, next: NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new LoginService();
    }

    public async create() {
        try {
            const newAccount = await this.service.create(this.req.body);
            if (newAccount) {
                return this.res.status(201).json(newAccount)
            } else {
                return this.res.status(401).json({ message: 'este email já existe' })
            }

        } catch (err) {
            this.next(err)
        }
    }

    public async findAll() {
        try {
            const list = await this.service.findAll()
            return this.res.status(404).json(list)
        } catch (err) {
            this.next(err)
        }
    }

    public async checkLogin() {
        const {email, password} = this.req.body
        try {
            const validLogin = await this.service.checkLogin(email, password)
            // console.log(validLogin);
            
            if (validLogin) {
                return this.res.status(200).json({ message: true })
            } else {                
                return this.res.status(200).json({ message: false })
            }
        } catch (err) {
            this.next(err)
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

export default LoginController;