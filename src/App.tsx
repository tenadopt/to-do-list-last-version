import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValueType = 'All' | 'Active' | 'Completed'


function App() {
    const [tasks, setTask] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}])

    const [filter, setFilter] = useState<FilterValueType>('All')

    let tasksForTodolist = tasks

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(task => !task.isDone)
    }

    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(task => task.isDone)
    }

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    const addTask = (title: string) => {
        const newTask = {id: v1(), title: title, isDone: false}
        setTask([newTask, ...tasks])
    }

    // let tasks1 = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false}
    // ]
    // const tasks2 = [
    //     {id: 1, title: "Hello world", isDone: true},
    //     {id: 2, title: "I am Happy", isDone: false},
    //     {id: 3, title: "Yo", isDone: false}
    // ]

    const removeTask = (id: string) => {
        const filtredTasks1 = tasks.filter(el => el.id !== id)
        setTask(filtredTasks1)
    }

    const checkBoxChangeTask = (taskId: string, newIsDoneValue: boolean) => {
        let task = tasks.find(el => el.id == taskId)
        if (task) {
            task.isDone = newIsDoneValue;
            setTask([...tasks])
        }
    }


    return (
        <div className="App">
            <Todolist
                title='What to do'
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                checkBoxChangeTask={checkBoxChangeTask}
            />
        </div>
    );
}

export default App;
