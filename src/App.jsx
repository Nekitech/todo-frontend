import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import Group from "./groups/group/Group";
import SideMenuGroup from "./components/sideMenuGroup/SideMenuGroup";

// подключение данных

import {data} from './assets/data';

function App() {
    const [groups, setGroups] = useState(data)
    const [currGroupName, setCurrGroupName] = useState(groups[0].nameGroup);

    const changeCurrGroup = (groupName) => {
        setCurrGroupName(groupName)
    }

    const addGroup = (newGroup) => {
        setGroups([newGroup, ...groups])
    }

    return (
        <div className={styles.app}>
            <SideMenuGroup listGroups={groups} cbAddGroup={addGroup} cbCurrGroup={changeCurrGroup}/>
            <Group stateTasks={{groups, setGroups, currGroupName}}/>
        </div>
    );
}

export default App;
