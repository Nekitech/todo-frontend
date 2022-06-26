import React from 'react';
import styles from './ListTask.module.css'
import NeedTodoTasks from "../needTodoTasks/NeedTodoTasks";
import CompleteTasks from "../completeTaks/CompleteTasks";
import UncompleteTasks from "../uncompleteTasks/UncompleteTasks";

function ListTask(props) {
    return (
        <div className={styles.listTask}>
            <NeedTodoTasks needTasks={props.tasksList.filter(task => task.status === 'needTodo')}
                           removeTask={props.removeTask}
                           changeTask={props.changeTask}/>

            <CompleteTasks compTasks={props.tasksList.filter(task => task.status === 'complete')}
                           removeTask={props.removeTask}
                           changeTask={props.changeTask}/>

            <UncompleteTasks uncompTasks={props.tasksList.filter(task => task.status === 'uncomplete')}
                             removeTask={props.removeTask}/>
        </div>
    );
}

export default ListTask;