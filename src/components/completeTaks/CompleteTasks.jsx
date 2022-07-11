import React from 'react';
import styles from "./CompleteTasks.module.css";
import Task from "../task/Task";

function CompleteTasks(props) {
    return (
        <div>
            <h6 className={styles.completeTasks__title}>Выполненные</h6>
            {props.compTasks?.map(task =>
                <Task task={task} key={task.id}
                      removeTask={props.removeTask}
                      cb={props.cb}
                      changeTask={props.changeTask}
                      changePlaceTask={props.changePlaceTask}/>
            )}
        </div>
    );
}

export default CompleteTasks;