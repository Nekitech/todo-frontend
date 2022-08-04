import React from 'react';
import styles from "./FormAuth.module.css";
import {useForm} from "react-hook-form";
import {fetchAuth} from "../../redux/slices/authSlice";
import {useDispatch} from "react-redux";

function FormAuth(props) {
    const dispatch = useDispatch();

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
    console.log(isValid)
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.regAndAuth__formAuth}>
                <h1 style={{color: '#2C2B2B'}} className={styles.regAndAuth_titleForm}>Вход</h1>
                <input {...register('email', {required: 'Укажите почту'})} type="email"
                       className={styles.regAndAuth__input} placeholder="Email"/>
                <input {...register('password', {required: 'Укажите паспорт'})} type="password"
                       className={styles.regAndAuth__input} placeholder="Пароль"/>
                <button type={"submit"} className={styles.regAndAuth__btnOpenForm}>Войти</button>

            </form>
        </>
    );
}

export default FormAuth;