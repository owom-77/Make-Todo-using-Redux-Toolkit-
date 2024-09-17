import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    obj: { id: '', todo: '', index: '' },
    todos: [],
}

export let TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            state.obj.id = nanoid();
            state.obj.todo = action.payload;
            state.todos.push(state.obj)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((val) => (val.id !== action.payload))
        },

        updateTodo: (state, action) => {
            state.todos.map((val) => (val.id === action.payload.id ? state.todos.push({ ...val, todo: action.payload.todo }) : val))
        }
    }
})

export let { addTodo, removeTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
