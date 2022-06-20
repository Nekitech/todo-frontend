import React, {useState} from 'react';
import styles from './AddGroup.module.css'
import cross from '../../img/cross.svg'

function AddGroup(props) {
    let [nameGroup, setNameGroup] = useState('')
    return (
        <div className={styles.addGroup}>
            <img className={styles.cross} src={cross} alt=""/>
            <input
                value={nameGroup}
                onChange={(e) => setNameGroup(e.target.value)}
                className={styles.inputNameGroup} placeholder={'Создать группу'}/>
        </div>
    );
}

export default AddGroup;