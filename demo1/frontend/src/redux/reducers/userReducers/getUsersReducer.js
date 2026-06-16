import { GET_USERS, GET_USERS_ERROR, GET_USERS_STARTING } from "../../constants.js";
import { initialState } from "../../initialState.js";

export const getUserReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case GET_USERS_STARTING:
            return { ...state, loading: true };
        case GET_USERS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload.data,
            };
        case GET_USERS_ERROR:
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
