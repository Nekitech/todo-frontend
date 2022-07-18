import data from "../assets/data";
import {ADD_GROUP, DELETE_GROUP, ADD_TASK, DELETE_TASK} from "./types";

export function groupsReducer(state = data, action) {
    switch (action.type) {
        case ADD_GROUP:
            return {...state, ...action.payload}

        case DELETE_GROUP:
            if (state.length === 1) {
                state = []
                return
            }
            if (action.payload.groupId === action.payload.currGroupId) {
                // при удалении активной группы, активной становится первая группа
                 store.getState().filter(g => g.idGroup !== action.payload.groupId)[0].idGroup
                return state.filter(g => g.idGroup !== action.payload.groupId)

            } else {
                setGroups(groups.filter(g => g.idGroup !== groupId))
            }
            return {...state, ...action.payload}

        case ADD_TASK:
            return state.map(g => g.idGroup === action.payload.currGroupId
                ? {...g, tasks: [...g.tasks, action.payload.newTask]}
                : g);

        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload);

        default:
            return state
    }

}


