import React from 'react';
import styles from "./GroupBtn.module.css";
import groupIcon from "../../img/iconGroup.svg";

function GroupBtn(props) {
    return (
        <div onClick={(e) => {
            props.cbCurrGroup(props.name)
            Array.from(props.listGroup.current.children).forEach(el => (el.classList.contains(`${styles.activeBtn}`) && el !== e.currentTarget)
                ? el.classList.remove(`${styles.activeBtn}`)
                : null
            )
            e.currentTarget.classList.add(`${styles.activeBtn}`)
        }} className={(props.name === 'Мой день') ? styles.groupBtn + " " + styles.activeBtn : styles.groupBtn}>
            <img className={styles.iconGroup} src={groupIcon} alt=""/>
            <p className={styles.groupName}>{props.name}</p>
        </div>
    );
}

export default GroupBtn;