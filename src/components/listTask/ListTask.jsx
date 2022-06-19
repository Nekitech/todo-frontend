import React from 'react';
import styles from './ListTask.module.css'
import NeedTodoTasks from "../needTodoTasks/NeedTodoTasks";
import CompleteTasks from "../completeTaks/CompleteTasks";


function ListTask(props) {

    return (
        <div className={styles.listTask}>
            <NeedTodoTasks compTasks={props.tasksList} cb={props.cb}/>
            <CompleteTasks/>
        </div>
    );
}

export default ListTask;