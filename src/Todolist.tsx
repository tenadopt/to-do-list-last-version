import React, {ChangeEvent, useState} from 'react';
import {FilterValueType} from "./App";
import './App.css'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, value: FilterValueType) => void
    addTask: (todolistId: string, title: string) => void
    checkBoxChangeTask: (todolistId: string, taskId: string, newIsDoneValue: boolean) => void
    filter: FilterValueType
}

export const Todolist = (props: PropsType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(props.id, title.trim())
            setTitle('')
        } else setError('Title is Requied')
        setTitle('')
    }
    const changeFilterAllHandler = () => {
        props.changeFilter(props.id,'All')
    }
    const changeFilterActiveHandler = () => {
        props.changeFilter(props.id,'Active')
    }
    const changeFilterCompletedHandler = () => {
        props.changeFilter(props.id,'Completed')
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onChangeEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            addTaskHandler()
            setTitle('')
        }
    };

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    className={error ? 'error' : ''}
                    value={title}
                    onChange={onChangeInputHandler}
                    onKeyDown={onChangeEnterHandler}
                />
                <button onClick={addTaskHandler}>+</button>
                {error && <div className='error-message'>{error}</div>}
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id} className={task.isDone ? 'isDone' : ''}>
                            <input
                                type="checkbox"
                                checked={task.isDone}
                                onChange={(e) => {
                                    const newIsDoneValue = e.currentTarget.checked
                                    props.checkBoxChangeTask(props.id, task.id, newIsDoneValue)
                                }}/>
                            <span>{task.title}</span>
                            <button onClick={() => props.removeTask(props.id, task.id)}>✖️</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={props.filter === 'All' ? 'active-filter' : ''} onClick={changeFilterAllHandler}>All
                </button>
                <button className={props.filter === 'Active' ? 'active-filter' : ''}
                        onClick={changeFilterActiveHandler}>Active
                </button>
                <button className={props.filter === 'Completed' ? 'active-filter' : ''}
                        onClick={changeFilterCompletedHandler}>Completed
                </button>
            </div>
        </div>
    );
};