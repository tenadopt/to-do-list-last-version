import React from 'react';
import {FilterValueType} from "./App";
import './App.css'
import {AddItemForm} from "./AddItemForm";
import {EditebleSpan} from "./EditebleSpan";

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
    removeTodolist: (todolistId: string) => void
    changeTitle: (todolistId: string, taskId: string, newTitle: string) => void
}

export const Todolist = (props: PropsType) => {

    const addTaskHandler = (title: string) => {
            props.addTask(props.id, title)
    }
    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }
    const changeFilterAllHandler = () => {
        props.changeFilter(props.id, 'All')
    }
    const changeFilterActiveHandler = () => {
        props.changeFilter(props.id, 'Active')
    }
    const changeFilterCompletedHandler = () => {
        props.changeFilter(props.id, 'Completed')
    }

    const changeTaskHandler = (taskId: string, newTitle: string) => {
        debugger
        props.changeTitle(props.id, taskId, newTitle)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <button onClick={removeTodolistHandler}>✖️</button>
            <AddItemForm addItem={addTaskHandler}/>
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
                            <EditebleSpan value={task.title} callBack={(newTitle)=>changeTaskHandler(task.id,newTitle)}/>
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