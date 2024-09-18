import { createSlice,nanoid } from "@reduxjs/toolkit";

let initialState = {
    todos : [],
}

export let TodoSlice = createSlice({

    name : "Todo",
    initialState,   
    reducers : {
        
        addTodo : (state,action)=>{
            let newObj = {
                id : nanoid(),
                msg : action.payload,
            }
            state.todos.push(newObj)
        },

        updateTodo : (state,action)=>{
            state.todos.map((val)=>(val.id === action.payload.id ? {...val,msg : action.payload.msg} : val))
        },

        deleteTodo : (state,action)=>{
            state.todos = state.todos.filter((val)=>(val.id !== action.payload))
        }
    }
})

export let {addTodo,updateTodo,deleteTodo} = TodoSlice.actions;

export default TodoSlice.reducer;