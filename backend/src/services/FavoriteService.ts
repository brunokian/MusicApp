import FavoriteODM from "../models/FavoriteODM";

class FavoriteService {
    private model: FavoriteODM

    constructor() {
        this.model = new FavoriteODM()
    }

    public async create(email: string) {
        return await this.model.create(email)
    }

    public async getAll() {
        return await this.model.getAll()
    }
}

export default FavoriteService;
