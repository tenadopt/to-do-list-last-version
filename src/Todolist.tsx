import React, {useState} from 'react';
import {FilterValueType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string)=>void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string)=>void
}

export const Todolist = (props: PropsType) => {

    const [title, setTitle] = useState('')

    const changeFilterAllHandler = () => props.changeFilter('All')
    const changeFilterActiveHandler = () => props.changeFilter('Active')
    const changeFilterCompletedHandler = () => props.changeFilter('Completed')

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
                <button onClick={()=>{props.addTask(title)}}>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return(
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={()=>props.removeTask(task.id)}>✖️</button>
                    </li>
                    )})}
            </ul>
            <div>
                <button onClick={changeFilterAllHandler}>All</button>
                <button onClick={changeFilterActiveHandler}>Active</button>
                <button onClick={changeFilterCompletedHandler}>Completed</button>
            </div>
        </div>
    );
};