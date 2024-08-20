import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../slice/todoSlices";

export default configureStore({
    reducer: {
        todos: todoReducer
    }
})