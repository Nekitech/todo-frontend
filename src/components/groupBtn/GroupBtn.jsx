import React from 'react';
import styles from "./GroupBtn.module.css";
import groupIcon from "../../img/iconGroup.svg";

function GroupBtn(props) {
    return (
        <div className={styles.group}>
            <img className={styles.iconGroup} src={groupIcon} alt=""/>
            <p className={styles.groupName}>{props.name}</p>
        </div>
    );
}

export default GroupBtn;