import {combineReducers} from 'redux';
import {groupsReducer} from "./groupsReducer";

export const rootReducer = combineReducers({
    groupsReducer: groupsReducer})