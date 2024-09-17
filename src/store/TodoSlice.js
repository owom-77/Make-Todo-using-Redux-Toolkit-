import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos: [],
}

export let TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            let newObj = {
                id : nanoid(),
                todo : action.payload,
            }
            state.todos.push(newObj)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((val)=>(val.id !== action.payload))
        },

        updateTodo: (state, action) => {
            state.todos.map((val) => (val.id === action.payload.id ? {...val,todo : action.payload.msg} : val))

            //console.log(action.payload.id, action.payload.msg)
        }
    }
})

export let { addTodo, removeTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
