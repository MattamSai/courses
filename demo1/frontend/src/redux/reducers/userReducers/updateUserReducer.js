import {
    UPDATE_COURSE_ERROR,
    UPDATE_USER,
    UPDATE_USER_STARTING,
} from "../../constants.js";
import { initialState } from "../../initialState.js";

export const updateUserReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case UPDATE_USER_STARTING:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_USER:
            return {
                ...state,
                loading: false,
                loading: true,
                data: state.data.map((data) => {
                    data.id === action.payload.data.id
                        ? action.payload.data
                        : data;
                }),
            };
        case UPDATE_COURSE_ERROR:
            return {
                ...state,
                loading: true,
                loaded: true,
                error: action.payload.err,
            };
        default:
            return state;
    }
};
