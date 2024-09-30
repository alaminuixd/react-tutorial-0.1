import React from "react";
import Todo from "./Todo";

function Todos(props) {
  const todos = props.todos;
  return (
    <div>
      {todos.map((todo, i) => {
        return <Todo key={i} todo={todo} />;
      })}
    </div>
  );
}

export default Todos;
