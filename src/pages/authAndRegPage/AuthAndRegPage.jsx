import React, {useEffect, useRef} from 'react';
import styles from './AuthAndRegPage.module.css';
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";
import {pathGlobal} from "../../config/global";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, isAuth} from "../../redux/slices/authSlice";

function AuthAndRegPage(props) {
    const reg = useRef(null);
    const auth = useRef(null);
    const formBox = useRef(null);
    const dispatch = useDispatch();
    const isToken = useSelector(isAuth);
    const navigate = useNavigate()

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "test1@mail.ru",
            password: "12345"
        }
    }, {mode: 'onChange'});


    const onSubmit = async (value) => {
        const data = await dispatch(fetchAuth(value));
        if(!data.payload) {
            return alert('Не удалось авторизоваться')
        }
        if (data?.payload.token) {
            window.localStorage.setItem('token', data.payload.token);
        }
    }
    useEffect(() => {
        if (isToken) {
            navigate(`/${pathGlobal}/MainPage`)
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
                    }} ref={auth} className={styles.regAndAuth__btnOpen}>Войти
                    </button>

                </div>
                <div className={styles.regAndAuth__container__reg}>
                    <h1 className={styles.regAndAuth_title__titleReg
                        + ' ' + styles.regAndAuth_title}>Нет аккаунта?</h1>
                    <button onClick={() => {
                        formBox.current.style.backgroundColor = '#A47878';
                        formBox.current.classList.add(`${styles.active}`)
                    }} ref={reg} className={styles.regAndAuth__btnReg}>Зарегестрироваться
                    </button>
                </div>

                <div ref={formBox} className={styles.regAndAuth__formBox}>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.regAndAuth__formAuth}>
                        <h1 style={{color: '#2C2B2B'}} className={styles.regAndAuth_titleForm}>Вход</h1>
                        <input {...register('email', {required: 'Укажите почту'})} type="email"
                               className={styles.regAndAuth__input} placeholder="Email"/>
                        <input {...register('password', {required: 'Укажите паспорт'})} type="password"
                               className={styles.regAndAuth__input} placeholder="Пароль"/>
                        <button type={"submit"} className={styles.regAndAuth__btnOpen}>Войти</button>

                    </form>

                    <form action={'#'} className={styles.regAndAuth__formReg}>
                        <h1 style={{color: '#fff'}} className={styles.regAndAuth_titleForm}>Регистрация</h1>
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