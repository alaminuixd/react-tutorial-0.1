import React, { useState } from "react";
import Todos from "./Todos";
import "./Home.css";
import NewTodo from "./NewTodo";

const dummyArray = ["Waking up early", "Taking shower"];

function Home() {
  const [todos, setTodos] = useState(dummyArray);
  // This state lifting function will execute only on the form submission event in "NewTodo.jsx"
  const handleNewTodo = (newTodo) => {
    setTodos((prev) => {
      console.log("Prev: ", prev);
      console.log("newTodo:", newTodo);
      return [...prev, newTodo];
    });
  };
  return (
    <div className="home-container">
      <NewTodo onNewTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}
export default Home;
