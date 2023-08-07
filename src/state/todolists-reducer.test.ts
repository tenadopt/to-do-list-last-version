import {v1} from "uuid";
import {getNewTodolistAC, removeTodolistAC, todolistsReducer} from "./todolists-reducer";
import {TodolistType} from "../App";

test('todolist reducer should remove a todolist', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: TodolistType[] = [
        {id: todolistId1, title: 'What to train', filter: 'All'},
        {id: todolistId2, title: 'What to buy', filter: 'All'}
    ]

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(endState!.length).toEqual(1)
    expect(endState![0].id).toEqual(todolistId2)


})


test('todolist reducer should add new todolist', () => {
    const startState: TodolistType[] = [
        {id: v1(), title: 'What to train', filter: 'All'},
        {id: v1(), title: 'What to buy', filter: 'All'}
    ]

    const newTodolist = {id: v1(), title: 'What to fuck', filter: 'All'} as TodolistType
    const endState = todolistsReducer(startState, getNewTodolistAC(newTodolist))

    expect(endState!.length).toEqual(3)

})

