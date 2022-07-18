import React from 'react';
import styles from './ListTask.module.css'
import GroupTasks from "../groupTasks/GroupTasks";
import {useSelector} from "react-redux";


function ListTask(props) {

    return (
        <div className={styles.listTask}>
            <GroupTasks listTasks={props.tasksList?.filter(task => task.status === 'needTodo')}
                           removeTask={props.removeTask}
                           changeTask={props.changeTask}
                           changePlaceTask={props.changePlaceTask}
                           name={'Надо сделать'}/>

            <GroupTasks listTasks={props.tasksList?.filter(task => task.status === 'complete')}
                           removeTask={props.removeTask}
                           changeTask={props.changeTask}
                           changePlaceTask={props.changePlaceTask}
                           name={'Выполненные'}/>

            <GroupTasks listTasks={props.tasksList?.filter(task => task.status === 'uncomplete')}
                           removeTask={props.removeTask}
                           changePlaceTask={props.changePlaceTask}
                           name={'Не выполненные'}/>
        </div>
    );
}

export default ListTask;