import {combineReducers} from 'redux';
import {currGroupReducer} from "./currGroupReducer";
import {groupsReducer} from "./groupsReducer";
import {tasksReducer} from "./tasksReducer";
export const rootReducer = combineReducers({
    currGroupReducer: currGroupReducer,
    groupsReducer: groupsReducer,
    tasksReducer: tasksReducer})