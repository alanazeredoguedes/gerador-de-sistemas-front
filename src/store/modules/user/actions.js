import axios from "axios";
import { API_VERSION, URI_BASE_API } from "../../../configs/api";

const RESOURCE = '/user'

const actions = {
    login({commit}, {email, password}){
        //console.log(data)
        return axios.post(`${API_VERSION}${RESOURCE}/login`, {email, password})
            .then( (response) => {
                console.log(response.data.token)
                //commit('SET_DIAGRAMA', response.data)

            })
    },
}

export default actions
