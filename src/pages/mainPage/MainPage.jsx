import React, {useEffect} from 'react';
import SideMenuGroup from "../../components/sideMenuGroup/SideMenuGroup";
import Group from "../../components/group/Group";
import MenuTask from "../../components/menuTask/MenuTask";
import styles from "./MainPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodo} from "../../redux/slices/todoSlice";
import {fetchUser} from "../../redux/slices/authSlice";
import {BeatLoader} from "react-spinners";

function MainPage(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.data.token);
    const isLodaing = useSelector(state => state.auth.status) === 'loading';

    useEffect(() => {
        dispatch(fetchUser())
        dispatch(fetchTodo({token}))

    }, []);


    return (

        (!isLodaing)
            ?
            (
                <div className={styles.mainPage}>
                    <SideMenuGroup/>
                    <Group/>
                    <MenuTask/>
                </div>
            )
            :
            (
                <BeatLoader size={450} color={"#fff"} className={styles.spinner}/>
            )

    );
};

export default MainPage;