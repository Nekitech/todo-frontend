import React from 'react';
import styles from "./ListGroupBtn.module.css";
import GroupBtn from "../groupBtn/GroupBtn";

function ListGroupBtn(props) {
    return (
        <div className={styles.listGroup}>
            {
                props.listGroups.map((g) =>
                    <GroupBtn
                        name={g.nameGroup}
                        key={g.idGroup}
                        idGroup={g.idGroup}
                        cbCurrGroup={props.cbCurrGroup}
                        cbDeleteGroup={props.cbDeleteGroup}
                        currGroupId={props.currGroupId}/>
                )
            }
        </div>

    );
}

export default ListGroupBtn;