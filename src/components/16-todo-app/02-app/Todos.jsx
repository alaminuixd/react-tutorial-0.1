import React from "react";
import styles from "./Todos.module.css";
import Todo from "./Todo";

function Todos(props) {
  return (
    <div>
      {props.todos.length === 0 ? (
        <h3 className={`${styles["todo-list"]} ${styles["no-todo-found"]}`}>
          No Todo list is found.
        </h3>
      ) : (
        props.todos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} onDeleteTodo={props.onDeleteTodo} />
          );
        })
      )}
    </div>
  );
}

export default Todos;
