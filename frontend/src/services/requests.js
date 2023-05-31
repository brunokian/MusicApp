import axios from 'axios'

const api = axios.create({
    baseURL:`http://localhost:8000`
})

export const requestData = async (endpoint) => {
    const { data } = await api.get(endpoint);
    return data;
};