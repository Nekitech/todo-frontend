import React, {useState, useEffect} from 'react';
import styles from './App.module.css';
import Group from "./groups/group/Group";
import SideMenuGroup from "./components/sideMenuGroup/SideMenuGroup";

// подключение данных


function App() {
    const [groups, setGroups] = useState([
        {
        idGroup: 1,
        nameGroup: 'Мой день',
        tasks: [
        {
            id: 1,
            text: "Завтра сходить в магазин, купить хлеба",
            status: "needTodo"
        }
        ]
    },
    {
        idGroup: 2,
        nameGroup: "Моя жизнь",
        tasks: [
        {
            id: "1",
            text: "Завтра сходить в магазин, купить молока",
            status: "needTodo"
        }
        ]
    }
    ])
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
