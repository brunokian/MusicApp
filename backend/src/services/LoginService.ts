import Ilogin from "../interfaces/Ilogin";
import LoginODM from "../models/LoginODM";

class LoginService {
    public async create(account: Ilogin) {
        const loginODM = new LoginODM()
        const newAccount = await loginODM.create(account)

        return newAccount
    }

    public async findAll() {
        const loginODM = new LoginODM()
        const list = await loginODM.findAll()
        return list
    }
}

export default LoginService