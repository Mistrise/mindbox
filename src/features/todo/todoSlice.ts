import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../../store.ts";
import {v4 as uuidv4} from "uuid";


// Define a type for the slice state
interface TodoState {
    todo: string,
    id: string,
    status: "COMPLETE" | "INCOMPLETE"
}

// Define the initial state using that type
const initialState: TodoState[] = []

export const todoSlice = createSlice({
    name: 'todo',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({ id: uuidv4(), todo: action.payload, status: "INCOMPLETE" })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.filter(todo => todo.id !== action.payload)
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        editStatus: (state, action: PayloadAction<string>) => {
            state.map(todo => {
                if(todo.id === action.payload) return {id: todo.id, todo: todo.todo, status: todo.status === "COMPLETE" ? "INCOMPLETE" : "COMPLETE" }
                return todo
            })
        },
    },
})

export const { addTodo, removeTodo, editStatus } = todoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTodo = (state: RootState) => state.todos

export default todoSlice.reducer