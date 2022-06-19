import React, {useState} from 'react';
import styles from './StartGroup.module.css'
import ListTask from "../../components/listTask/ListTask";
import AddTask from "../../components/addTask/AddTask";
const MyComponent = (props) => {
    let [tasks, setTasks] = useState([
        {
        'id': Date.now(),
        'text': 'Завтра сходить в магазин, купить хлеба',
        'status': 'needTodo'
        }
    ])

    const newTask = (newTask) => {
        setTasks([newTask, ...tasks])
    }
    const deleteTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }
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

export default MyComponent;

