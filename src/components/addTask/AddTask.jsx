import React, {useState} from 'react';
import styles from './AddTask.module.css'
import cross from '../../assets/img/cross.svg'
import alarm from '../../assets/img/alarm.svg'
import uniqid from "uniqid";
import {useDispatch, useSelector} from "react-redux";
import {fetchCreateTask, setAddTask} from "../../redux/slices/todoSlice";
import InputTask from "../UI/inputTask/InputTask";
import {getDateTask} from "../../assets/data";


function AddTask({addT}) {
    const dispatch = useDispatch();
    let [textArea, setTextArea] = useState('')
    const currGroupId = useSelector(state => state.groupsReducer.currGroupId);
    console.log(currGroupId)
    const handleAddNewTask = () => {
        const newTask = {
            _id: uniqid(),
            text: textArea,
            status: 'needTodo',
            date: getDateTask(),
            description: '',
        }
        dispatch(setAddTask({newTask}))
        dispatch(fetchCreateTask({currGroupId, text: newTask.text}))
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
                <InputTask onChange={(e) => {
                               setTextArea(e.target.value)}}
                           onKeyDown={(event) => {
                               if (event.key === 'Enter'
                                   && textArea.match(/\S/g) !== null) {
                                   handleAddNewTask()
                                   event.preventDefault()
                               }

                               else if(event.key === 'Enter' && textArea.length === 0) {
                                   event.preventDefault()
                               }

                           }}
                           value={textArea}/>
                <img className={styles.addTask__alarm} src={alarm} alt="icon"/>
            </div>
        </div>
    );
}

export default AddTask;