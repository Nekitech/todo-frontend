import React, {useRef} from 'react';
import styles from './SideMenuGroup.module.css'
import sideMenuIcon from '../../img/SideMenuIcon.svg'

function SideMenuGroup(props) {

    let menu = useRef(null)
    let icon = useRef(null)
    return (
        <div ref={menu} className={styles.sideMenu}>
            <img ref={icon} onClick={() => {
                menu.current.classList.toggle(`${styles.activeMenu}`)
                icon.current.classList.toggle(`${styles.activeIcon}`)
            }} className={styles.sideMenu__icon} src={sideMenuIcon} alt="icon"/>
        </div>

    );
}

export default SideMenuGroup;