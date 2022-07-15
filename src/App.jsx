import React, {useState} from 'react';
import styles from './App.module.css';
import Group from "./groups/group/Group";
import SideMenuGroup from "./components/sideMenuGroup/SideMenuGroup";
import {useDispatch, useSelector} from "react-redux";
import {setCurrGroup, setAddGroup} from "./redux/actions";

// подключение данных
import data from './assets/data.js';

function App() {
    const dispatch = useDispatch();
    const [groups, setGroups] = useState(data)

    let currGroupId = useSelector(state => state.currGroupReducer.currGroupId) || data[0]?.idGroup;

    const addGroup = (newGroup) => {
        setGroups([newGroup, ...groups])
        // При добавлении первой группы она становится активной
        if(groups.length === 0) {
            dispatch(setCurrGroup(newGroup.idGroup))
        }
    }

    const deleteGroup = (groupId) => {
        // при удалении последней группы обнуляем state и выходим из функции
        if(groups.length === 1) {
            setGroups([])
            return
        }
        if(groupId === currGroupId) {
            // при удалении активной группы, активной становится первая группа
            dispatch(setCurrGroup(groups.filter(g => g.idGroup !== groupId)[0].idGroup))
            setGroups(groups.filter(g => g.idGroup !== groupId))
        }
        else{
            setGroups(groups.filter(g => g.idGroup !== groupId))
        }
    }

    const changePlaceGroup = (currGroup, group) => {
        setGroups(groups.map(g => (g.idGroup === group.idGroup)
            ? currGroup
            : (g.idGroup === currGroup.idGroup)
                ? group
                : g))
    }

    return (
        <div className={styles.app}>
            <SideMenuGroup listGroups={groups}
                           cbAddGroup={addGroup}
                           cbDeleteGroup={deleteGroup}
                           currGroupId={currGroupId}
                           changePlaceGroup={changePlaceGroup}/>
            <Group stateTasks={{groups, setGroups, currGroupId}}/>
        </div>
    );
}

export default App;
