import {
    SET_CURR_GROUP,
    ADD_GROUP,
    DELETE_GROUP,
    CHANGE_PLACE_GROUP,
    ADD_TASK,
    DELETE_TASK,
    CHANGE_PLACE_TASK,
    CHANGE_STATUS_TASK,
    SET_CURR_TASK,
    SET_MENU_TASK_ACTIVE,
    CHANGE_DESCR_TASK, CHANGE_TEXT_TASK
} from "./types";

export function setCurrGroup(idGroup) {
    return {
        type: SET_CURR_GROUP,
        payload: {idGroup}
    }
}

export function setAddGroup(newGroup) {
    return {
        type: ADD_GROUP,
        payload: {newGroup}
    }
}

export function setDeleteGroup(groupId) {
    return {
        type: DELETE_GROUP,
        payload: {groupId}
    }
}

export function setChangePlaceGroup(currGroup, group) {
    return {
        type: CHANGE_PLACE_GROUP,
        payload: {currGroup, group}
    }
}

export function setAddTask(newTask) {
    return {
        type: ADD_TASK,
        payload: {newTask}
    }
}

export function setDeleteTask(task) {
    return {
        type: DELETE_TASK,
        payload: {task}
    }
}

export function setChangeStatusTask(taskChanged, status) {
    return {
        type: CHANGE_STATUS_TASK,
        payload: {taskChanged, status}
    }
}

export function setChangePlaceTask(currTask, task) {
    return {
        type: CHANGE_PLACE_TASK,
        payload: {currTask, task}
    }
}

export function setCurrTask(idTask) {
    return {
        type: SET_CURR_TASK,
        payload: {idTask}
    }
}

export function setMenuTaskActive(activeMenuTask) {
    return {
        type: SET_MENU_TASK_ACTIVE,
        payload: {activeMenuTask}
    }
}

export function setChangeDescrTask(newDescr, taskId, groupId) {
    return {
        type: CHANGE_DESCR_TASK,
        payload: {newDescr, taskId, groupId}
    }
}

export function setChangeTextTask(newText, taskId, groupId) {
    return {
        type: CHANGE_TEXT_TASK,
        payload: {newText, taskId, groupId}
    }
}