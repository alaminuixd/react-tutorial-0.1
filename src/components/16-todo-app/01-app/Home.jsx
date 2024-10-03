import React, { useState } from "react";
import "./Home.style.css";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

const dummyTodos = [];

function Home() {
  const [todos, setTodos] = useState(dummyTodos);
  const createNewTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  // delete a doto
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div className="container">
      <h1>Todo App</h1>
      <NewTodo onNewTodo={createNewTodo} />
      <Todos todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default Home;
