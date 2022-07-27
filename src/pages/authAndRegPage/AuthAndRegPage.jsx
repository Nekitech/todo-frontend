import React, {useRef} from 'react';
import styles from './AuthAndRegPage.module.css';
import {Link} from "react-router-dom";
import {pathGlobal} from "../../config/global";

function AuthAndRegPage(props) {
    const reg = useRef(null);
    const auth = useRef(null);
    const formBox = useRef(null);

    return (
            <div className={styles.regAndAuth}>
                <div className={styles.regAndAuth__container}>
                    <div className={styles.regAndAuth__container__auth}>
                        <h1 className={styles.regAndAuth_title__titleOpen
                            + ' ' + styles.regAndAuth_title}>У вас уже есть аккаунт?</h1>
                        <button onClick={() => {
                            formBox.current.style.backgroundColor = '#E3DBDB';
                            formBox.current.classList.remove(`${styles.active}`)
                        }} ref={auth} className={styles.regAndAuth__btnOpen}>Войти</button>

                    </div>
                    <div className={styles.regAndAuth__container__reg}>
                        <h1 className={styles.regAndAuth_title__titleReg
                        + ' ' + styles.regAndAuth_title}>Нет аккаунта?</h1>
                        <button onClick={() => {
                            formBox.current.style.backgroundColor = '#A47878';
                            formBox.current.classList.add(`${styles.active}`)
                        }} ref={reg} className={styles.regAndAuth__btnReg}>Зарегестрироваться</button>
                    </div>

                    <div ref={formBox} className={styles.regAndAuth__formBox}>

                        <form action={'#'} className={styles.regAndAuth__formAuth}>
                            <h1 style={{color: '#2C2B2B'}} className={styles.regAndAuth_titleForm}>Вход</h1>
                            <input type="text" className={styles.regAndAuth__input} placeholder="Логин"/>
                            <input type="password" className={styles.regAndAuth__input} placeholder="Пароль"/>
                            <Link to={`/${pathGlobal}s/MainPage`}>
                                <button className={styles.regAndAuth__btnOpen}>Войти</button>
                            </Link>
                        </form>

                        <form action={'#'} className={styles.regAndAuth__formReg}>
                            <h1 style={{color: '#fff'}}  className={styles.regAndAuth_titleForm}>Регистрация</h1>
                            <input type="text" className={styles.regAndAuth__input} placeholder="Логин"/>
                            <input type="email" className={styles.regAndAuth__input} placeholder="Email"/>
                            <input type="password" className={styles.regAndAuth__input} placeholder="Пароль"/>
                            <input type="password" className={styles.regAndAuth__input} placeholder="Подтвердите пароль"/>
                            <Link to={`/${pathGlobal}/MainPage`}>
                                <button className={styles.regAndAuth__btnReg}>Зарегестрироваться</button>
                            </Link>
                        </form>
                    </div>

                </div>
            </div>
    );
}

export default AuthAndRegPage;