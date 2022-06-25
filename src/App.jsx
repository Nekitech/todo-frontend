import React, {useState} from 'react';
import styles from './App.module.css';
import Group from "./groups/group/Group";
import SideMenuGroup from "./components/sideMenuGroup/SideMenuGroup";

// подключение данных

import data from './assets/data.json';

function App() {
    const [currGroup, setCurrGroup] = useState(data["Мой день"]);
    let [groups, setGroups] = useState([{
        id: data["Мой день"].idGroup, nameGroup: data["Мой день"].nameGroup,
    }
    ])

    const [tasks, setTasks] = useState(currGroup.tasks)
    console.log(tasks)
    let addGroup = (newGroup) => {
        setGroups([newGroup, ...groups])
    }
  return (
    <div className={styles.app}>
        <SideMenuGroup listGroups={groups} cbAddGroup={addGroup}/>
        <Group stateTasks={{tasks, setTasks}}/>
    </div>
  );
}

export default App;
