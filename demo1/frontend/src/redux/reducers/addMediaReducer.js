import { ADD_MEDIA, ADD_MEDIA_ERROR, ADD_MEDIA_STARTING } from "../constants.js";
import { initialState } from "../initialState.js";

function addMediaReducer(state=initialState.media,action){
    switch(action.type){
        case ADD_MEDIA_STARTING: return {
            ...state,
            loading:true
        }
        case ADD_MEDIA: return {
            ...state,
            loading:false,
            loaded:true,
            data:[...state.data,action.payload.data]
        }
        case ADD_MEDIA_ERROR : return {
            ...state,
            loading:false,
            loaded:false
        }
        default : return state
    }
}

export default addMediaReducer