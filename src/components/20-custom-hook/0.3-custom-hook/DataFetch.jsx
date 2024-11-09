import React, { useEffect, useState } from "react";

import useFetch from "./useFetch";
import styles from "./DataFetch.module.css";
function DataFetch() {
  const { isLoading, isErr, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div className={styles["home-container"]}>
      {isLoading && <p>Data is loading...</p>}
      {isErr && <p>{isErr}</p>}
      {data &&
        data.map((todo) => {
          return (
            <div key={todo.id} className={styles["todo"]}>
              <p>
                <strong>Name: {todo.name}</strong>
              </p>
              <p>Username: {todo.username}</p>
              <p>Email: {todo.email}</p>
            </div>
          );
        })}
    </div>
  );
}

export default DataFetch;
