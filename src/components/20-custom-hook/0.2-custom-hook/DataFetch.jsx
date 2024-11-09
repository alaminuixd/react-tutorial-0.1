import React, { useEffect, useState } from "react";
import styles from "./DataFetch.module.css";
import useFetch from "./useFetch";
function DataFetch() {
  const { isLoading, isErr, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const todosElement =
    data &&
    data.map((todo) => {
      return (
        <div key={todo.id} className={styles["todo"]}>
          <p>
            <strong>Name: {todo.name}</strong>
          </p>
          <p>User Name: {todo.username}</p>
          <p>Email: {todo.email}</p>
        </div>
      );
    });
  return (
    <div className={styles["home-container"]}>
      {isLoading && <p>Data is loading...</p>}
      {isErr && <p>{isErr}</p>}
      {todosElement}
    </div>
  );
}

export default DataFetch;
