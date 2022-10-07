import axios from 'axios'
import { URI_BASE_API, API_VERSION, TOKEN_NAME } from '../configs/api'
import interceptors from "../services/interceptors";
import sessionStorage from "../services/session-storage";

axios.defaults.baseURL = `${URI_BASE_API}/${API_VERSION}`

axios.interceptors.request.use((config) =>{
    console.log(config);

    const token = sessionStorage.get(TOKEN_NAME)
    if(token)
        config.headers.Authorization = `Bearer ${token}`;

    return config;
},(error)=>{
    return Promise.reject(error);
})

/*
axios.interceptors.response.use((config) =>{
    console.log(config);
    alert('ds')
    // const token = sessionStorage.get(TOKEN_NAME)
    // if(token)
    //     config.headers.Authorization = `Bearer ${token}`;

    return config;
},(error)=>{
    return Promise.reject(error);
})
*/



export { axios }


