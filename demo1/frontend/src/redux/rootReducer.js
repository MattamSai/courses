import { combineReducers } from "redux";
import addCourseReducer from "./reducers/addCourseReducer.js";
import courseReducer from "./reducers/courseReducer.js";

export const reducer = combineReducers({
    getCourse:courseReducer,
    addCourses:addCourseReducer
})