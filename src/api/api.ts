import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5292/api', // Replace with your API's base URL
    headers: {
        'Content-Type': 'application/json',
        // Additional headers can be added here
    },
});

export default api;
