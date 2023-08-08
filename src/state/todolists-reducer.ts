import {FilterValueType, TodolistType} from "../App";
import {v1} from "uuid";


export const todolistsReducer = (state: TodolistType[], action: ActionsType) => {
    switch (action.type) {
        case 'ADD-TODOLIST' : {
            return [...state, {id: action.payload.todolistId, title: action.payload.title, filter: 'All'}]
        }
        case 'REMOVE-TODOLIST' : {
            return state.filter(el=>el.id!==action.payload.id)
        }
        case 'CHANGE-TODOLIST-TITLE' : {
            return state.map(el=>el.id===action.payload.id ? {...el,title: action.payload.title} : el)
        }
        case 'CHANGE-TODOLIST-FILTER' : {
            return state.map(el=>el.id===action.payload.id ? {...el,filter: action.payload.filter} : el)
        }
        default:
            return state
    }
}

type ActionsType = addNewTodolistACType | removeTodolistACType | changeTodolistTitleACType | changeTodolistFilterACType

export type addNewTodolistACType = ReturnType<typeof addNewTodolistAC>

export const addNewTodolistAC = (newTodolistTitle: string) => (
    {
        type: 'ADD-TODOLIST',
        payload: {
            todolistId: v1(),
            title: newTodolistTitle
        }
    } as const
)

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId: string) =>(
    {
        type: 'REMOVE-TODOLIST',
            payload: {
            id: todolistId
            }
    } as const
)

export type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistTitleAC = (todolistId: string, newTodolistTitle: string) => (
    {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id: todolistId,
            title: newTodolistTitle
        }
    } as const
)

export type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>

export const changeTodolistFilterAC = (todolistId: string, newTodolistFilter: FilterValueType) => (
    {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id: todolistId,
            filter: newTodolistFilter
        }
    } as const
)





