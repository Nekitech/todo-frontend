import React, {useEffect} from 'react';
import SideMenuGroup from "../../components/sideMenuGroup/SideMenuGroup";
import Group from "../../components/group/Group";
import MenuTask from "../../components/menuTask/MenuTask";
import styles from "./MainPage.module.css";
import {useDispatch} from "react-redux";
import {fetchGroups} from "../../redux/todoSlice";


function MainPage(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGroups())
    }, []);


    return (
        <div className={styles.mainPage}>
            <SideMenuGroup/>
            <Group/>
            <MenuTask/>
        </div>


    );
}

export default MainPage;