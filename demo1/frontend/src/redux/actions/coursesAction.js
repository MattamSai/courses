import { api } from "../../utils/api.js";
import {
    ADD_COURSE,
    ADD_COURSE_ERROR,
    ADD_COURSE_STARTING,
    DELETE_COURSE,
    DELETE_COURSE_ERROR,
    DELETE_COURSE_STARTING,
    GET_COURSE_ERROR,
    GET_COURSE_STARTING,
    GET_COURSES,
    UPDATE_COURSE,
    UPDATE_COURSE_ERROR,
    UPDATE_COURSE_STARTING,
} from "../constants.js";

const getCoursesStarting = () => {
    return {
        type: GET_COURSE_STARTING,
    };
};

const getCoursesSuccess = (data) => {
    return {
        type: GET_COURSES,
        payload: data,
    };
};

const getCoursesError = (err) => {
    return {
        type: GET_COURSE_ERROR,
        payload: err,
    };
};

export const getCourses = (data) => {
    return async (dispatch) => {
        dispatch(getCoursesStarting());
        try {
            api.get(`/courses/getCourse`)
                .then((response) => {
                    const { data } = response;
                    console.log(data);
                    dispatch(getCoursesSuccess(data));
                })
                .catch((error) => {
                    console.log(error.message);
                    dispatch(getCoursesError(error.message));
                });
        } catch (error) {
            console.log(error.message);
            dispatch(getCoursesError(error.message));
        }
    };
};

function addCourseStarting() {
    return {
        type: ADD_COURSE_STARTING,
    };
}

function addCourseSucccess(data) {
    return {
        type: ADD_COURSE,
        payload: data,
    };
}

function addCourseError(err) {
    return {
        type: ADD_COURSE_ERROR,
        payload: err,
    };
}

export const addCourse = (courseData) => {
    return async (dispatch) => {
        dispatch(addCourseStarting());
        try {
            const response = await api.post("/courses/addCourse", courseData);
            console.log("response", response);
            const { data } = response;
            dispatch(addCoursesSucccess(data));
        } catch (error) {
            console.log("error", error.message);
            dispatch(addCoursesError(error));
        }
    };
};

function updateCourseStarting() {
    return {
        type: UPDATE_COURSE_STARTING,
    };
}

function updateCourseSuccess(data) {
    return {
        type: UPDATE_COURSE,
        payload: data,
    };
}

function updateCourseError(err) {
    return {
        type: UPDATE_COURSE_ERROR,
        payload: err,
    };
}

export const updateCourse = (courseData) => {
    console.log("courseData", courseData);
    return async (dispatch) => {
        dispatch(updateCourseStarting());
        try {
            const response = await api.post(
                "/courses/updateCourse",
                courseData,
            );
            console.log("response", response);
            const { data } = response;
            dispatch(updateCourseSuccess(data));
            return;
        } catch (error) {
            dispatch(updateCourseError(error.message));
        }
    };
};

function deleteCourseStarting() {
    return {
        type: DELETE_COURSE_STARTING,
    };
}

function deleteCourseSuccess(courseData) {
    return {
        type: DELETE_COURSE,
        payload: courseData,
    };
}

function deleteCourseError(err) {
    return {
        type: DELETE_COURSE_ERROR,
        payload: err,
    };
}

export const deleteCourse = (id) => {
    return async (dispatch) => {
        dispatch(deleteCourseStarting());
        try {
            const response = await api.delete(`/courses/deleteCourse/${id}`);
            const { data } = response;
            dispatch(deleteCourseSuccess(data));
        } catch (error) {
            dispatch(deleteCourseError(error.message));
        }
    };
};
