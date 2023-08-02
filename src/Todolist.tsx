import React from 'react';
import {FilterValueType} from "./App";
import './App.css'
import {AddItemForm} from "./AddItemForm";
import {EditebleSpan} from "./EditebleSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

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
    changeTitleTask: (todolistId: string, taskId: string, newTitle: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
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
        props.changeTitleTask(props.id, taskId, newTitle)
    }

    const changeTodolistHandler = (todolistId: string, newTitle: string) => {
        props.changeTodolistTitle(todolistId, newTitle)
    }

    return (
        <div>
            <div style={{display: 'flex', boxSizing: 'border-box'}}>
            <h3><EditebleSpan value={props.title} callBack={(newTitle: string)=>changeTodolistHandler(props.id, newTitle)}/></h3>
            <IconButton onClick={removeTodolistHandler}>
                <Delete/>
                ️</IconButton>
            </div>
            <AddItemForm addItem={addTaskHandler}/>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li key={task.id} className={task.isDone ? 'isDone' : ''}>
                            <Checkbox
                                checked={task.isDone}
                                onChange={(e:any) => {
                                    const newIsDoneValue = e.currentTarget.checked
                                    props.checkBoxChangeTask(props.id, task.id, newIsDoneValue)
                                }}/>
                            <EditebleSpan value={task.title}
                                          callBack={(newTitle) => changeTaskHandler(task.id, newTitle)}/>
                            <IconButton onClick={() => props.removeTask(props.id, task.id)}>
                                <Delete/>
                                ️</IconButton>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button
                    // className={props.filter === 'All' ? 'active-filter' : ''}
                        variant={props.filter === 'All' ? 'outlined' : 'text'}
                        onClick={changeFilterAllHandler} color='primary'>All
                </Button>
                <Button
                    // className={props.filter === 'Active' ? 'active-filter' : ''}
                    variant={props.filter === 'Active' ? 'outlined' : 'text'}
                        onClick={changeFilterActiveHandler} color='secondary'>Active
                </Button>
                <Button
                    // className={props.filter === 'Completed' ? 'active-filter' : ''}
                    variant={props.filter === 'Completed' ? 'outlined' : 'text'}
                        onClick={changeFilterCompletedHandler} color='warning'>Completed
                </Button>
            </div>
        </div>
    );
};