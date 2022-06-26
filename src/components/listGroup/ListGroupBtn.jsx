import React, {useRef} from 'react';
import styles from "./ListGroupBtn.module.css";
import GroupBtn from "../groupBtn/GroupBtn";

function ListGroupBtn(props) {

    let listGroup = useRef()


    return (
        <div ref={listGroup} className={styles.listGroup}>
            {
                props.listGroups.map((g) =>
                    <GroupBtn listGroup={listGroup} name={g.nameGroup} key={g.idGroup} cbCurrGroup={props.cbCurrGroup}/>
                )
            }
        </div>

    );
}

export default ListGroupBtn;