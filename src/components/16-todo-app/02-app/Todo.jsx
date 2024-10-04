import React from "react";

import { FaTrashCan } from "react-icons/fa6";
import styles from "./Todos.module.css";

function Todo(props) {
  const handleDeleteTodo = (id) => {
    props.onDeleteTodo(id);
  };
  return (
    <div className={`${styles["todo-list"]}`}>
      <div>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.body}</p>
      </div>
      <div
        className={styles["btnDelete"]}
        onClick={() => {
          // "props.todo.id" catches current clicked item id
          handleDeleteTodo(props.todo.id);
        }}
      >
        <FaTrashCan />
      </div>
    </div>
  );
}

export default Todo;
