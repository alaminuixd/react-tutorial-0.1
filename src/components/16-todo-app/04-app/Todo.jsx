import React from "react";

import { FaTrashCan } from "react-icons/fa6";
import styles from "./Todos.module.css";

function Todo({ id, title, body, onDeleteTodo }) {
  // handler functions
  const handleDeleteTodo = () => {
    onDeleteTodo(id);
  };
  return (
    <div className={styles["todo-list"]}>
      <div>
        {title && <h3>{title}</h3>}
        {body && <p>{body}</p>}
      </div>
      <div className={styles["btnDelete"]} onClick={handleDeleteTodo}>
        <FaTrashCan />
      </div>
    </div>
  );
}

export default Todo;
