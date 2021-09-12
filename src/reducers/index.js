import { combineReducers } from "redux";
import photos from "./photos";
import savedPhotos from "./savedPhotos";
import savePhotos from "./savePhotos";

const rootReducer = combineReducers({
    photos,
    savedPhotos,
    savePhotos
});

export default rootReducer;
