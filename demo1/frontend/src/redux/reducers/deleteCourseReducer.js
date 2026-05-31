import { DELETE_COURSE, DELETE_COURSE_ERROR, DELETE_COURSE_STARTING } from "../constants.js"

let initialState = {
    data=[],
    loading:false,
    loaded:false,
    error:null
}

function deleteCourseReducer(state=initialState,action) {
    switch(action.type){
        case DELETE_COURSE_STARTING: return {
            ...state,
            loading:true
        }
        case DELETE_COURSE: return {
            ...state,
            loading:false,
            loaded:true,
            data:action.payload.data.filter((data)=>{
                return data.id
            })
        }
        case DELETE_COURSE_ERROR : return {
            ...state,
            loaded:false,
            loading:false,
            error:action.payload
        }
        default : return state
    }
}
export default deleteCourseReducer