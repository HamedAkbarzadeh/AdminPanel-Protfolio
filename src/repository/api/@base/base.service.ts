import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_URL + 'api/',
    timeout: 300000,
    url: 'api',
    headers: { 'Content-Type': 'application/json' }
});
export default api