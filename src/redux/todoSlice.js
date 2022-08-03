import data from "../assets/data";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "../queries/axios";

export const fetchGroups = createAsyncThunk(
    'groups/fetchGroups',
    async (url, config) => {
        const groups = await axios.get('/groups',
            {
                headers: {'Authorization': "bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmU5NGZjYTJmMDgxNjVmZjQzNDQwMzkiLCJpYXQiOjE2NTk0NTc0OTAsImV4cCI6MTY2MDA2MjI5MH0.IJrQJp_sQUahn2PXb01P-j1gfvOq7StyewhatPPyOf4'}
            });

        const tasks = await axios.get('/tasks', {
            params: {
                groupId: `${groups.data[0]?._id}`
            },

            headers: {
                'Authorization':
                    "bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmU5NGZjYTJmMDgxNjVmZjQzNDQwMzkiLCJpYXQiOjE2NTk0NTc0OTAsImV4cCI6MTY2MDA2MjI5MH0.IJrQJp_sQUahn2PXb01P-j1gfvOq7StyewhatPPyOf4'
            }
        });

        groups.data[0].tasks = tasks.data;

        console.log(groups.data);
        return groups.data

    })

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        currTaskId: '',
        currGroupId: data.data[0].idGroup,
        data: data.data
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
                state.currGroupId = action.payload.newGroup.idGroup;
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
                    state.currGroupId = state.data.find(g => g.idGroup !== action.payload.groupId).idGroup;
                    state.data = state.data.filter(g => g.idGroup !== action.payload.groupId);
                } else {
                    state.data = state.data.filter(g => g.idGroup !== action.payload.groupId);
                }
            }
        },
        setChangePlaceGroup(state, action) {
            state.data = state.data.map(g => (g.idGroup === action.payload.group.idGroup)
                ? action.payload.currGroup
                : (g.idGroup === action.payload.currGroup.idGroup)
                    ? action.payload.group
                    : g);
        },
        setChangeNameGroup(state, action) {
            const findGroup = state.data.find(g => g.idGroup === action.payload.groupId);
            findGroup.nameGroup = action.payload.newName;
        },
        setAddTask(state, action) {
            const findGroup = state.data.find(g => g.idGroup === state.currGroupId);
            findGroup.tasks.push(action.payload.newTask);
        },
        setDeleteTask(state, action) {
            const findGroup = state.data.find(g => g.idGroup === state.currGroupId);
            findGroup.tasks.splice(findGroup.tasks.indexOf(action.payload.task), 1);
        },
        setChangeStatusTask(state, action) {
            const findGroup = state.data.find(g => g.idGroup === state.currGroupId);
            const findTask = findGroup.tasks.find(t => t.id === action.payload.taskChanged.id);
            findTask.status = action.payload.status;
        },
        setChangePlaceTask(state, action) {
            const findGroup = state.data.find(g => g.idGroup === state.currGroupId);
            findGroup.tasks = findGroup.tasks.map(t => (t.id === action.payload.task.id)
                ? action.payload.currTask
                : (t.id === action.payload.currTask.id)
                    ? action.payload.task: t)
        },
        setChangeDescrTask(state, action) {
            const findGroup = state.data.find(g => g.idGroup === action.payload.groupId);
            const findTask = findGroup.tasks.find(t => t.id === action.payload.taskId);
            findTask.description = action.payload.newDescr;
        },
        setChangeTextTask(state, action) {
            const findGroup = state.data.find(g => g.idGroup === action.payload.groupId);
            const findTask = findGroup.tasks.find(t => t.id === action.payload.taskId);
            findTask.text = action.payload.newText;
        }
    }
});

export const {setCurrGroup,
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
    setChangeTextTask} = todoSlice.actions;

export default todoSlice.reducer;