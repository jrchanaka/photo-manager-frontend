import { NOTIFY } from "../actions/types";

export default function (state = null, action) {
    switch (action.type) {
        case NOTIFY:
            return action.payload;
        default:
            return state;
    }
}