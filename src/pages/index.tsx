import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";

import { Todo } from "../components/todo";
import { useTodos } from "../hooks";

const Home: NextPage = () => {
  const { todos, addTodo } = useTodos((state) => state);
  const [todoText, setTodoText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoText(value);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={() => addTodo(todoText)}>add todo</button>
      <br />
      <hr />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Home;
