import React, {useRef} from 'react';
import styles from "./GroupBtn.module.css";
import groupIcon from "../../img/iconGroup.svg";
import bucket from '../../img/bucket.svg'

function GroupBtn(props) {

    const checkActiveBtn = (e) => {
        const groupText = document.querySelectorAll(`.${styles.groupName}`)
        Array.from(groupText).forEach(el => (el.classList.contains(`${styles.activeBtn}`) && el !== e.currentTarget)
            ? el.classList.remove(`${styles.activeBtn}`)
            : null
        )
        e.currentTarget.classList.add(`${styles.activeBtn}`)
    }
    return (
        <div className={styles.groupBtn}>
            <img className={styles.iconGroup} src={groupIcon} alt=""/>
            <p onClick={(e) => {
                props.cbCurrGroup(props.idGroup)
                checkActiveBtn(e)
            }}
               className={(props.idGroup === props.currGroupId)
                ? styles.groupName + " " + styles.activeBtn
                : styles.groupName}>{props.name}</p>
            <img onClick={() => {
                props.cbDeleteGroup(props.idGroup )
            }} className={styles.iconGroupDelete} src={bucket} alt=""/>
        </div>
    );
}

export default GroupBtn;