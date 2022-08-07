import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const fetchAuth = createAsyncThunk('auth/fetch',
    async (params) => {
        const {data} = await axios.post('/auth/login', params);
        console.log(data);

        return data;
});

export const fetchUser = createAsyncThunk('auth/fetchUser',
    async () => {
        const {data} = await axios.get('/auth/user');
        console.log(data);
        return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister',
    async (params) => {
        const {data} = await axios.post('/auth/reg', params);
        console.log(data);
        return data;
});

const authFetch = createSlice({
    name: 'auth',
    initialState: {
        status: '',
        data: {}
    },
    reducers: {
        setLogout(state) {
            state.data = {};
            window.localStorage.removeItem('token');
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state, ) => {
            state.status = 'loading';
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchAuth.rejected]: (state, ) => {
            state.data = {};
            state.status = 'error';
        },

        [fetchUser.pending]: (state, ) => {
            state.status = 'loading';
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchUser.rejected]: (state, ) => {
            state.data = {};
            state.status = 'error';
        },

        [fetchRegister.pending]: (state, ) => {
            state.status = 'loading';
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchRegister.rejected]: (state, ) => {
            state.data = {};
            state.status = 'error';
        },
    }

});

export const {setLogout} = authFetch.actions;
export default authFetch.reducer;

export const isAuth = (state) => Boolean(state.auth.data.token);

