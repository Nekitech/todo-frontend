import React from 'react';
import SideMenuGroup from "../../components/sideMenuGroup/SideMenuGroup";
import Group from "../../groups/group/Group";
import MenuTask from "../../components/menuTask/MenuTask";
import styles from "./MainPage.module.css";

function MainPage(props) {
    return (
        <div className={styles.app}>
            <SideMenuGroup/>
            <Group/>
            <MenuTask/>
        </div>


    );
}

export default MainPage;