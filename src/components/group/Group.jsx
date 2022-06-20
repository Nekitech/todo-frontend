import React from 'react';
import styles from "./Group.module.css";
import groupIcon from "../../img/iconGroup.svg";

function Group(props) {
    return (
        <div className={styles.group}>
            <img className={styles.iconGroup} src={groupIcon} alt=""/>
            <p className={styles.groupName}>{props.name}</p>
        </div>
    );
}

export default Group;