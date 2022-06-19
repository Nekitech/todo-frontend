import React from 'react';
import styles from './ListTask.module.css'
import NeedTodoTasks from "../needTodoTasks/NeedTodoTasks";
import CompleteTasks from "../completeTaks/CompleteTasks";


function ListTask(props) {

    return (
        <div className={styles.listTask}>
            <NeedTodoTasks needTasks={props.tasksList.filter(task => task.status === 'needTodo')} removeTask={props.removeTask}
                           changeTask={props.changeTask}/>
            <CompleteTasks compTasks={props.tasksList.filter(task => task.status === 'complete')} removeTask={props.removeTask}
                           changeTask={props.changeTask}/>
        </div>
    );
}

export default ListTask;