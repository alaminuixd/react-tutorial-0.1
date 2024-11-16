import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";
import { v4 as uuidv4 } from "uuid";
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
  const handleNewTodo = (newTodo) => {
    setTodos((prev) => {
      console.log(prev);
      return [newTodo, ...prev];
    });
  };
  const handleDeleteTodo = (deleteId) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== deleteId);
    });
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className={styles["home-container"]}>
      <h1>Todo App</h1>
      <NewTodo onNewTodo={handleNewTodo} />
      <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default Home;
