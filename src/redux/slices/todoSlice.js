import data from "../../assets/data";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "../../queries/axios";

export const fetchTodo = createAsyncThunk(
    'groups/fetchGroups',
    async () => {
        const groups = await axios.get('/groups',
            {
                headers: {'Authorization': "bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmU5NGZjYTJmMDgxNjVmZjQzNDQwMzkiLCJpYXQiOjE2NTk0NTc0OTAsImV4cCI6MTY2MDA2MjI5MH0.IJrQJp_sQUahn2PXb01P-j1gfvOq7StyewhatPPyOf4'}
            });
        console.log(groups.data);
        return groups.data;

    })

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        status: '',
        currTaskId: '',
        currGroupId: '',
        data: []
    },
    reducers: {
        setCurrGroup(state, action) {
            state.currGroupId = action.payload.idGroup;
        },
        setCurrTask(state, action) {
            state.currTaskId = action.payload.idTask;
        },
        setAddGroup(state, action) {
            if (state.data.length === 0) {
                state.currGroupId = action.payload.newGroup._id;
                state.data.push(action.payload.newGroup);
            } else {
                state.data.push(action.payload.newGroup);
            }
        },
        setDeleteGroup(state, action) {
            if (state.data.length === 1) {
                state.data = [];
            } else {
                if (action.payload.groupId === state.currGroupId) {
                    state.currGroupId = state.data.find(g => g._id !== action.payload.groupId)._id;
                    state.data = state.data.filter(g => g._id !== action.payload.groupId);
                } else {
                    state.data = state.data.filter(g => g._id !== action.payload.groupId);
                }
            }
        },
        setChangePlaceGroup(state, action) {
            state.data = state.data.map(g => (g._id === action.payload.group._id)
                ? action.payload.currGroup
                : (g._id === action.payload.currGroup._id)
                    ? action.payload.group
                    : g);
        },
        setChangeNameGroup(state, action) {
            const findGroup = state.data.find(g => g._id === action.payload.groupId);
            findGroup.nameGroup = action.payload.newName;
        },
        setAddTask(state, action) {
            const findGroup = state.data.find(g => g._id === state.currGroupId);
            findGroup.tasks.push(action.payload.newTask);
        },
        setDeleteTask(state, action) {
            const findGroup = state.data.find(g => g._id === state.currGroupId);
            findGroup.tasks.splice(findGroup.tasks.indexOf(action.payload.task), 1);
        },
        setChangeStatusTask(state, action) {
            const findGroup = state.data.find(g => g._id === state.currGroupId);
            const findTask = findGroup.tasks.find(t => t._id === action.payload.taskChanged._id);
            findTask.status = action.payload.status;
        },
        setChangePlaceTask(state, action) {
            const findGroup = state.data.find(g => g._id === state.currGroupId);
            findGroup.tasks = findGroup.tasks.map(t => (t._id === action.payload.task._id)
                ? action.payload.currTask
                : (t._id === action.payload.currTask._id)
                    ? action.payload.task : t)
        },
        setChangeDescrTask(state, action) {
            const findGroup = state.data.find(g => g._id === action.payload.groupId);
            const findTask = findGroup.tasks.find(t => t._id === action.payload.taskId);
            findTask.description = action.payload.newDescr;
        },
        setChangeTextTask(state, action) {
            const findGroup = state.data.find(g => g._id === action.payload.groupId);
            const findTask = findGroup.tasks.find(t => t._id === action.payload.taskId);
            findTask.text = action.payload.newText;
        }
    },
    extraReducers: {
        [fetchTodo.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchTodo.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.currGroupId = action.payload[0]._id;
            state.status = 'loaded';
        },
        [fetchTodo.rejected]: (state) => {
            state.data = []
            state.status = 'error';
        }
    }
});

export const {
    setCurrGroup,
    setCurrTask,
    setAddGroup,
    setDeleteGroup,
    setChangePlaceGroup,
    setChangeNameGroup,
    setAddTask,
    setDeleteTask,
    setChangeStatusTask,
    setChangePlaceTask,
    setChangeDescrTask,
    setChangeTextTask
} = todoSlice.actions;

export default todoSlice.reducer;