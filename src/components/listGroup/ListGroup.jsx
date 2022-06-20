import React from 'react';
import styles from "./ListGroup.module.css";
import Group from "../group/Group";

function ListGroup(props) {
    return (
        <div className={styles.listGroup}>
            {
                props.listGroups.map((g) =>
                    <Group name={g.nameGroup} key={g.id}/>
                )
            }
        </div>

    );
}

export default ListGroup;