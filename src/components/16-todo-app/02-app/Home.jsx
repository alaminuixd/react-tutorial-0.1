import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
const dummyTodos = [
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
  const [todos, setTodos] = useState(dummyTodos);
  // handeler functions
  const handleNewTodo = (newTodo) => {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };
  const handleDeleteTodo = (deleteId) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== deleteId;
      });
    });
  };
  return (
    <div className={styles["home-container"]}>
      <h2>Todo App</h2>
      <NewTodo onNewTodo={handleNewTodo} />
      <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default Home;
