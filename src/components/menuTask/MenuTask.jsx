import React from 'react';
import styles from './MenuTask.module.css';
import {useDispatch, useSelector} from "react-redux";
import close from '../../img/close_menuTask.svg';
import {setMenuTaskActive} from "../../redux/actions";

function MenuTask(props) {
    const activeMenuTask = useSelector(state => state.menuTaskActiveReducer.activeMenuTask);
    console.log(activeMenuTask)
    const dispatch = useDispatch();
    return (
        <div className={(activeMenuTask)
            ? styles.menuTask + ' ' + styles.activeMenu
            : styles.menuTask}>
            <div className={styles.menuTask__container}>
                <textarea className={styles.menuTask__editText}></textarea>
            </div>
            <img onClick={() => {
                dispatch(setMenuTaskActive(!activeMenuTask))
            }} src={close} className={styles.menuTask__close} alt={''}/>
        </div>
    );
}

export default MenuTask;