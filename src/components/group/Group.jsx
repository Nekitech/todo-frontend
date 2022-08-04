import React from 'react';
import styles from './Group.module.css'
import ListTask from "../listTask/ListTask";
import AddTask from "../addTask/AddTask";

import {useSelector} from "react-redux";
import {ClockLoader} from "react-spinners";

const Group = () => {
    const groups = useSelector(state => state.groupsReducer.data);
    const isLoading = useSelector(state => state.groupsReducer.status) === 'loading';
    const currGroupId = useSelector(state => state.groupsReducer.currGroupId);

    // console.log(groups, groups.filter(g => g._id === currGroupId)[0]?.tasks)
    return (
        <div className={styles.startGroup}>
            {
                (!isLoading)
                    ? (
                        (!!groups.length)
                            ?
                            (
                                <>
                                    <ListTask
                                        tasksList={groups
                                            .filter(g => g._id === currGroupId)[0]?.tasks}/>
                                    <AddTask/>
                                </>
                            )
                            : <h1>Нет созданных групп. Вы можете создать первую группу во вкладке слева</h1>
                    )
                    : <ClockLoader size={150} color={"#fff"} className={styles.spinner}/>
            }

        </div>
    );
};

export default Group;

