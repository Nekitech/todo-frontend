import React, {useState, useEffect} from 'react';
import styles from './MenuTask.module.css';
import {useDispatch, useSelector} from "react-redux";
import close from '../../assets/img/close_menuTask.svg';
import {
    fetchDeleteTask,
    fetchUpdateTask,
    setChangeDescrTask,
    setChangeTextTask,
    setDeleteTask
} from "../../redux/slices/todoSlice";
import {setMenuTaskActive} from "../../redux/slices/menuTaskActiveSlice";
import InputTask from "../UI/inputTask/InputTask";
import pencil from '../../assets/img/pencil.svg';
import deleteIcon from '../../assets/img/bucket.svg';

function MenuTask(props) {
    const dispatch = useDispatch();

    const activeMenuTask = useSelector(state => state.menuTaskActiveReducer.activeMenuTask);
    const currTaskId = useSelector(state => state.groupsReducer.currTaskId);
    const currGroupId = useSelector(state => state.groupsReducer.currGroupId);
    const groups = useSelector(state => state.groupsReducer.data);
    const currTask = groups.filter(g => (g._id === currGroupId))[0]?.tasks.filter(t => t._id === currTaskId)[0] || {};

    const [textArea, setTextArea] = useState('');
    const [descr, setDescr] = useState('');

    useEffect(() => {
        setTextArea(currTask.text);
        setDescr(currTask.description);
    }, [currTaskId]);


    const handleEditTask = () => {
        dispatch(setChangeTextTask({newText: textArea, taskId: currTaskId, groupId: currGroupId}))
        dispatch(fetchUpdateTask({
            taskId: currTask._id,
            groupId: currGroupId,
            dataChange: textArea,
            nameData: 'text'
        }))
        setTextArea(textArea)

    }

    const handleEditDescr = () => {
        dispatch(setChangeDescrTask({newDescr: descr, taskId: currTaskId, groupId: currGroupId}))
        dispatch(fetchUpdateTask({
            taskId: currTask._id,
            groupId: currGroupId,
            dataChange: descr,
            nameData: 'description'
        }))
    }
    return (
        <div className={(activeMenuTask)
            ? styles.menuTask + ' ' + styles.activeMenu
            : styles.menuTask}>
            <img onClick={() => {
                dispatch(setMenuTaskActive({activeMenuTask: !activeMenuTask}))
            }} src={close} className={styles.menuTask__close} alt={''}/>
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
                <p className={styles.menuTask__taskNote}>Заметка о задаче</p>
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
                        handleEditDescr()
                    }}
                    value={descr}
                    placeholder={'Добавить заметку'}
                    className={styles.menuTask__editText}></textarea>
            </div>
            <div className={styles.menuTask__footer}>
                <p className={styles.menuTask__footerDate}>Создано {currTask.date}</p>

                <img onClick={() => {
                    if(activeMenuTask) {
                        dispatch(setMenuTaskActive({activeMenuTask: !activeMenuTask}))
                    }
                    dispatch(setDeleteTask({task: currTask}))
                    dispatch(fetchDeleteTask({groupId: currGroupId, taskId: currTask._id}))

                }} src={deleteIcon} className={styles.menuTask__footerDeleteIcon} alt={''}/>
            </div>
        </div>
    );
}

export default React.memo(MenuTask);