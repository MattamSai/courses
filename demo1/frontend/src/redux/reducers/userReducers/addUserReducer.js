import {
    ADD_USER,
    ADD_USER_ERROR,
    ADD_USER_STARTING,
} from "../../constants.js";
import { initialState } from "../../initialState.js";

export const addUserReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case ADD_USER_STARTING:
            return {
                ...state,
                loading: true,
            };
        case ADD_USER:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [...state, action.payload.data],
            };
        case ADD_USER_ERROR:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload.err,
            };
        default:
            return state;
    }
};
