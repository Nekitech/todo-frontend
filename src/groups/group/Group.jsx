import React, {useState} from 'react';
import styles from './Group.module.css'
import ListTask from "../../components/listTask/ListTask";
import AddTask from "../../components/addTask/AddTask";
const Group = ({stateTasks}) => {
    const {tasks, setTasks} = stateTasks;

    const newTask = (newTask) => {
        setTasks([newTask, ...tasks])
    }
    const deleteTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }
    // Функция для отслеживания изменения статуса задачи и изменении соответ. задачи в списке задач
    const changeTask = (taskChanged) => {
        setTasks(tasks.map(task => (task.id === taskChanged.id) ? task = taskChanged : task))
    }

    return (
        <div className={styles.startGroup}>
            <ListTask tasksList={tasks} removeTask={deleteTask} changeTask={changeTask}/>
            <AddTask addT={newTask}/>
        </div>
    );
};

export default Group;

