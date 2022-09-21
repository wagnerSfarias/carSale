import axios from "axios";

const api = axios.create({
    // baseURL:'http://192.168.0.101:1337/'
    // baseURL:'http://192.168.0.101:3000'
    baseURL:'https://api-salecar.herokuapp.com/'
    
})

export const urlImg = 'http://192.168.0.101:1337';

export default api;