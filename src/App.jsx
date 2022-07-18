import React from 'react';
import styles from './App.module.css';
import Group from "./groups/group/Group";
import SideMenuGroup from "./components/sideMenuGroup/SideMenuGroup";

function App() {

    return (
        <div className={styles.app}>
            <SideMenuGroup/>
            <Group/>
        </div>
    );
}

export default App;
