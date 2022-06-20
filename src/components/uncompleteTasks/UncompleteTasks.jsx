import React from 'react';
import styles from "./UncompleteTasks.module.css";
import Task from "../task/Task";

function UncompleteTasks(props) {
    return (
        <div>
            <h6 className={styles.uncompleteTasks__title}>Невыполненные</h6>
            {props.uncompTasks.map(task =>
                <Task task={task} key={task.id} removeTask={props.removeTask} cb={props.cb} changeTask={props.changeTask}/>
            )}
        </div>
    );
}

export default UncompleteTasks;