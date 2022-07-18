import {combineReducers} from 'redux';
import {currGroupReducer} from "./currGroupReducer";
import {groupsReducer} from "./groupsReducer";

export const rootReducer = combineReducers({
    currGroupReducer: currGroupReducer,
    groupsReducer: groupsReducer})