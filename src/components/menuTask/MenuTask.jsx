import React, {useState, useEffect} from 'react';
import styles from './MenuTask.module.css';
import {useDispatch, useSelector} from "react-redux";
import close from '../../img/close_menuTask.svg';
import {setChangeDescrTask, setChangeTextTask, setMenuTaskActive} from "../../redux/actions";
import InputTask from "../../UI/inputTask/InputTask";
import pencil from '../../img/pencil.svg';


function MenuTask(props) {
    const dispatch = useDispatch();

    const activeMenuTask = useSelector(state => state.menuTaskActiveReducer.activeMenuTask);
    const currTaskId = useSelector(state => state.groupsReducer.currTaskId);
    const currGroupId = useSelector(state => state.groupsReducer.currGroupId);
    const groups = useSelector(state => state.groupsReducer.data);
    const currTask = groups.filter(g => (g.idGroup === currGroupId))[0]?.tasks.filter(t => t.id === currTaskId)[0] || {};

    const [textArea, setTextArea] = useState('');
    const [descr, setDescr] = useState('');

    useEffect(() => {
        setTextArea(currTask.text);
        setDescr(currTask.description);
    }, [currTask.text, currTask.description]);


    const handleEditTask = () => {
        dispatch(setChangeTextTask(textArea, currTaskId, currGroupId))
        setTextArea(textArea)

    }

    const handleEditDescr = () => {
        dispatch(setChangeDescrTask(descr, currTaskId, currGroupId))
        setDescr(descr)
    }
    return (
        <div className={(activeMenuTask)
            ? styles.menuTask + ' ' + styles.activeMenu
            : styles.menuTask}>
            <div className={styles.menuTask__container}>
                <div className={styles.menuTask__inputWrapper}>
                    <InputTask
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' && textArea.match(/\S/g) !== null && textArea.length > 0) {
                                handleEditTask()
                                event.preventDefault()
                            }
                            else if(event.key === 'Enter' && textArea.length === 0) {
                                event.preventDefault()
                            }
                        }}
                        onChange={(e) => {
                            setTextArea(e.target.value)
                        }}

                        value={textArea}
                        className={styles.menuTask__input}/>

                    <img onClick={(event) => {

                        if (textArea.match(/\S/g) !== null) {
                            handleEditTask()
                        }
                        }}

                         src={pencil} className={styles.menuTask__pencilIcon} alt={''}/>
                </div>
                <textarea
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && descr.match(/\S/g) !== null && descr.length > 0) {
                            handleEditDescr()
                            event.preventDefault()
                        }
                        else if(event.key === 'Enter' && descr.length === 0) {
                            event.preventDefault()
                        }
                    }}
                    onChange={(e) => {
                        setDescr(e.target.value)
                    }}
                    value={descr}
                    placeholder={'Добавить описание'}
                    className={styles.menuTask__editText}></textarea>
            </div>
            <img onClick={() => {
                dispatch(setMenuTaskActive(!activeMenuTask))
            }} src={close} className={styles.menuTask__close} alt={''}/>
        </div>
    );
}

export default MenuTask;