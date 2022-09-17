import axios from "axios";

const api = axios.create({
    baseURL:'http://192.168.0.101:1337/'
})

export const urlImg = 'http://192.168.0.101:1337';

export default api;