import { GET_COURSE_ERROR, GET_COURSE_STARTING, GET_COURSES } from "../constants.js";

let initialState = {
    data:[],
    loading:false,
    loaded:false,
    error:null
}

function courseReducer (state=initialState,action){
    switch(action.type){
        case GET_COURSE_STARTING :
            return {
                ...state,
                loading:true
            }
        case GET_COURSES : return {
            ...state,
            loading:false,
            loaded:true,
            data:action.payload.data
        }
        case GET_COURSE_ERROR :
            return {
                ...state,
                loading:false,
                loaded:false,
                error:action.payload
        }
        default : return state
    }
}


export default courseReducer;