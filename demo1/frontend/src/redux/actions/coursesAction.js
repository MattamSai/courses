import { api } from "../../utils/api.js";
import { ADD_COURSE_ERROR, ADD_COURSE_STARTING, ADD_COURSES, GET_COURSE_ERROR, GET_COURSE_STARTING, GET_COURSES } from "../constants.js";

const getCoursesStarting = () => {
    return {
        type: GET_COURSE_STARTING,
    };
};

const getCoursesSuccess = (data)=>{
    return {
        type:GET_COURSES,
        payload:data
    };
};

const getCoursesError = (err)=>{
    return {
        type:GET_COURSE_ERROR,
        payload:err
    };
};

export const getCourses = (data) => {
    return async (dispatch) => {
        dispatch(getCoursesStarting());
        try {
            api.get(`/courses/getCourse`).then((response) => {
                const { data } = response;
                dispatch(getCoursesSuccess(data));
            }).catch((error) => {
                console.log(error.message);
                dispatch(getCoursesError(error.message));
            });
        } catch (error) {
            console.log(error.message);
            dispatch(getCoursesError(error.message));
        }
    };
};

function addCourseStarting () {
    return {
        type:ADD_COURSE_STARTING
    }
}

function addCoursesSucccess (data) {
    return {
        type : ADD_COURSES,
        payload:data
    }
}

function addCoursesError (err) {
    return {
        type : ADD_COURSE_ERROR,
        payload:err
    }
}

export const addCourses = (courseData)=>{
    return async (dispatch)=>{
        dispatch(addCourseStarting())
        try {
            const response = await api.post('/courses/addCourse',courseData)
            console.log('response',response)
            const {data} = response
            dispatch(addCoursesSucccess(data))
        } catch (error) {
            console.log('error',error.message)
            dispatch(addCoursesError(error))
        }
    }
}