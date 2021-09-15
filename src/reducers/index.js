import { combineReducers } from "redux";
import photos from "./photos";
import savedPhotos from "./savedPhotos";
import savePhotos from "./savePhotos";
import notify from "./notify";

const rootReducer = combineReducers({
    photos,
    savedPhotos,
    savePhotos,
    notify,
});

export default rootReducer;
