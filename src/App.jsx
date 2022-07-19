import React from 'react';
import styles from './App.module.css';
import Group from "./groups/group/Group";
import SideMenuGroup from "./components/sideMenuGroup/SideMenuGroup";
import MenuTask from "./components/menuTask/MenuTask";

function App() {
    return (
        <div className={styles.app}>
            <SideMenuGroup/>
            <Group/>
            <MenuTask/>
        </div>
    );
}

export default App;
