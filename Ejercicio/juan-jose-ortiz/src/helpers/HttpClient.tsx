import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

httpClient.interceptors.request.use(function (config) {
    return config;
});

export default httpClient;