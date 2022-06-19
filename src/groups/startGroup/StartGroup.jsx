import React, {useState} from 'react';
import styles from './StartGroup.module.css'
import ListTask from "../../components/listTask/ListTask";
import AddTask from "../../components/addTask/AddTask";
const MyComponent = (props) => {
    let [tasks, setTasks] = useState([
        {
        'id': Date.now(),
        'text': 'Завтра сходить в магазин, купить хлеба',
        'state': 'needTodo'
        }
    ])

    const newTask = (newTask) => {
        setTasks([newTask, ...tasks])
    }

    return (
        <div className={styles.startGroup}>
            <ListTask tasksList={tasks}/>
            <AddTask cb={newTask}/>
        </div>
    );
};

export default MyComponent;

