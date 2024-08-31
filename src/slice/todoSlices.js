import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodoList = createAsyncThunk(
    "todoList",
    async() => {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await res.json();
        return data;
    }
    
)

const todoSlices = createSlice({
    name: 'todos',
    initialState: {
        todoList: [],
        show: true,
        loading: false,
    },
    reducers: {
        toggleShow: (state, action) => {
            state.show = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoList.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchTodoList.fulfilled, (state, action) => {
                state.todoList = action.payload;
                state.loading = false;
            })
            .addCase(fetchTodoList.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export const {toggleShow} = todoSlices.actions;
export default todoSlices.reducer;
