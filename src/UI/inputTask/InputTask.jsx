import React from 'react';
import styles from './InputTask.module.css';

function InputTask(props) {
    return (
        <textarea
            {...props}
            className={props.className ? props.className : styles.areaText}
            placeholder={'Новая задача'}>
        </textarea>
    );
}

export default InputTask;