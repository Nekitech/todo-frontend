import React, {useEffect} from 'react';
import SideMenuGroup from "../../components/sideMenuGroup/SideMenuGroup";
import Group from "../../components/group/Group";
import MenuTask from "../../components/menuTask/MenuTask";
import styles from "./MainPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodo} from "../../redux/slices/todoSlice";
import {fetchUser} from "../../redux/slices/authSlice";

function MainPage(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.data.token);


    useEffect(() => {
        dispatch(fetchUser())
        dispatch(fetchTodo({token}))

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