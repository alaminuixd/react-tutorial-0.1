import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummyTodos = ["todo1", "todo2"];

function Home() {
  const [todos, setTodos] = useState(dummyTodos);
  const handleOnNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <NewTodo onNewTodo={handleOnNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}

export default Home;
