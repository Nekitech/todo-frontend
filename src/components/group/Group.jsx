import React from 'react';
import styles from './Group.module.css'
import ListTask from "../listTask/ListTask";
import AddTask from "../addTask/AddTask";

import {useSelector} from "react-redux";

const Group = () => {
    const groups = useSelector(state => state.groupsReducer.data);
    const currGroupId = useSelector(state => state.groupsReducer.currGroupId);

    return (
        <div className={styles.startGroup}>
            {
                (!!groups.length)
                ? (
                    <>
                        <ListTask
                            tasksList={groups
                                .filter(g => g.idGroup === currGroupId)[0]?.tasks}
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

