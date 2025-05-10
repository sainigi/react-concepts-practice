/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todoMsg:"First Msg",
            completed:false
        },
    ],
    addTodo: (todo) =>{},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}