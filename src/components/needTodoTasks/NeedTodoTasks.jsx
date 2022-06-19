import React from 'react';
import styles from './NeedTodoTasks.module.css'
import Task from "../task/Task";

function NeedTodoTasks(props) {
    return (
        <div>
            <h6 className={styles.needTodo__title}>Надо сделать</h6>
            {props.compTasks.map(task =>
                <Task text={task.text} key={task.id}/>
            )}

        </div>
    );
}

export default NeedTodoTasks;