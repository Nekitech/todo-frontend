import React, {useEffect} from 'react';
import styles from './Group.module.css'
import ListTask from "../../components/listTask/ListTask";
import AddTask from "../../components/addTask/AddTask";

import {useSelector} from "react-redux";

const Group = () => {
    const groups = useSelector(state => state.groupsReducer.data);
    const currGroupId = useSelector(state => state.groupsReducer.currGroupId);
    console.log(groups, currGroupId)

    // const newTask = (newTask) => {
    //     setGroups(groups.map(g => g.idGroup === currGroupId
    //         ? {...g, tasks: [...g.tasks, newTask]}
    //         : g))
    // }
    // const deleteTask = (task) => {
    //     setGroups(groups.map(g => g.idGroup === currGroupId
    //         ? {...g, tasks: [...g.tasks.splice(0, g.tasks.indexOf(task)),
    //                 ...g.tasks.splice(g.tasks.indexOf(task) + 1)]}
    //         : g))
    // }
    // // Функция для отслеживания изменения статуса задачи и изменении соответ. задачи в списке задач
    // const changeTask = (taskChanged) => {
    //     setGroups(groups.map(g => g.idGroup === currGroupId
    //         ? {...g, tasks:  g.tasks.map(task => (task.id === taskChanged.id) ? taskChanged : task)}
    //         : g))
    // }
    // // Функция для изменения положения задачи при перетаскивании через DragAndDrop
    // const changePlaceTask = (currTask, task) => {
    //     setGroups(groups.map(g => (g.idGroup === currGroupId)
    //         ? {...g, tasks: g.tasks.map(t => (t.id === task.id)
    //                 ? currTask
    //                 : (t.id === currTask.id)
    //                     ? task : t)}
    //         : g))
    // }

    return (
        <div className={styles.startGroup}>
            {
                (!!groups.length)
                ? (
                    <>
                        <ListTask
                            tasksList={groups.filter(g => g.idGroup === currGroupId)[0]?.tasks}
                            />
                        <AddTask/>
                    </>

                )
                : <h1>Нет созданных групп. Вы можете создать первую группу во вкладке слева</h1>
            }

        </div>
    );
};

export default Group;

