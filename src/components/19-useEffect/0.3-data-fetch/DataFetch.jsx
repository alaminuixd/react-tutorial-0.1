import React, { useState, useEffect } from "react";

import styles from "./DataFetch.module.css";
const loadingMessage = "The data is loading...";
function DataFetch() {
  const [todos, setTodos] = useState(null);
  const [loading, isLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/userss", {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw Error("The data url is invalid");
          }
          return response.json();
        })
        .then((data) => {
          setTodos((prev) => data);
          isLoading(false);
        })
        .catch((err) => {
          setError((prev) => err.message);
          isLoading(false);
        });
    }, 3000);
  }, []);

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
  return (
    <div className={styles["home-container"]}>
      <h1>Todo Details</h1>
      {todosElement}
      {loading && <p>{loadingMessage}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default DataFetch;
