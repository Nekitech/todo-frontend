import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import groupsReducer from "./slices/todoSlice";
import menuTaskActiveReducer from "./slices/menuTaskActiveSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
    reducer: {
        groupsReducer: groupsReducer,
        menuTaskActiveReducer: menuTaskActiveReducer,
        auth: authReducer
    },
    middleware: [thunk]
});


export default store