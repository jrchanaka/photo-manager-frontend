import axios from "axios";
import { PHOTO_LIST, SAVED_PHOTO_LIST, SAVE_PHOTO_LIST } from "./types";// Types for reducers

axios.defaults.baseURL = process.env.REACT_APP_API_URL;                 // Set API base url in .env file
axios.defaults.headers.common['Content-Type'] = "application/json";     // Content type is application/json

/**
 * Get all photos
 * @param userId 
 */
export function getPhotoList(userId) {
    return function (dispatch) {
        const url = `photos/${userId}`;

        axios.get(`${url}`).then(function (response) {
            if (response.data) {
                dispatch({ type: PHOTO_LIST, payload: response.data });
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
}

/**
 * Save selected and arranged photos
 * @param userId 
 * @param photos 
 */
export function savePhotoList(userId, photos) {
    return function (dispatch) {
        const url = `photos/${userId}`;

        axios.post(`${url}`, photos).then(function (response) {
            if (response.data) {
                dispatch({ type: SAVE_PHOTO_LIST, payload: { success: true } });
            }
        }).catch(function (error) {
            console.log(error);
            dispatch({ type: SAVE_PHOTO_LIST, payload: { success: false } });
        });
    };
}

/**
 * Get saved photos by user id
 * @param userId 
 */
export function getSavedPhotoList(userId) {
    return function (dispatch) {
        const url = `photos/saved-list/${userId}`;

        axios.get(`${url}`).then(function (response) {
            if (response.data) {
                dispatch({ type: SAVED_PHOTO_LIST, payload: response.data });
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
}