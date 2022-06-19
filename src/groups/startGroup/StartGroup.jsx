import React from 'react';
import styles from './StartGroup.module.css'
import ListTask from "../../components/listTask/ListTask";
import AddTask from "../../components/addTask/AddTask";
const MyComponent = (props) => {
    return (
        <div className={styles.startGroup}>
            <ListTask/>
            <AddTask/>
        </div>
    );
};

export default MyComponent;

