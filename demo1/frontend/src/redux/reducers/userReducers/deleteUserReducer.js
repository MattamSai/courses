import {
    DELETE_USER,
    DELETE_USER_ERROR,
    DELETE_USER_STARTING,
} from "../../constants.js";
import { initialState } from "../../initialState.js";

export const deleteUserReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case DELETE_USER_STARTING:
            return {
                ...state,
                loading: true,
            };
        case DELETE_USER:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: state.data.filter((data) => {
                    data.id != action.payload.data.id;
                }),
            };
        case DELETE_USER_ERROR:
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
