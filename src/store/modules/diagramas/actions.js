import axios from "axios";
import { API_VERSION, URI_BASE_API } from "../../../configs/api";

const RESOURCE = '/diagramas'

const actions = {
    getDiagramas({ commit }){
        //console.log(axios.defaults.baseURL)
        return axios.get(`${API_VERSION}${RESOURCE}`)
            .then( response => commit('SET_DIAGRAMA', response.data) )

    },
    createDiagrama({commit}, data){
        //console.log(data)
        return axios.post(`${API_VERSION}${RESOURCE}`, data)
            .then( response => console.log(response.data) /*commit('SET_DIAGRAMA', response.data)*/ )
    }
}

export default actions
