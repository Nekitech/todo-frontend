import React, {useState} from 'react';
import styles from "./ListGroupBtn.module.css";
import GroupBtn from "../groupBtn/GroupBtn";


function ListGroupBtn(props) {
    const [currGroup, setCurrGroup] = useState(null)

    const dragStartHandler = (e, group) => {
        setCurrGroup(group)
    }
    const dragEndHandler = (e) => {
        e.currentTarget.style.background = '#A47878'
        e.currentTarget.style.transform = 'translateY(0)'
    }
    const dragOverHandler = (e) => {
        e.preventDefault()
        e.currentTarget.style.background = '#e1e1e1'
        e.currentTarget.style.transform = 'translateY(5px)'
    }

    const dropHandler = (e, group) => {
        e.preventDefault()
        e.currentTarget.style.background = '#A47878'
        e.currentTarget.style.transform = 'translateY(0)'
        props.changePlaceGroup(currGroup, group)

    }
    return (
        <div className={styles.listGroup}>
            {
                props.listGroups.map((g) =>
                    <GroupBtn
                        draggable={true}
                        onDragStart={(e) => {dragStartHandler(e, g)}}
                        onDragLeave={(e) => {dragEndHandler(e)}}
                        onDragEnd={(e) => {dragEndHandler(e)}}
                        onDragOver={(e) => {dragOverHandler(e)}}
                        onDrop={(e) => {dropHandler(e, g)}}

                        name={g.nameGroup}
                        key={g.idGroup}
                        idGroup={g.idGroup}
                        currGroupId={props.currGroupId}
                        cbDeleteGroup={props.cbDeleteGroup}/>
                )
            }
        </div>

    );
}

export default ListGroupBtn;