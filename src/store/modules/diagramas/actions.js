import axios from "axios";
import { API_VERSION, URI_BASE_API } from "../../../configs/api";

const RESOURCE = '/diagramas'

const actions = {
    getDiagramas({ commit }){
        return axios.get(`${API_VERSION}${RESOURCE}`)
            .then( response => commit('SET_DIAGRAMAS', response.data) )

    },
    getDiagrama({ commit },id){
        return axios.get(`${API_VERSION}${RESOURCE}/${id}`)
            .then( response => commit('SET_DIAGRAMA', response.data) )

    },
    createDiagrama({commit}, data){
        //console.log(data)
        return axios.post(`${API_VERSION}${RESOURCE}`, data)
            //.then( response => console.log(response.data) /*commit('SET_DIAGRAMA', response.data)*/ )
    },
    removeDiagrama({commit}, id){
        //console.log(data)
        return axios.delete(`${API_VERSION}${RESOURCE}/${id}`)
    },
    updateDiagrama({commit}, data){
        //console.log(data)
        return axios.put(`${API_VERSION}${RESOURCE}/${data.id}`, data.data)
            //.then( response => console.log(response.data) /*commit('SET_DIAGRAMA', response.data)*/ )
    }

}

export default actions
