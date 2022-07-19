import {combineReducers} from 'redux';
import {groupsReducer} from "./groupsReducer";
import {menuTaskActiveReducer} from "./menuTaskActiveReducer";

export const rootReducer = combineReducers({
    groupsReducer: groupsReducer,
    menuTaskActiveReducer: menuTaskActiveReducer
});