import { Model, Schema, models, model } from "mongoose";
import Ilogin from "../interfaces/Ilogin";

class LoginODM {
    private schema: Schema;
    private model: Model<Ilogin>;

    constructor() {
        this.schema = new Schema<Ilogin>({
            email: { type: String, required: true },
            password: { type: String, required: true },
            name: { type: String, required: true }
        })
        this.model = models.Login || model('Login', this.schema)
    }

    public async create(account: Ilogin): Promise<Ilogin | boolean> {
        const verify = await this.model.exists({ email: account.email })
        if (verify) {
            return false
        }
        return await this.model.create({ ...account })
    }

    public async findAll(): Promise<Ilogin[]> {
        return this.model.find({})
    }

    public async checkLogin(email: string, password: string): Promise<Ilogin | boolean> {
        const user = await this.model.findOne({ email: email, password: password })        
        if (user) {
            if (user.password === password) {
                return user
            }
            return false
        } else {
            return false
        }
    }

    public async deleteAll() {
        return this.model.deleteMany({})
    }
}

export default LoginODM