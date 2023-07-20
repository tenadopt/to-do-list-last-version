import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValueType = 'All'|'Active'|'Completed'



function App() {
    const [tasks, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}])

    const [filter, setFilter] = useState<FilterValueType>('All')

    let tasksForTodolist = tasks

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }

    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    let tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    const removeTask = (id: number) => {
        const filtredTasks1 = tasks.filter(el => el.id !== id)
        setTask(filtredTasks1)
    }


    return (
        <div className="App">
            <Todolist
                title='What to do'
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
