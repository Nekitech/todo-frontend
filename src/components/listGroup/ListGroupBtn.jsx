import React, {useState} from 'react';
import styles from "./ListGroupBtn.module.css";
import GroupBtn from "../groupBtn/GroupBtn";
import {useDispatch, useSelector} from "react-redux";
import {setChangePlaceGroup} from "../../redux/actions";


function ListGroupBtn(props) {
    const dispatch = useDispatch();
    const groups = useSelector(state => state.groupsReducer.data);

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
        dispatch(setChangePlaceGroup(currGroup, group))

    }
    return (
        <div className={styles.listGroup}>
            {
                groups.map((g) =>
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
                        />
                )
            }
        </div>

    );
}

export default ListGroupBtn;