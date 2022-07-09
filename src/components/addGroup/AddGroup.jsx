import React, {useState} from 'react';
import styles from './AddGroup.module.css'
import cross from '../../img/cross.svg'

function AddGroup(props) {
    const [nameGroup, setNameGroup] = useState('')

    const handleAddGroup = () => {
        const newGroup = {
            idGroup: Date.now(),
            nameGroup: nameGroup,
            tasks: []
        }
        props.cbAddGroup(newGroup)
        setNameGroup('')
    }
    return (
        <div className={styles.addGroup} >
            <img onClick={() => {
                if(nameGroup !== '') {
                    handleAddGroup()
                }
            }} className={styles.cross} src={cross} alt=""/>
            <input
                value={nameGroup}
                onChange={(e) => setNameGroup(e.target.value)}
                className={styles.inputNameGroup} placeholder={'Создать группу'}
                onKeyPress={(event) => {
                    if (event.key === 'Enter' && nameGroup !== '') {
                        handleAddGroup()
                    }
                }}/>
        </div>
    );
}

export default AddGroup;