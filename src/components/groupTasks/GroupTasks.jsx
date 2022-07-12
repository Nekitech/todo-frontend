import React, {useState} from 'react';
import styles from './GroupTasks.module.css'
import Task from "../task/Task";


function GroupTasks(props) {
    const [currTask, setCurrTask] = useState(null)
    const dragStartHandler = (e, task) => {
        setCurrTask(task)
    }

    const dragEndHandler = (e) => {
        e.currentTarget.style.background = '#9D8E8E'
        e.currentTarget.style.transform = 'translateY(0)'
    }
    const dragOverHandler = (e) => {
        e.preventDefault()
        e.currentTarget.style.background = '#e1e1e1'
        e.currentTarget.style.transform = 'translateY(5px)'
    }

    const dropHandler = (e, task) => {
        e.preventDefault()
        e.currentTarget.style.background = '#9D8E8E'
        e.currentTarget.style.transform = 'translateY(0)'
        props.changePlaceTask(currTask, task)

    }
    return (
        <>
            <h6 className={(props.name === 'Надо сделать')
                ? styles.groupTasks__title
                : styles.groupTasks__title + ' ' + styles.groupTasks__titleUnderline}>{props.name}</h6>
            {props.listTasks?.map(task =>
                <Task draggable={true}
                      onDragStart={(e) => {dragStartHandler(e, task)}}
                      onDragLeave={(e) => {dragEndHandler(e)}}
                      onDragEnd={(e) => {dragEndHandler(e)}}
                      onDragOver={(e) => {dragOverHandler(e)}}
                      onDrop={(e) => {dropHandler(e, task)}}

                      task={task} key={task.id}
                      removeTask={props.removeTask}
                      changeTask={props.changeTask}
                      changePlaceTask={props.changePlaceTask}/>
            )}
        </>
    );
}

export default GroupTasks;