import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import Group from "./groups/group/Group";
import SideMenuGroup from "./components/sideMenuGroup/SideMenuGroup";

// подключение данных

import {data} from './assets/data';

function App() {
    const [groups, setGroups] = useState(data)
    const [currGroupName, setCurrGroupName] = useState(groups[0]?.nameGroup || '');
    const [currGroupId, setCurrGroupId] = useState(groups[0]?.idGroup || '');

    const changeCurrGroup = (groupId) => {
        setCurrGroupId(groupId)
    }

    const addGroup = (newGroup) => {
        setGroups([newGroup, ...groups])
        if(groups.length === 0) {
            setCurrGroupId(newGroup.idGroup)
        }
    }

    const deleteGroup = (groupId) => {
        if(groups.length === 1) {
            setGroups([])
            return
        }
        if(groupId === currGroupId) {
            changeCurrGroup(groups.filter(g => g.idGroup !== groupId)[0].idGroup)
            setGroups(groups.filter(g => g.idGroup !== groupId))

        }
        else{
            setGroups(groups.filter(g => g.idGroup !== groupId))
        }
    }

    return (
        <div className={styles.app}>
            <SideMenuGroup listGroups={groups}
                           cbAddGroup={addGroup}
                           cbCurrGroup={changeCurrGroup}
                           cbDeleteGroup={deleteGroup}
                           currGroupName={currGroupName}
                           currGroupId={currGroupId}/>
            <Group stateTasks={{groups, setGroups, currGroupId}}/>
        </div>
    );
}

export default App;
