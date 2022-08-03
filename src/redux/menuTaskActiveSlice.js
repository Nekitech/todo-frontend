import {createSlice} from "@reduxjs/toolkit";

const menuTaskActiveSlice = createSlice({
    name: 'menuTaskActive',
    initialState: {
        active: false
    },
    reducers: {
        setMenuTaskActive(state, action) {
            state.active = action.payload.activeMenuTask;
        }
    }
});

export const {setMenuTaskActive} = menuTaskActiveSlice.actions;

export default menuTaskActiveSlice.reducer;