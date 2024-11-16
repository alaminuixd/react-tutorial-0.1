import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummyTodo = [
  {
    id: uuidv4(),
    title: "After waking up in the morning.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Before leaving for office",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
function Home() {
  const [todos, setTodos] = useState(dummyTodo);
  // handler functions
  const handleDeleteTodo = (deleteId) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== deleteId);
    });
  };
  const handleNewTodo = (newTodo) => {
    setTodos((prev) => {
      return [newTodo, ...prev];
    });
  };
  return (
    <div className={styles["home-container"]}>
      <h1>Todo App</h1>
      <NewTodo onNewTodo={handleNewTodo} />
      <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default Home;
