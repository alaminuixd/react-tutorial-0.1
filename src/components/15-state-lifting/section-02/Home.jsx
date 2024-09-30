import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
import "./Home.css";

const dummyTodos = ["todo1", "todo2"];

function Home() {
  const [todos, setTodos] = useState(dummyTodos);
  const handleOnNewTodo = (newTodo) => {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };
  return (
    <div className="home-container">
      <NewTodo onNewTodo={handleOnNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default Home;
