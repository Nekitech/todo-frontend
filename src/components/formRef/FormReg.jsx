import React from 'react';
import styles from "./FormReg.module.css";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchRegister} from "../../redux/slices/authSlice";

function FormReg(props) {
    const dispatch = useDispatch();

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            login: "Nikolay",
            email: "test@mail.ru",
            password: "12345",
            confirmPassword: "12345"
        }
    }, {mode: 'onChange'});

    const onSubmit = async (value) => {
        const data = await dispatch(fetchRegister(value));
        if(!data.payload) {
            return alert('Не удалось зарегистрироваться')
        }
        if (data?.payload.token) {
            window.localStorage.setItem('token', data.payload.token);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.regAndAuth__formReg}>
                <h1 style={{color: '#fff'}} className={styles.regAndAuth_titleForm}>Регистрация</h1>
                <input {...register('login', {required: 'Укажите логин'})} type="text" className={styles.regAndAuth__input} placeholder="Логин"/>
                <input {...register('email', {required: 'Укажите почту'})} type="email" className={styles.regAndAuth__input} placeholder="Email"/>
                <input {...register('password', {required: 'Укажите пароль'})} type="password" className={styles.regAndAuth__input} placeholder="Пароль"/>
                <input {...register('confirmPassword', {required: 'Подтвердите пароль'})} type="password" className={styles.regAndAuth__input} placeholder="Подтвердите пароль"/>
                <button type={"submit"} className={styles.regAndAuth__btnRegForm}>Зарегестрироваться</button>

            </form>
        </>
    );
}

export default FormReg;