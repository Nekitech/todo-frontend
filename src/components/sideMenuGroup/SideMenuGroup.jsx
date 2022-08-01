import React, {useRef} from 'react';
import styles from './SideMenuGroup.module.css'
import sideMenuIcon from '../../assets/img/SideMenuIcon.svg'
import ListGroupBtn from "../listGroupBtn/ListGroupBtn";
import AddGroup from "../addGroup/AddGroup";
import LoginBlock from "../loginBlock/LoginBlock";
import avatarDefault from '../../assets/img/avatar_default.png'

function SideMenuGroup(props) {

    let menu = useRef()
    let icon = useRef()
    return (
        <div ref={menu} className={styles.sideMenu}>

            <img ref={icon} onClick={() => {
                menu.current?.classList.toggle(`${styles.activeMenu}`)
                icon.current?.classList.toggle(`${styles.activeIcon}`)
            }} className={styles.sideMenu__icon} src={sideMenuIcon} alt="icon"/>
            <div className={styles.sideMenu__container}>
                <LoginBlock userAvatar={avatarDefault} userName={'Nikita'}/>
                <AddGroup/>
                <ListGroupBtn />
            </div>
        </div>

    );
}

export default SideMenuGroup;