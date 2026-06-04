import { ADD_COURSE, ADD_COURSE_ERROR, ADD_COURSE_STARTING } from "../constants.js";
import { initialState } from "../initialState.js";

function addCourseReducer (state=initialState.courses,action) {
    console.log('actions',action.payload)
    switch(action.type){
        case ADD_COURSE_STARTING : return {
            ...state,
            loading:true
        }
        case ADD_COURSE : return {
            loading:false,
            loaded:true,
            data:action.payload.data.map((data)=>{
                return data
            })
        }
        case ADD_COURSE_ERROR : return {
            loading:false,
            loaded:false,
            error:action.payload
        }
        default : return state
    }
}

export default addCourseReducer