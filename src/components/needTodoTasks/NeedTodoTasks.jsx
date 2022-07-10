import React from 'react';
import styles from './NeedTodoTasks.module.css'
import Task from "../task/Task";

function NeedTodoTasks(props) {
    return (
        <>
            <h6 className={styles.needTodo__title}>Надо сделать</h6>
            {props.needTasks.map(task =>
                <Task task={task} key={task.id} removeTask={props.removeTask} changeTask={props.changeTask}/>
            )}
        </>
    );
}

export default NeedTodoTasks;