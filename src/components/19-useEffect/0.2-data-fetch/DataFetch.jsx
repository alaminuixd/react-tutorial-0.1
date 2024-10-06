import React, { useState, useEffect } from "react";

import styles from "./DataFetch.module.css";

function DataFetch() {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos((prev) => data);
      });
  }, []);
  console.log(todos);
  // elements
  const todosElement =
    todos &&
    todos.map((todo) => {
      return (
        <div key={todo.id} className={styles.todo}>
          <p> Name: {todo.name} </p>
          <p> Username: {todo.username} </p>
          <p>Email: {todo.email} </p>
        </div>
      );
    });
  return <div className={styles["home-container"]}>{todosElement}</div>;
}

export default DataFetch;
