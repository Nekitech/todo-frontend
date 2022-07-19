import React, {useState} from 'react';
import styles from './AddTask.module.css'
import cross from '../../img/cross.svg'
import alarm from '../../img/alarm.svg'
import uniqid from "uniqid";
import {useDispatch} from "react-redux";
import {setAddTask} from "../../redux/actions";


function AddTask({addT}) {
    const dispatch = useDispatch();
    let [textArea, setTextArea] = useState('')
    const handleAddNewTask = () => {
        const newTask = {
            id: uniqid(),
            text: textArea,
            status: 'needTodo'
        }
        dispatch(setAddTask(newTask))
        setTextArea('')

    }

    return (
        <div className={styles.addTask}>
            <div className={styles.addTask__container}>
                <img onClick={() => {
                    if (textArea.match(/\S/g) !== null) {
                        handleAddNewTask()
                    }
                }
                } className={styles.addTask__cross} src={cross} alt="icon"/>
                <textarea
                    onChange={(e) => {
                        setTextArea(e.target.value)
                    }}
                    onKeyDown={(event) => {
                        if(event.key === 'Enter' && textArea.match(/\S/g) !== null) {
                            handleAddNewTask()
                        }
                    }
                    }
                    value={textArea}
                    className={styles.addTask__areaText}
                    placeholder={'Новая задача'}>
                </textarea>
                <img className={styles.addTask__alarm} src={alarm} alt="icon"/>
            </div>
        </div>
    );
}

export default AddTask;