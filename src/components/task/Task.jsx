import React from 'react';
import styles from './Task.module.css'
import failImg from '../../assets/img/failImg.svg'
import bucket from '../../assets/img/bucket.svg'
import radioActive from '../../assets/img/radioBtnActive.svg'
import radioUnactive from '../../assets/img/radioBtnUnactive.svg'
import {useDispatch, useSelector} from "react-redux";
import {setChangeStatusTask, setCurrTask, setDeleteTask} from "../../redux/slices/todoSlice";
import {setMenuTaskActive} from "../../redux/slices/menuTaskActiveSlice";

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
            <div
                onClick={(e) => {
                    if(e.target?.classList.contains(styles.task__container)
                    || e.target?.classList.contains(styles.task__text)) {
                        if(activeMenuTask) {
                            dispatch(setCurrTask({idTask: props.task._id}))
                        }
                        else {
                            dispatch(setMenuTaskActive({activeMenuTask: !activeMenuTask}))
                            dispatch(setCurrTask({idTask: props.task._id}))
                        }

                    }}}
                className={styles.task__container}>
                <img className={styles.task__iconRadio} src={(props.task.status === 'needTodo') ? radioUnactive : (props.task.status === 'complete') ? radioActive : ''} onClick={(e) => {
                    if(props.task.status === 'needTodo') {
                        dispatch(setChangeStatusTask({taskChanged: props.task, status: 'complete'}))
                    }
                    else if(props.task.status === 'complete') {
                        dispatch(setChangeStatusTask({taskChanged: props.task, status: 'needTodo'}))
                    }
                }} alt=""/>
                <p

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
                                dispatch(setChangeStatusTask({taskChanged: props.task, status: 'uncomplete'}))
                            }
                            else {
                                dispatch(setChangeStatusTask({taskChanged: props.task, status: 'needTodo'}))
                            }
                        }} className={styles.task__fail} src={failImg} alt="icon"/>
                    )
                    :
                    null
                }
                <img onClick={() => {
                    if(activeMenuTask && props.task._id === currTaskId) {
                        dispatch(setMenuTaskActive({activeMenuTask: !activeMenuTask}))
                    }
                    dispatch(setDeleteTask({task: props.task}))

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