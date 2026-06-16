import { DELETE_COURSE_ERROR, DELETE_MEDIA, DELETE_MEDIA_STARTING } from "../constants.js";
import { initialState } from "../initialState.js";

function deleteMediaReducer (state= initialState.media,action) {
    switch(action.type){
        case DELETE_MEDIA_STARTING: return {
            ...state,
            loading:true
        }
        case DELETE_MEDIA: return {
            ...state,
            loading:false,
            loaded:true,
            data:state.data.filter((data)=> data.id != action.payload.data.id)
        }
        case DELETE_COURSE_ERROR:return {
            ...state,
            loading:false,
            loaded:false
        }
        default : return state
    }
}
export default deleteMediaReducer