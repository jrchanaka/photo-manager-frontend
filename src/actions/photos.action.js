import axios from "axios";
import { PHOTO_LIST, SAVED_PHOTO_LIST, SAVE_PHOTO_LIST, NOTIFY } from "./types";// Types for reducers

axios.defaults.baseURL = process.env.REACT_APP_API_URL;                 // Set API base url in .env file
axios.defaults.headers.common['Content-Type'] = "application/json";     // Content type is application/json

/**
 * Get all photos
 * @param userId 
 */
export function getPhotoList(userId) {
    return (dispatch) => {
        axios.get(`photos/${userId}`).then(function (response) {
            if (response.data) {
                dispatch({ type: PHOTO_LIST, payload: response.data });
            }
        }).catch(function (error) {
            dispatch({ type: NOTIFY, payload: { type: 'error', message: 'Cannot load the photo list' } });
        });
    };
}

/**
 * Save selected and arranged photos
 * @param userId 
 * @param photos 
 */
export function savePhotoList(userId, photos) {
    return (dispatch) => {
        axios.post(`photos/${userId}`, photos).then(function (response) {
            if (response.data) {
                dispatch({ type: SAVE_PHOTO_LIST, payload: { success: true } });
            }
        }).catch(function (error) {
            dispatch({ type: NOTIFY, payload: { type: 'error', message: 'Photo list saving failed' } });
        });
    };
}

/**
 * Get saved photos by user id
 * @param userId 
 */
export function getSavedPhotoList(userId) {
    return (dispatch) => {
        axios.get(`photos/saved-list/${userId}`).then(function (response) {
            if (response.data) {
                dispatch({ type: SAVED_PHOTO_LIST, payload: response.data });
            }
        }).catch(function (error) {
            dispatch({ type: NOTIFY, payload: { type: 'error', message: 'Cannot load your favorite photo list' } });
        });
    };
}