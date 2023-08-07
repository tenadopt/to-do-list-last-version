import {TodolistType} from "../App";

type ActionType = {
    type: string
    [key: string]: any
}

export const todolistsReducer = (state: TodolistType[], action: ActionType) => {
    switch (action.type) {
        case 'ADD-TO-LIST' : {
            return [...state, action.payload.newTodolist]
        }
        case 'REMOVE-TODOLIST' : {
            return state.filter(el=>el.id!==action.payload.todolistId)
        }
    }
}

export const getNewTodolistAC = (newTodolist: TodolistType) => (
    {
        type: 'ADD-TO-LIST',
        payload: {
            newTodolist
        }
    }
)

export const removeTodolistAC = (todolistId: string) =>(
    {
        type: 'REMOVE-TODOLIST',
            payload: {
            todolistId
            }
    }
)





