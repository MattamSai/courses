import { api } from "../../utils/api.js";
import {
    ADD_MEDIA,
    ADD_MEDIA_ERROR,
    ADD_MEDIA_STARTING,
    DELETE_MEDIA,
    DELETE_MEDIA_ERROR,
    DELETE_MEDIA_STARTING,
    GET_MEDIA,
    GET_MEDIA_ERROR,
    GET_MEDIA_STARTING,
    UPDATE_MEDIA,
    UPDATE_MEDIA_ERROR,
    UPDATE_MEDIA_STARTING,
} from "../constants.js";

function getMediaStarting() {
    return {
        type: GET_MEDIA_STARTING,
    };
}

function getMediaSuccess(data) {
    return {
        type: GET_MEDIA,
        payload: data,
    };
}

function getMediaError(err) {
    return {
        type: GET_MEDIA_ERROR,
        payload: err,
    };
}

export const getMedia = (mediaData) => {
    return async (dispatch) => {
        dispatch(getMediaStarting());
        try {
            const response = await api.get("/media/getAllMedia");
            const { data } = response;
            dispatch(getMediaSuccess(data));
        } catch (error) {
            dispatch(getMediaError(error.message));
        }
    };
};

function addMediaStarting() {
    return {
        type: ADD_MEDIA_STARTING,
    };
}

function addMediaSuccess(data) {
    return {
        type: ADD_MEDIA,
        payload: data,
    };
}

function addMediaError(err) {
    return {
        type: ADD_MEDIA_ERROR,
        payload: err,
    };
}

export const addMedia = (mediaData) => {
    console.log('data in reducer',mediaData)
    return async (dispatch) => {
        dispatch(addMediaStarting());
        try {
            const formData = new FormData()
            formData.append("media",mediaData)
            const response = await api.post("/media/addMedia",formData);

            const { data } = response;
            dispatch(addMediaSuccess(data));
        } catch (error) {
            dispatch(addMediaError(error.message));
        }
    };
};

function updateMediaStarting() {
    return {
        type: UPDATE_MEDIA_STARTING,
    };
}

function updateMediaSuccess(data) {
    return {
        type: UPDATE_MEDIA,
        payload: data,
    };
}

function updateMediaError(err) {
    return {
        type: UPDATE_MEDIA_ERROR,
        payload: err,
    };
}

export const updateMedia = (mediaData) => {
    return async (dispatch) => {
        dispatch(updateMediaStarting());
        try {
            const response = await api.get("/media/updateMedia/:id");
            const { data } = response;
            dispatch(updateMedia(data));
        } catch (error) {
            dispatch(updateMediaError(error.message));
        }
    };
};

function deleteMediaStarting() {
    return {
        type: DELETE_MEDIA_STARTING,
    };
}

function deleteMediaSuccess(data) {
    return {
        type: DELETE_MEDIA,
        payload: data,
    };
}

function deleteMediaError(err) {
    return {
        type: DELETE_MEDIA_ERROR,
        payload: err,
    };
}

export const deleteMedia = (mediaData) => {
    return async (dispatch) => {
        dispatch(deleteMediaStarting());
        try {
            const response = await api.get("/media/deleteMedia/:id");
            const { data } = response;
            dispatch(deleteMedia(data));
        } catch (error) {
            dispatch(deleteMediaError(error.message));
        }
    };
};
