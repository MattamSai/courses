import { UPDATE_COURSE, UPDATE_COURSE_ERROR, UPDATE_COURSE_STARTING } from "../constants.js"
import { initialState } from "../initialState.js"

function updateCourseReducer (state=initialState.courses,action) {
    console.log('Reducer action',action)
    switch(action.type){
        case UPDATE_COURSE_STARTING: return {
            ...state,
            loading:true
        }
        case UPDATE_COURSE : return {
            loading:false,
            loaded:true,
            data:action.payload
        }
        case UPDATE_COURSE_ERROR : return {
            loading:false,
            loaded:false,
            error:action.payload
        }
        default : return state
    }
}

export default updateCourseReducer
