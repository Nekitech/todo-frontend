import React from 'react';
import styles from "./ListGroupBtn.module.css";
import GroupBtn from "../groupBtn/GroupBtn";

function ListGroupBtn(props) {
    return (
        <div className={styles.listGroup}>
            {
                props.listGroups.map((g) =>
                    <GroupBtn name={g.nameGroup} key={g.idGroup} cbCurrGroup={props.cbCurrGroup}/>
                )
            }
        </div>

    );
}

export default ListGroupBtn;