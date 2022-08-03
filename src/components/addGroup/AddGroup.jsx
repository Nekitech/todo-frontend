import React, {useState} from 'react';
import styles from './AddGroup.module.css'
import cross from '../../assets/img/cross.svg'
import uniqid from "uniqid";
import {useDispatch} from "react-redux";
import {setAddGroup} from "../../redux/todoSlice";

function AddGroup(props) {
    const dispatch = useDispatch();
    const [nameGroup, setNameGroup] = useState('')

    const handleAddGroup = () => {
        const newGroup = {
            idGroup: uniqid(),
            nameGroup: nameGroup,
            tasks: []
        }
        dispatch(setAddGroup({newGroup}))
        setNameGroup('')
    }
    return (
        <div className={styles.addGroup} >
            <img onClick={() => {
                if(nameGroup.match(/\S/g) !== null) {
                    handleAddGroup()
                }
            }} className={styles.cross} src={cross} alt=""/>
            <input
                value={nameGroup}
                onChange={(e) => setNameGroup(e.target.value)}
                className={styles.inputNameGroup} placeholder={'Создать группу'}
                onKeyPress={(event) => {
                    if (event.key === 'Enter' && nameGroup.match(/\S/g) !== null) {
                        handleAddGroup()
                    }
                }}/>
        </div>
    );
}

export default AddGroup;