import React, {useRef, useState} from 'react';
import styles from './SideMenuGroup.module.css'
import sideMenuIcon from '../../img/SideMenuIcon.svg'
import ListGroup from "../listGroup/ListGroup";
import AddGroup from "../addGroup/AddGroup";

function SideMenuGroup(props) {
    let [groups, setGroups] = useState([
        {id: 1, nameGroup: 'Мой день'}
    ])
    let menu = useRef()
    let icon = useRef()
    return (
        <div ref={menu} className={styles.sideMenu}>
            <img ref={icon} onClick={() => {
                menu.current.classList.toggle(`${styles.activeMenu}`)
                icon.current.classList.toggle(`${styles.activeIcon}`)
            }} className={styles.sideMenu__icon} src={sideMenuIcon} alt="icon"/>
            <div className={styles.sideMenu__container}>
                <AddGroup/>
                <ListGroup listGroups={groups}/>
            </div>
        </div>

    );
}

export default SideMenuGroup;