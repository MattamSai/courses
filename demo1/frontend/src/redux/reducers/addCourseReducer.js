import { ADD_COURSE, ADD_COURSE_ERROR, ADD_COURSE_STARTING } from "../constants.js";

let initialState = {
    data:[],
    loading:false,
    loaded:false,
    error:null
}

function addCourseReducer (state=initialState,action) {
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