import axios from 'axios'

const api = axios.create({
    baseURL:`http://localhost:8000`,
    validateStatus: () => true // por padrão, o axios recebe respostas de status de valor entre 200 e 300. Este parametro irá fazer com que o axios receba as respostas independentemente do status
})

export const requestData = async (endpoint) => {
    const { data } = await api.get(endpoint);
    return data;
};

export const checkLogin = async (email, password) => {
    const result = await api.post('/checkLogin', {
            email: email,
            password: password
        })
    return result.data
}

export const reqCreateAccount = async (email, password, username) => {
    const result = await api.post('/login', {
        email: email,
        password: password,
        name: username
    })
    return result.data
}

export const reqCreateFavoriteList = async (email) => {
    const result = await api.post('/favorites', { email: email })

    return result.data
}

export const reqAddFavorite = async (email, songLink) => {
    const result = await api.post ('/favorites/add', {
        email: email,
        songLink: songLink
    })
}

export const reqDeleteFavorite = async (email, songLink) => {
    const result = await api.post ('/favorites/remove', {
        email: email,
        songLink: songLink
    })
}

export const reqFindOne = async (email) => {
    const result = await api.post ('/favorites/find', {
        email: email
    })
    return result.data.favoriteList
}