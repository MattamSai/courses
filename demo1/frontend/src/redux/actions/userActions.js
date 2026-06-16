import { api } from "../../utils/api.js";
import {
    ADD_USER,
    ADD_USER_ERROR,
    ADD_USER_STARTING,
    DELETE_USER,
    DELETE_USER_ERROR,
    DELETE_USER_STARTING,
    GET_USERS,
    GET_USERS_ERROR,
    GET_USERS_STARTING,
    UPDATE_USER,
    UPDATE_USER_ERROR,
    UPDATE_USER_STARTING,
} from "../constants.js";

export const getUserStarting = () => {
    return { type: GET_USERS_STARTING };
};

export const getUserSuccess = (userData) => {
    return { type: GET_USERS, payload: userData };
};

export const getUserError = (err) => {
    return { type: GET_USERS_ERROR, payload: err };
};

export const getUser = () => {
    return async (dispatch) => {
        dispatch(getUserStarting());
        try {
            const response = await api.get("user/getUser");
            const {data} = response
            console.log('data',data)
            dispatch(getUserSuccess(data));
            return;
        } catch (error) {
            dispatch(getUserError(error.message));
        }
    };
};

export const addUserStarting = () => {
    return { type: ADD_USER_STARTING };
};

export const addUserSuccess = (userData) => {
    return { type: ADD_USER, payload: userData };
};

export const addUserError = (error) => {
    return { type: ADD_USER_ERROR, payload: error };
};

export const addUser = (userData) => {
    return async (dispatch) => {
        dispatch(addUserStarting());
        try {
            const response = await api.post("/user/addUser",userData);
            const { data } = response;
            dispatch(addUserSuccess(data));
            return;
        } catch (error) {
            dispatch(addUserError(error.message));
        }
    };
};

export const updateUserStarting = () => {
    return { type: UPDATE_USER_STARTING };
};

export const updateUserSuccess = (userData) => {
    return { type: UPDATE_USER, payload: userData };
};

export const updateUserError = (err) => {
    return { type: UPDATE_USER_ERROR, payload: err };
};

export const updateUser = (id, userData) => {
    return async (dispatch) => {
        dispatch(updateUserStarting());
        try {
            const response = await api.post(`/user/updateUser/${id}`,userData);
            const { data } = response;
            dispatch(updateUserSuccess(data));
            return;
        } catch (error) {
            dispatch(updateUserError(error.message));
        }
    };
};

export const deleteUserStarting = () => {
    return { type: DELETE_USER_STARTING };
};

export const deleteUserSuccess = (userData) => {
    return { type: DELETE_USER, payload: userData };
};

export const deleteUserError = (err) => {
    return { type: DELETE_USER_ERROR, payload: err };
};

export const deleteUser = (id) => {
    return async (dispatch) => {
        dispatch(deleteUserStarting());
        try {
            const response = await api.delete(`/user/deleteUser/${id}`);
            const { data } = response;
            dispatch(deleteUserSuccess(data));
        } catch (error) {
            dispatch(deleteUserError(error.message));
        }
    };
};
