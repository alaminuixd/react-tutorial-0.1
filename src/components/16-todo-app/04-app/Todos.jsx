import React from "react";

import styles from "./Todos.module.css";
import Todo from "./Todo";

function Todos(props) {
  const todos = props.todos;
  return (
    <div>
      {todos.length === 0 ? (
        <h3 className={`${styles["todo-list"]} ${styles["no-todo-found"]}`}>
          No Todos found!
        </h3>
      ) : (
        todos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo} onDeleteTodo={props.onDeleteTodo} />
          );
        })
      )}
    </div>
  );
}

export default Todos;
