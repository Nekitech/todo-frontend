import React, {useState} from 'react';
import styles from './AddGroup.module.css'
import cross from '../../img/cross.svg'

function AddGroup(props) {
    let [nameGroup, setNameGroup] = useState('')

    const addGroup = () => {
        const newGroup = {
            id: Date.now(),
            nameGroup: nameGroup,
            path: '/' + nameGroup
        }
        props.cbAddGroups(newGroup)
    }

    return (
        <div className={styles.addGroup}>
            <img onClick={addGroup} className={styles.cross} src={cross} alt=""/>
            <input
                value={nameGroup}
                onChange={(e) => setNameGroup(e.target.value)}
                className={styles.inputNameGroup} placeholder={'Создать группу'}/>
        </div>
    );
}

export default AddGroup;