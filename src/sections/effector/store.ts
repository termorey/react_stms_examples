import { createStore, createEvent, createEffect } from "effector";
import type { Todo } from "../types";

type Store = {
  value: number;
  todos: Todo[];
};

const initialState: Store = {
  value: 0,
  todos: []
};

export const increase = createEvent();
export const decrease = createEvent();
export const reset = createEvent();

export const fetchTodosFx = createEffect(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
});

export const $store = createStore<Store>(initialState)
  .on(increase, (state) => ({ ...state, value: state.value + 1 }))
  .on(decrease, (state) => ({ ...state, value: state.value - 1 }))
  .on(fetchTodosFx.doneData, (state, payload) => ({ ...state, todos: payload }))
  .reset(reset);
