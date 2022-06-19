import React, {useRef, useState} from 'react';
import styles from './AddTask.module.css'
import cross from '../../img/cross.svg'
import alarm from '../../img/alarm.svg'

function AddTask({cb}) {
    let [textArea, setTextArea] = useState('')


    const addNewTask = () => {
        const newTasks = {
            'id': Date.now(),
            'text': textArea,
            'state': 'needTodo'
        }
        cb(newTasks)
        setTextArea('')
    }

    return (
        <div className={styles.addTask}>
            <div className={styles.addTask__container}>
                <img onClick={addNewTask} className={styles.addTask__cross} src={cross} alt="icon"/>
                <textarea onChange={(e) => {
                    setTextArea(e.target.value)
                }} value={textArea} className={styles.addTask__areaText} placeholder={'Новая задача'}>
                </textarea>
                <img className={styles.addTask__alarm} src={alarm} alt="icon"/>
            </div>
        </div>
    );
}

export default AddTask;