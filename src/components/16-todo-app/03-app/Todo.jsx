import React from "react";

import { FaTrashCan } from "react-icons/fa6";
import styles from "./Todos.module.css";
function Todo({ id, title, body, onDeleteTodo }) {
  const handleDeleteTodo = (deleteId) => {
    onDeleteTodo(deleteId);
  };
  return (
    <div className={styles["todo-list"]}>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className={styles["btnDelete"]} onClick={() => handleDeleteTodo(id)}>
        <FaTrashCan />
      </div>
    </div>
  );
}

export default Todo;
