import { SAVED_PHOTO_LIST } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case SAVED_PHOTO_LIST:
            return action.payload;
        default:
            return state;
    }
}