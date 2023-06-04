import { IfavoriteRequest } from "../interfaces/Ifavorite";
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

    public async addSong(obj: IfavoriteRequest) {
        return await this.model.addSong(obj)
    }

    public async removeSong(obj: IfavoriteRequest) {
        return await this.model.removeSong(obj)
    }
}

export default FavoriteService;
