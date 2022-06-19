import React from 'react';
import styles from "./CompleteTasks.module.css";
import Task from "../task/Task";

function CompleteTasks(props) {
    return (
        <div>
            <h6 className={styles.completeTasks__title}>Выполненные</h6>

        </div>
    );
}

export default CompleteTasks;