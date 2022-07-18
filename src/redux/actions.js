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

export function setDeleteGroup(groupId, currGroupId) {
    return {
        type: DELETE_GROUP,
        payload: {groupId, currGroupId}
    }
}

export function setChangePlaceGroup(currId, groupId) {
    return {
        type: CHANGE_PLACE_GROUP,
        payload: {currId, groupId}
    }
}

export function setAddTask(newTask, currGroupId) {
    return {
        type: ADD_TASK,
        payload: {newTask, currGroupId}
    }
}

export function setDeleteTask(newTask) {
    return {
        type: DELETE_TASK,
        payload: newTask
    }
}

export function setChangeStatusTask(taskChanged) {
    return {
        type: CHANGE_STATUS_TASK,
        payload: taskChanged
    }
}

export function setChangePlaceTask(currTask, task) {
    return {
        type: CHANGE_PLACE_TASK,
        payload: {currTask, task}
    }
}

