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

    public async create(account: Ilogin): Promise<Ilogin> {
        return this.model.create({ ...account })
    }

    public async findAll(): Promise<Ilogin[]> {
        return this.model.find({})
    }
}

export default LoginODM