import data from "../assets/data";
import {ADD_GROUP} from "./types";

export function groupsReducer(state = data, action) {
    switch (action.type) {
        case ADD_GROUP:
            return {...state, ...action.payload}
        default:
            return state
    }

}


