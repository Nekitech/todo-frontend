import {SET_MENU_TASK_ACTIVE} from "./types";


export function menuTaskActiveReducer(state = {active: false}, action) {
    switch (action.type) {
        case SET_MENU_TASK_ACTIVE:
            return {activeMenuTask: action.payload.activeMenuTask}
        default:
            return state
    }
}