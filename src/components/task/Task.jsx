import React from 'react';
import styles from './Task.module.css'
import failImg from '../../img/failImg.svg'
import bucket from '../../img/bucket.svg'
import radioActive from '../../img/radioBtnActive.svg'
import radioUnactive from '../../img/radioBtnUnactive.svg'
import {useDispatch, useSelector} from "react-redux";
import {setChangeStatusTask, setCurrTask, setDeleteTask, setMenuTaskActive} from "../../redux/actions";

function Task({draggable, onDragEnd, onDragStart, onDragLeave, onDragOver, onDrop, ...props}) {
    const dispatch = useDispatch();
    const activeMenuTask = useSelector(state => state.menuTaskActiveReducer.activeMenuTask);
    const currTaskId = useSelector(state => state.groupsReducer.currTaskId);
    return (
        <div
            draggable={draggable}
            onDragStart={onDragStart}
            onDragLeave={onDragLeave}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDrop={onDrop}
            className={styles.task}>
            <div className={styles.task__container}>
                <img className={styles.task__iconRadio} src={(props.task.status === 'needTodo') ? radioUnactive : (props.task.status === 'complete') ? radioActive : ''} onClick={(e) => {
                    if(props.task.status === 'needTodo') {
                        dispatch(setChangeStatusTask(props.task, 'complete'))
                    }
                    else if(props.task.status === 'complete') {
                        dispatch(setChangeStatusTask(props.task, 'needTodo'))
                    }
                }} alt=""/>
                <p
                   onClick={(e) => {
                       if(activeMenuTask) {
                           dispatch(setCurrTask(props.task.id))

                       }
                       else {
                           dispatch(setMenuTaskActive(!activeMenuTask))
                           dispatch(setCurrTask(props.task.id))
                       }
                   }}
                   className={styles.task__text} style={(props.task.status === 'complete')
                    ? {textDecoration:'line-through'}
                    : {textDecoration:'none'}}>
                    {props.task.text}</p>
                {
                    (props.task.status === 'needTodo')
                    ?
                    (
                        <img onClick={(e) => {
                            if(props.task.status === 'needTodo') {
                                dispatch(setChangeStatusTask(props.task , 'uncomplete'))
                            }
                            else {
                                dispatch(setChangeStatusTask(props.task, 'needTodo'))
                            }
                        }} className={styles.task__fail} src={failImg} alt="icon"/>
                    )
                    :
                    null
                }
                <img onClick={() => {
                    if(activeMenuTask && props.task.id === currTaskId) {
                        dispatch(setMenuTaskActive(!activeMenuTask))
                    }
                    dispatch(setDeleteTask(props.task))

                }}
                     className={styles.task__bucket} src={bucket} alt="icon"/>
            </div>
            {
                (props.task.status === 'complete' || props.task.status === 'uncomplete')
                ? (<div className={styles.task__darkFon}></div>)
                : null
            }

        </div>
    );
}

export default Task;