import React from 'react';
import styles from './AddTask.module.css'
import cross from '../../img/cross.svg'
import alarm from '../../img/alarm.svg'

function AddTask(props) {
    return (
        <div className={styles.addTask}>
            <div className={styles.addTask__container}>
                <img className={styles.addTask__cross} src={cross} alt="icon"/>
                <div className={styles.addTask__areaText} contentEditable={true} placeholder={'Новая задача'}></div>
                <img className={styles.addTask__alarm} src={alarm} alt="icon"/>

            </div>
        </div>
    );
}

export default AddTask;