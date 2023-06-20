import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Todo } from "../types";

type State = {
  value: number;
  todos: Todo[];
};
type Actions = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  fetchTodos: () => void;
};
type Store = State & Actions;

const initialState = {
  value: 0,
  todos: []
};

export const useStore = create<Store>()(
  immer((set, get) => ({
    ...initialState,
    increment: () => {
      set({ value: get().value + 1 });
    },
    decrement: () => {
      set((s) => {
        s.value--;
      });
    },
    reset: () => {
      set(initialState);
    },
    fetchTodos: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todos = await response.json();
      set((s) => {
        s.todos = todos;
      });
    }
  }))
);
