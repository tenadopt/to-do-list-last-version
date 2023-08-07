import {TodolistType} from "../App";
import {v1} from "uuid";


export const todolistsReducer = (state: TodolistType[], action: ActionsType) => {
    switch (action.type) {
        case 'ADD-TO-LIST' : {
            return [...state, {id: action.payload.todolistId, title: action.payload.title, filter: 'All'}]
        }
        case 'REMOVE-TODOLIST' : {
            return state.filter(el=>el.id!==action.payload.id)
        }
    }
}

type ActionsType = getNewTodolistACType | removeTodolistACType

export type getNewTodolistACType = ReturnType<typeof getNewTodolistAC>

export const getNewTodolistAC = (newTodolistTitle: string) => (
    {
        type: 'ADD-TO-LIST',
        payload: {
            title: newTodolistTitle,
            todolistId: v1()
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





