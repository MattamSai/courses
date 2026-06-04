import { UPDATE_MEDIA, UPDATE_MEDIA_ERROR, UPDATE_MEDIA_STARTING } from "../constants.js";
import { initialState } from "../initialState.js";

function updateMediaReducer (state=initialState.media,action){
    switch(action.type){
        case UPDATE_MEDIA_STARTING: return {
            ...state,
            loading:true
        }
        case UPDATE_MEDIA:return {
            ...state,
            loading:false,
            loaded:true,
            data:action.payload.data.map((data)=>{ data.id === action.payload.data.id ? action.payload.data : data})
        }
        case UPDATE_MEDIA_ERROR : return {
            ...state,
            loading:false,
            loaded:false
        }
        default : return state
    }
}

export default updateMediaReducer