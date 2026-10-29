import axios from 'axios';

export const httpClient = axios.create({
    baseURL: process.env.API_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})

httpClient.interceptors.request.use((config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    if(config.data instanceof FormData){
        delete config.headers['Content-Type']
    }

    return config
})