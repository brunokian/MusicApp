import { Model, Schema, models, model } from 'mongoose'
import { Ifavorite, IfavoriteRequest } from '../interfaces/Ifavorite'
import Ilogin from '../interfaces/Ilogin';
import LoginODM from './LoginODM';

class FavoriteODM {
    private schema: Schema;
    private model: Model<Ifavorite>

    constructor() {
        this.schema = new Schema<Ifavorite>({
            email: { type: String, required: true },
            favoriteList: { type: [{ title: String, url: String}], required: true }
        })
        this.model = models.Favorite || model('Favorite', this.schema)
    }

    public async create(email: string): Promise<Ifavorite | boolean> {
        const verify = await this.model.findOne({email: email})
        console.log(verify);
        
        if (verify) {
            return false
        } else {
            return await this.model.create({
                email: email,
                favoriteList: []
            })
        }
    }

    public async getAll(): Promise<Ifavorite[]> {
        return this.model.find({})
    }

    public async findOne(email: string): Promise<Ifavorite | null>{
        const favorite = await this.model.findOne({ email }).exec();
        return favorite
    }

    public async addSong(obj: IfavoriteRequest): Promise<any> {
        return this.model.findOneAndUpdate(
            { email: obj.email },
            { $addToSet: { favoriteList: obj.songInfo } },
            { new: true }
        )
    } 

    public async removeSong(obj: IfavoriteRequest): Promise<any> {
        return this.model.findOneAndUpdate(
            { email: obj.email },
            { $pull: { favoriteList: obj.songInfo } },
            { new: true }
        )
    }

    public async deleteAll() {
        return this.model.deleteMany({})
    }
}

export default FavoriteODM;

// Usuario.findOneAndUpdate(
//     { _id: id }, // Condição para encontrar o usuário pelo ID
//     { $addToSet: { favoritos: musica } }, // Adiciona a música à lista de favoritos usando o operador $addToSet
//     { new: true } // Retorna o usuário atualizado após a operação
//   )

//   Usuario.findOneAndUpdate(
//     { _id: id }, // Condição para encontrar o usuário pelo ID
//     { $pull: { favoritos: musicaId } }, // Remove a música da lista de favoritos usando o operador $pull
//     { new: true } // Retorna o usuário atualizado após a operação
//   )