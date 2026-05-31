import { combineReducers } from "redux";
import addCourseReducer from "./reducers/addCourseReducer.js";
import courseReducer from "./reducers/courseReducer.js";
import updateCourseReducer from "./reducers/updateCourseReducer.js";

export const reducer = combineReducers({
    getCourse:courseReducer,
    addCourses:addCourseReducer,
    updateCourse:updateCourseReducer
})