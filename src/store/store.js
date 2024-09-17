import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

let store = configureStore({
    reducer : TodoSlice,
})

export default store;