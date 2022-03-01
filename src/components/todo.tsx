import { NextPage } from "next";
import { useTodos } from "../hooks";
import { Todo as ITodo } from "../types";

interface TodoProps {
  todo: ITodo;
}

export const Todo: NextPage<TodoProps> = ({ todo }) => {
  const removeTodo = useTodos((state) => state.removeTodo);

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>remove</button>
    </div>
  );
};
