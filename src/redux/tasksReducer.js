import data from "../assets/data";

export function tasksReducer(state = data.map(group => group.tasks), action) {

    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload];
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }

}