import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1,text:"Hello ji This is Saini"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            const todo ={
                id:nanoid(),
                text: action.payload
            }

            state.todos.push(todo);
        },
        removeTodo: (state,action) =>{
            for (let i=0; i<=state.todos.length; i++){
                if(state.todos[i].id === action.payload){
                    state.todos.pop(state.todos[i]);
                }
            }
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;