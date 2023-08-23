import {v1} from "uuid";
import {addNewTodolistAC, changeTodolistTitleAC, removeTodolistAC, todolistsReducer} from "./todolists-reducer";
import {TodolistType} from "../App";


let todolistId1: string;
let todolistId2: string;

let startState: Array<TodolistType>

beforeEach(() => {
    todolistId1 = v1();
    todolistId2 = v1();

    const startState = [
        {id: todolistId1, title: 'What to learn', filter: 'All'},
        {id: todolistId2, title: 'What to buy', filter: 'All'}
    ]
})

test('todolist reducer should remove a todolist', () => {
    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))
    expect(endState!.length).toEqual(1);
    expect(endState[0].id).toEqual(todolistId2)
})

test('todolist reducer should add new todolist', () => {
    const startState: TodolistType[] = [
        {id: v1(), title: 'What to train', filter: 'All'},
        {id: v1(), title: 'What to buy', filter: 'All'}
    ]

    const newTodolistTitle = 'What to gone'
    const endState = todolistsReducer(startState, addNewTodolistAC(newTodolistTitle))

    expect(endState!.length).toEqual(3)

})

test('todolist reducer should change the name of todolist', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: TodolistType[] = [
        {id: todolistId1, title: 'What to train', filter: 'All'},
        {id: todolistId2, title: 'What to buy', filter: 'All'}
    ]

    const newTodolistTitle = 'What is going on'
    const endState = todolistsReducer(startState, changeTodolistTitleAC(todolistId2, newTodolistTitle))

    expect(endState[0].title).toBe('What to train')
    expect(endState[1].title).toBe(newTodolistTitle)
})
