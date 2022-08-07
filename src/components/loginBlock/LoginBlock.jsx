import React from 'react';
import styles from './LoginBlock.module.css';
import {useNavigate} from "react-router-dom";
import {pathGlobal} from "../../config/global";
import {useDispatch, useSelector} from "react-redux";
import {setLogout} from "../../redux/slices/authSlice";

function LoginBlock(props) {
    const nameUser = useSelector(state => state.auth.data.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(setLogout())
        navigate(`/${pathGlobal}`)

    }

    return (
        <div className={styles.loginBlock}>
            <div className={styles.loginBlock__userBlock}>
                <img className={styles.loginBlock__userAvatar} src={props.userAvatar} alt={''}/>
                <h1 placeholder={'unname'} className={styles.loginBlock__userName}>{nameUser}</h1>
            </div>
            <button onClick={logout} className={styles.loginBlock__logout}>Выйти</button>
        </div>
    );
}

export default LoginBlock;