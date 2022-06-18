import React from 'react';
import styles from './ListTask.module.css'
import Task from "../task/Task";

function ListTask(props) {
    return (
        <div className={styles.listTask}>
            <Task/>
        </div>
    );
}

export default ListTask;