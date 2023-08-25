import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";
import {AppBar, IconButton, Typography, Button, Container, Grid} from "@mui/material";
import {Menu} from "@mui/icons-material";


export type FilterValueType = 'All' | 'Active' | 'Completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterValueType
}

// type TasksType = {
//     [key:string]: TaskType[]
// }



type TasksType = Record<string, TaskType[]>

function App() {

    let todolistsId1 = v1();
    let todolistsId2 = v1();

    const [todolists, setTodolists] = useState<TodolistType[]>(
        [
            {id: todolistsId1, title: 'What to train', filter: 'All'},
            {id: todolistsId2, title: 'What to buy', filter: 'All'}
        ]
    )

    const [tasks, setTask] = useState<TasksType>({
            [todolistsId1]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false}],
            [todolistsId2]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false}]
        }
    )

    const checkBoxChangeTask = (todolistId: string, taskId: string, newIsDoneValue: boolean) => {
        setTask({
            ...tasks,
            [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, isDone: newIsDoneValue} : el)
        })
    }

    const changeFilter = (todolistId: string, value: FilterValueType) => {
        todolists.map(el => el.id === todolistId ? el.filter = value : el)
        setTodolists([...todolists])
    }

    const addTask = (todolistId: string, title: string) => {
        const newTask = {id: v1(), title: title, isDone: false}
        const newTasks = {...tasks, [todolistId]: [...tasks[todolistId], newTask]}
        setTask(newTasks)
    }

    const removeTask = (todolistId: string, id: string) => {
        setTask({...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== id)})
    }

    const removeTodolist = (todolistsID: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistsID))
        delete tasks[todolistsID]
        setTask({...tasks})
    }

    const addTodolist = (title: string) => {
        const newTodolistId = v1()
        const newTodolist: TodolistType = {id: newTodolistId, title: title, filter: 'All'}
        setTodolists([newTodolist, ...todolists])
        setTask({...tasks, [newTodolistId]: []})
    }

    const changeTitleTask = (todolistId: string, taskId: string, newTitle: string) => {
        setTask({...tasks, [todolistId]: tasks[todolistId].map(el => el.id === taskId ? {...el, title: newTitle} : el)})
    }

    const changeTodolistTitle = (todolistId: string, newTitle: string) => {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, title: newTitle} : el))
    }

    return (
        <div className="App">
            <AppBar style={{display: 'flex', flexDirection: 'row', padding: '0 20px'}}>
                <IconButton edge='start' color='inherit' aria-label='menu'>
                    <Menu/>
                </IconButton>
                <Typography variant='h6'>
                    Todolist
                </Typography>
                <Button color='inherit'>Login</Button>
            </AppBar>
            <Container fixed>
                <Grid container>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {todolists.map(todolist => {
                        let tasksForTodolist = tasks[todolist.id]

                        if (todolist.filter === 'Active') {
                            tasksForTodolist = tasks[todolist.id].filter(task => !task.isDone)
                        }

                        if (todolist.filter === 'Completed') {
                            tasksForTodolist = tasks[todolist.id].filter(task => task.isDone)
                        }
                        return <Grid item>
                            <Todolist key={todolist.id}
                                      id={todolist.id}
                                      title={todolist.title}
                                      tasks={tasksForTodolist}
                                      removeTask={removeTask}
                                      changeFilter={changeFilter}
                                      addTask={addTask}
                                      checkBoxChangeTask={checkBoxChangeTask}
                                      filter={todolist.filter}
                                      removeTodolist={removeTodolist}
                                      changeTitleTask={changeTitleTask}
                                      changeTodolistTitle={changeTodolistTitle}
                            />
                        </Grid>
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
