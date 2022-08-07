import React, {useEffect, useRef} from 'react';
import styles from './AuthAndRegPage.module.css';
import {useNavigate} from 'react-router-dom';
import {pathGlobal} from "../../config/global";
import {useSelector} from "react-redux";
import FormAuth from "../../components/formAuth/FormAuth";
import {isAuth} from "../../redux/slices/authSlice";
import FormReg from "../../components/formRef/FormReg";

function AuthAndRegPage(props) {
    const reg = useRef(null);
    const auth = useRef(null);
    const formBox = useRef(null);

    const [form, setForm] = React.useState('auth');

    const isToken = useSelector(isAuth);
    const navigate = useNavigate()

    useEffect(() => {
        if (isToken) {

            navigate(`/${pathGlobal}MainPage`)
        }
    }, [isToken])

    return (
        <div className={styles.regAndAuth}>
            <div className={styles.regAndAuth__container}>
                <div className={styles.regAndAuth__container__auth}>
                    <h1 className={styles.regAndAuth_title__titleOpen
                        + ' ' + styles.regAndAuth_title}>У вас уже есть аккаунт?</h1>
                    <button onClick={() => {
                        formBox.current.style.backgroundColor = '#E3DBDB';
                        formBox.current.classList.remove(`${styles.active}`)
                        setForm('auth')
                    }} ref={auth} className={styles.regAndAuth__btnOpen}>Войти
                    </button>

                </div>
                <div className={styles.regAndAuth__container__reg}>
                    <h1 className={styles.regAndAuth_title__titleReg
                        + ' ' + styles.regAndAuth_title}>Нет аккаунта?</h1>
                    <button onClick={() => {
                        formBox.current.style.backgroundColor = '#A47878';
                        formBox.current.classList.add(`${styles.active}`)
                        setForm('reg')
                    }} ref={reg} className={styles.regAndAuth__btnReg}>Зарегестрироваться
                    </button>
                </div>

                <div ref={formBox} className={styles.regAndAuth__formBox}>
                    {
                        (form === 'auth') ? <FormAuth/> : <FormReg/>
                    }

                </div>

            </div>
        </div>
    );
}

export default AuthAndRegPage;