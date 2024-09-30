import React from "react";
import Todo from "./Todo";
import "./Todos.css";

function Todos(props) {
  const todos = props.todos;
  return (
    <ul>
      {todos.map((todo, i) => {
        return <Todo key={i} todo={todo} />;
      })}
    </ul>
  );
}

export default Todos;
