import {createSlice} from "@reduxjs/toolkit";

const menuTaskActiveSlice = createSlice({
    name: 'menuTaskActive',
    initialState: {
        activeMenuTask: false
    },
    reducers: {
        setMenuTaskActive(state, action) {
            state.activeMenuTask = action.payload.activeMenuTask;
        }
    }
});

export const {setMenuTaskActive} = menuTaskActiveSlice.actions;

export default menuTaskActiveSlice.reducer;