import React, {ChangeEvent, useState} from 'react';
import {FilterValueType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void
    checkBoxChangeTask: (taskId: string, newIsDoneValue: boolean)=>void
}

export const Todolist = (props: PropsType) => {

    const [title, setTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const changeFilterAllHandler = () => {
        props.changeFilter('All')
    }
    const changeFilterActiveHandler = () => {
        props.changeFilter('Active')
    }
    const changeFilterCompletedHandler = () => {
        props.changeFilter('Completed')
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onChangeEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {if (e.key === 'Enter') {addTaskHandler()}};

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeInputHandler}
                       onKeyDown={onChangeEnterHandler}
                />
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone} onChange={(e)=>{
                                const newIsDoneValue = e.currentTarget.checked
                                props.checkBoxChangeTask(task.id,newIsDoneValue)
                            }}/>
                            <span>{task.title}</span>
                            <button onClick={() => props.removeTask(task.id)}>✖️</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={changeFilterAllHandler}>All</button>
                <button onClick={changeFilterActiveHandler}>Active</button>
                <button onClick={changeFilterCompletedHandler}>Completed</button>
            </div>
        </div>
    );
};