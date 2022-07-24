import React from 'react';
import SideMenuGroup from "../../components/sideMenuGroup/SideMenuGroup";
import Group from "../../groups/group/Group";
import MenuTask from "../../components/menuTask/MenuTask";
import styles from "./MainPage.module.css";
import {Link} from "react-router-dom";

function MainPage(props) {
    return (
        <div className={styles.mainPage}>
            <SideMenuGroup/>
            <Group/>
            <MenuTask/>
            <Link to="/todo-react-nodejs"> Регистрация и авторизация </Link>
        </div>


    );
}

export default MainPage;