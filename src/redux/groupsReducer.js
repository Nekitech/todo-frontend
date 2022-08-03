import data from "../assets/data";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    ADD_GROUP,
    DELETE_GROUP,
    SET_CURR_GROUP,
    CHANGE_PLACE_GROUP,
    ADD_TASK,
    DELETE_TASK,
    CHANGE_STATUS_TASK,
    CHANGE_PLACE_TASK, SET_CURR_TASK, CHANGE_DESCR_TASK, CHANGE_TEXT_TASK, CHANGE_NAME_GROUP
} from "./types";
import axios from "../queries/axios.js";


const initialState = {
    currTaskId: '',
    currGroupId: data.data[0].idGroup,
    data: data.data
}

export function groupsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURR_GROUP:
            return {currGroupId: action.payload.idGroup, data: [...state.data]}

        case SET_CURR_TASK:
            return {...state, currTaskId: action.payload.idTask, data: [...state.data]}

        case ADD_GROUP:
            if (state.data.length === 0) {
                return {
                    currGroupId: action.payload.newGroup.idGroup,
                    data: [...state.data, action.payload.newGroup]
                }
            }
            return {...state, data: [...state.data, action.payload.newGroup]}

        case DELETE_GROUP:
            if (state.data.length === 1) {

                return {...state, data: []}
            }
            if (action.payload.groupId === state.currGroupId) {
                // при удалении активной группы, активной становится первая группа
                return {
                    currGroupId: state.data.find(g => g.idGroup !== action.payload.groupId).idGroup,
                    data: state.data.filter(g => g.idGroup !== action.payload.groupId)
                }

            } else {
                return {
                    ...state,
                    data: state.data.filter(g => g.idGroup !== action.payload.groupId)
                }
            }

        case CHANGE_PLACE_GROUP:
            return {
                ...state, data: state.data.map(g => (g.idGroup === action.payload.group.idGroup)
                    ? action.payload.currGroup
                    : (g.idGroup === action.payload.currGroup.idGroup)
                        ? action.payload.group
                        : g)
            }

        case CHANGE_NAME_GROUP:
            return {
                ...state, data: state.data.map(g => (g.idGroup === action.payload.groupId)
                    ? {...g, nameGroup: action.payload.newName}
                    : g)
            }

        case ADD_TASK:
            return {
                ...state, data: state.data.map(g => g.idGroup === state.currGroupId
                    ? {...g, tasks: [...g.tasks, action.payload.newTask]}
                    : g)
            }

        case DELETE_TASK:
            return {
                ...state, data: state.data.map(g => g.idGroup === state.currGroupId
                    ? {
                        ...g, tasks: [...g.tasks.splice(0, g.tasks.indexOf(action.payload.task)),
                            ...g.tasks.splice(g.tasks.indexOf(action.payload.task) + 1)]
                    }
                    : g)
            }

        case CHANGE_STATUS_TASK:
            return {
                ...state, data: state.data.map(g => g.idGroup === state.currGroupId
                    ? {
                        ...g, tasks: g.tasks.map(task => (task.id === action.payload.taskChanged.id)
                            ? {...task, status: action.payload.status} : task)
                    }
                    : g)
            }

        case CHANGE_PLACE_TASK:
            return {
                ...state, data: state.data.map(g => (g.idGroup === state.currGroupId)
                    ? {
                        ...g, tasks: g.tasks.map(t => (t.id === action.payload.task.id)
                            ? action.payload.currTask
                            : (t.id === action.payload.currTask.id)
                                ? action.payload.task : t)
                    }
                    : g)
            }
        case CHANGE_DESCR_TASK:
            return {
                ...state, data: state.data.map(g => (g.idGroup === action.payload.groupId)
                    ? {
                        ...g, tasks: g.tasks.map(t => (t.id === action.payload.taskId)
                            ? {...t, description: action.payload.newDescr} : t)
                    }
                    : g)
            }
        case CHANGE_TEXT_TASK:
            return {
                ...state, data: state.data.map(g => (g.idGroup === action.payload.groupId)
                    ? {
                        ...g, tasks: g.tasks.map(t => (t.id === action.payload.taskId)
                            ? {...t, text: action.payload.newText} : t)
                    }
                    : g)
            }
        default:
            return state

    }

}


