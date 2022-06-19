import React, {useState} from 'react';
import styles from './Task.module.css'
import radioBtnUnactive from '../../img/radioBtnUnactive.svg'
import failImg from '../../img/failImg.svg'
import bucket from '../../img/bucket.svg'

function Task(props) {
    return (
        <div className={styles.task}>
            <div className={styles.task__container}>
                <img className={styles.task__iconRadioActive} src={radioBtnUnactive} alt="icon"/>
                <p className={styles.task__text}>{props.text}</p>
                <img className={styles.task__fail} src={failImg} alt="icon"/>
                <img className={styles.task__bucket} src={bucket} alt="icon"/>
            </div>
        </div>
    );
}

export default Task;