import React from 'react';
import styles from './Group.module.css'
import ListTask from "../../components/listTask/ListTask";
import AddTask from "../../components/addTask/AddTask";
const Group = ({stateTasks}) => {
    const {groups, setGroups, currGroupName} = stateTasks;

    const newTask = (newTask) => {
        setGroups(groups.map(g => g.nameGroup === currGroupName
            ? {...g, tasks: [...g.tasks, newTask]}
            : g))
    }
    const deleteTask = (task) => {
        setGroups(groups.map(g => g.nameGroup === currGroupName
            ? {...g, tasks: g.tasks.filter(t => t.id !== task.id)}
            : g))
    }
    // Функция для отслеживания изменения статуса задачи и изменении соответ. задачи в списке задач
    const changeTask = (taskChanged) => {
        setGroups(groups.map(g => g.nameGroup === currGroupName
            ? {...g, tasks:  g.tasks.map(task => (task.id === taskChanged.id) ? taskChanged : task)}
            : g))
    }

    return (
        <div className={styles.startGroup}>
            {
                (groups.length !== 0)
                ? (
                    <>
                        <ListTask
                            tasksList={groups.filter(g => g.nameGroup === currGroupName)[0]?.tasks}
                            removeTask={deleteTask}
                            changeTask={changeTask}/>
                        <AddTask addT={newTask}/>
                    </>

                )
                : <h1>Нет групп</h1>
            }

        </div>
    );
};

export default Group;

