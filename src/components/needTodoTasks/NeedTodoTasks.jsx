import React from 'react';
import styles from './NeedTodoTasks.module.css'
import Task from "../task/Task";

function NeedTodoTasks(props) {
    return (
        <div>
            <h6 className={styles.needTodo__title}>Надо сделать</h6>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </div>
    );
}

export default NeedTodoTasks;