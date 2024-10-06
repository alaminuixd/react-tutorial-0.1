import styles from "./DataFetch.module.css";
import useFetch from "./useFetch";

function DataFetch() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  // elements
  const todosElement =
    data &&
    data.map((todo) => {
      return (
        <div key={todo.id} className={styles.todo}>
          <p> Name: {todo.name} </p>
          <p> Username: {todo.username} </p>
          <p>Email: {todo.email} </p>
        </div>
      );
    });
  // loading message
  const loadingMessage = "The data is loading...";
  // error message
  const errorMessage = <p>{error}</p>;
  return (
    <div className={styles["home-container"]}>
      <h1>Todo Details</h1>
      {todosElement}
      {loading && <p>{loadingMessage}</p>}
      {error && errorMessage}
    </div>
  );
}

export default DataFetch;
