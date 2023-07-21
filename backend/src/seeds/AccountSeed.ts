import LoginODM from "../models/LoginODM";
// import FavoriteODM from "../models/FavoriteODM";


async function seed(): Promise<void> {
    try {
        const loginODM = await new LoginODM()
        // const favoriteODM = new FavoriteODM()

        const account = {
            email: 'teste@hotmail.com',
            password: 'senha123',
            name: 'teste'
          };

        // const favorite1 = {
        //     email: 'teste@hotmail.com',
        //     songInfo: [{
        //         title: "CASTLE OF GLASS",
        //         url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ed/c5/88/edc588aa-8d51-269a-999c-7a4093f78322/mzaf_17496324978451793251.plus.aac.p.m4a"
        //     }]
        // }

        await loginODM.create(account)
        console.log('seed criado com sucesso');

    } catch (error) {
        console.log(error);
    }
}

seed()