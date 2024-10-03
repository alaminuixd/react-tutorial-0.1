import React from "react";
import "./Todos.style.css";
import Todo from "./Todo";

function Todos(props) {
  return (
    <section>
      {props.todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} />
        );
      })}
    </section>
  );
}

export default Todos;
