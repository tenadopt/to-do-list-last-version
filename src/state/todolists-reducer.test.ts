import {v1} from "uuid";
import {userReducer} from "./user-reducer";
import {getNewTodolistAC, todolistsReducer} from "./todolists-reducer";
import {TodolistType} from "../App";


test('todolist reducer should add new todolist', () => {
    const startState: TodolistType[] = [
        {id: v1(), title: 'What to train', filter: 'All'},
        {id: v1(), title: 'What to buy', filter: 'All'}
    ]

    const newTodolist = {id: v1(), title: 'What to fuck', filter: 'All'} as TodolistType
    const endState = todolistsReducer(startState, getNewTodolistAC(newTodolist))

    expect(endState!.length).toEqual(3)

})

