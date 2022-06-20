import React, {useState} from 'react';
import styles from './Task.module.css'
import failImg from '../../img/failImg.svg'
import bucket from '../../img/bucket.svg'
import radioActive from '../../img/radioBtnActive.svg'
import radioUnactive from '../../img/radioBtnUnactive.svg'

function Task(props) {
    return (
        <div className={styles.task}>
            <div className={styles.task__container}>
                <img className={styles.task__iconRadio} src={(props.task.status === 'needTodo') ? radioUnactive : (props.task.status === 'complete') ? radioActive : ''} onClick={(e) => {
                    if(props.task.status === 'needTodo') {
                        props.changeTask(props.task.status = 'complete')
                    }
                    else if(props.task.status === 'complete') {
                        props.changeTask(props.task.status = 'needTodo')
                    }

                }} alt=""/>
                <p className={styles.task__text} style={(props.task.status === 'complete')
                    ? {textDecoration:'line-through'}
                    : {textDecoration:'none'}}>{props.task.text}</p>
                {
                    (props.task.status === 'needTodo')
                    ?
                    (
                        <img onClick={(e) => {
                            if(props.task.status === 'needTodo') {
                                props.changeTask(props.task.status = 'uncomplete')
                            }
                            else {
                                props.changeTask(props.task.status = 'needTodo')
                            }
                        }} className={styles.task__fail} src={failImg} alt="icon"/>
                    )
                    :
                    null

                }

                <img onClick={() => props.removeTask(props.task)} className={styles.task__bucket} src={bucket} alt="icon"/>
            </div>
        </div>
    );
}

export default Task;