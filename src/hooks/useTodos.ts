import create from "zustand";
import { devtools } from "zustand/middleware";

import { Todo } from "../types";

interface UseTodos {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (todoId: number) => void;
  getTodos: () => void;
}

export const useTodos = create<UseTodos>(
  devtools((set) => ({
    todos: [],
    addTodo: (text: string) =>
      set((state) => {
        let { id } = state.todos[state.todos.length - 1];
        return {
          ...state,
          todos: [...state.todos, { id: ++id, text }],
        };
      }),
    removeTodo: (todoId: number) =>
      set((state) => ({
        ...state,
        todos: state.todos.filter(({ id }) => id !== todoId),
      })),

    getTodos: async () => {
      const fetchedTodos = await (
        await fetch("http://localhost:3000/api/todos")
      ).json();
      set({ todos: fetchedTodos });
    },
  }))
);
