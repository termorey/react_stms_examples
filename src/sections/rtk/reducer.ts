import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types";

type Slice = {
  value: number;
  todos: Todo[];
};

const initialState: Slice = {
  value: 0,
  todos: []
};

export const fetchTodos = createAsyncThunk<Todo[]>("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
});

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    increase: (state) => {
      state.value++;
    },
    decrease: (state) => {
      state.value--;
    },
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.todos = payload;
    });
  }
});

export const { increase, decrease, reset } = commonSlice.actions;

export default commonSlice.reducer;
