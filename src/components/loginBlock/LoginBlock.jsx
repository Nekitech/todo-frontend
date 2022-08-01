import React from 'react';
import styles from './LoginBlock.module.css';
import {Link} from "react-router-dom";
import {pathGlobal} from "../../config/global";

function LoginBlock(props) {
    return (
        <div className={styles.loginBlock}>
            <div className={styles.loginBlock__userBlock}>
                <img className={styles.loginBlock__userAvatar} src={props.userAvatar} alt={''}/>
                <h1 className={styles.loginBlock__userName}>{props.userName}</h1>
            </div>
            <Link to={`/${pathGlobal}`} className={styles.loginBlock__logout}>Выйти</Link>
        </div>
    );
}

export default LoginBlock;