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
