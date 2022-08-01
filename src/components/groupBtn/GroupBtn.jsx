import React, {useRef} from 'react';
import styles from "./GroupBtn.module.css";
import bucket from '../../assets/img/bucket.svg'
import {useDispatch, useSelector} from "react-redux";
import {setChangeNameGroup, setCurrGroup, setDeleteGroup, setMenuTaskActive} from "../../redux/actions";
import pencil from '../../assets/img/pencil.svg'

function GroupBtn({draggable, onDragEnd, onDragStart, onDragLeave, onDragOver, onDrop, ...props}) {
    const dispatch = useDispatch();
    const activeMenuTask = useSelector(state => state.menuTaskActiveReducer.activeMenuTask);
    const currGroupId = useSelector(state => state.groupsReducer.currGroupId);
    const nameGroup = useRef(null)

    const handleClickOutside = e => {
        if (nameGroup?.current === e.target) {
            return null
        }
        nameGroup.current?.setAttribute('disabled', 'disabled')
    }
    document.addEventListener('click', handleClickOutside);

    const checkActiveBtn = (e) => {
        const groupText = document.querySelectorAll(`.${styles.groupName}`)
        Array.from(groupText).forEach(el => (el.classList.contains(`${styles.activeBtn}`)
            && el !== e.currentTarget)
            ? el.classList.remove(`${styles.activeBtn}`)
            : null
        )
        e.currentTarget.classList.add(`${styles.activeBtn}`)
    }
    return (
        <div
            draggable={draggable}
            onDragStart={onDragStart}
            onDragLeave={onDragLeave}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDrop={onDrop}
            className={styles.groupBtn}>
            <img onClick={(e) => {
                nameGroup.current.removeAttribute('disabled')
                e.stopPropagation()
            }}
                 className={styles.iconGroupEdit} src={pencil} alt=""/>
            <input ref={nameGroup}
                   value={props.name}
                   onClick={(e) => {
                       if (activeMenuTask && props.idGroup !== currGroupId) {
                           dispatch(setMenuTaskActive(!activeMenuTask))
                       }
                       dispatch(setCurrGroup(props.idGroup))
                       checkActiveBtn(e)
                   }}
                   onChange={(e) => {
                       console.log(nameGroup.current.value)
                       dispatch(setChangeNameGroup(props.idGroup, nameGroup.current.value))
                   }}
                   className={(props.idGroup === currGroupId)
                       ? styles.groupName + " " + styles.activeBtn
                       : styles.groupName}/>
            <img onClick={() => {
                if (activeMenuTask && props.idGroup === currGroupId) {
                    dispatch(setMenuTaskActive(!activeMenuTask))
                }
                dispatch(setDeleteGroup(props.idGroup))
            }} className={styles.iconGroupDelete} src={bucket} alt=""/>
        </div>
    );
}

export default GroupBtn;