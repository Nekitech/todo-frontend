import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import groupsReducer from "./slices/todoSlice";
import menuTaskActiveReducer from "./slices/menuTaskActiveSlice";


// const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk)));
const store = configureStore({
    reducer: {
        groupsReducer: groupsReducer,
        menuTaskActiveReducer: menuTaskActiveReducer
    },
    middleware: [thunk]
});


export default store