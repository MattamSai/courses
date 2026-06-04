import { combineReducers } from "redux";
import addCourseReducer from "./reducers/addCourseReducer.js";
import courseReducer from "./reducers/courseReducer.js";
import updateCourseReducer from "./reducers/updateCourseReducer.js";
import deleteCourseReducer from "./reducers/deleteCourseReducer.js";
import getMediaReducer from "./reducers/getMediaReducer.js";
import addMediaReducer from "./reducers/addMediaReducer.js";
import updateMediaReducer from "./reducers/updateMediaReducer.js";
import deleteMediaReducer from "./reducers/deleteMediaReducer.js";

export const reducer = combineReducers({
    getCourse:courseReducer,
    addCourses:addCourseReducer,
    updateCourse:updateCourseReducer,
    deleteCourse:deleteCourseReducer,
    getMedia:getMediaReducer,
    addMedia:addMediaReducer,
    updateMedia:updateMediaReducer,
    deleteMedia:deleteMediaReducer
})