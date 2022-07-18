import React from 'react';
import styles from './ListTask.module.css'
import GroupTasks from "../groupTasks/GroupTasks";

function ListTask(props) {

    return (
        <div className={styles.listTask}>
            <GroupTasks listTasks={props.tasksList
                ?.filter(task => task.status === 'needTodo')}
                           name={'Надо сделать'}/>

            <GroupTasks listTasks={props.tasksList
                ?.filter(task => task.status === 'complete')}
                           name={'Выполненные'}/>

            <GroupTasks listTasks={props.tasksList
                ?.filter(task => task.status === 'uncomplete')}
                           name={'Не выполненные'}/>
        </div>
    );
}

export default ListTask;