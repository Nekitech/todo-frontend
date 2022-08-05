import React, {useState} from 'react';
import styles from './AddGroup.module.css'
import cross from '../../assets/img/cross.svg'
import uniqid from "uniqid";
import {useDispatch} from "react-redux";
import {fetchCreateGroup, setAddGroup} from "../../redux/slices/todoSlice";
import mongoose from "mongoose";

function AddGroup(props) {
    const dispatch = useDispatch();
    const [nameGroup, setNameGroup] = useState('')

    const handleAddGroup = () => {
        const newGroup = {
            nameGroup: nameGroup,
            _id: new mongoose.Types.ObjectId().toString(),
            tasks: []
        }
        if(newGroup.nameGroup.length >= 2 && newGroup.nameGroup.length <= 30) {
            dispatch(setAddGroup({newGroup}))
            dispatch(fetchCreateGroup({nameGroup: newGroup.nameGroup, idGroup: newGroup._id}))
            setNameGroup('')
        }
        else {
            alert('Название группы должно быть от 4 до 30 символов')
        }

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