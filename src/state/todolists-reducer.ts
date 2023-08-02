import {TodolistType} from "../App";

export const todolistsReducer = (state: TodolistType[], action: newTodolistTypeAC) => {
    switch (action.type) {
        case 'ADD-TO-LIST' : {
            return [...state, action.payload]
        }
    }
}

export const getNewTodolistAC = (newTodolist: TodolistType) => (
    {
        type: 'ADD-TO-LIST',
        payload: newTodolist
    }
)

type newTodolistTypeAC = ReturnType<typeof getNewTodolistAC>


