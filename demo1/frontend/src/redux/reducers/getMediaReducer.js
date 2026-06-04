import { GET_MEDIA, GET_MEDIA_ERROR, GET_MEDIA_STARTING } from "../constants.js";
import { initialState } from "../initialState.js";


function getMediaReducer(state=initialState.media,action){
    switch(action.type){
        case GET_MEDIA_STARTING: return {
            ...state,
            loading:true
        }
        case GET_MEDIA: return {
            ...state,
            data:action.payload.data,
            loading:false,
            loaded:true
        }
        case GET_MEDIA_ERROR : return {
            ...state,
            loading:false,
            loaded:false
        }
        default : return state
    }
}

export default getMediaReducer