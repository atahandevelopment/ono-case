import axios from "axios";


const api = axios.create({
    baseURL: 'https://onox.cloud/backend',
});

export default api;