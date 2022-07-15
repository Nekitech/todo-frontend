import {
    SET_CURR_GROUP,
    ADD_GROUP,
    DELETE_GROUP,
    CHANGE_PLACE_GROUP,
    ADD_TASK,
    DELETE_TASK,
    CHANGE_PLACE_TASK,
    CHANGE_STATUS_TASK
} from "./types";

export function setCurrGroup(idGroup) {
    return {
        type: SET_CURR_GROUP,
        payload: idGroup
    }
}

export function setAddGroup(newGroup) {
    return {
        type: ADD_GROUP,
        payload: newGroup
    }
}

export function setDeleteGroup(idGroup) {
    return {
        type: DELETE_GROUP,
        payload: idGroup
    }
}