import React, { useState } from "react";

import styles from "./useReducer.module.css";

const bookdData = [
  { id: 1, name: "Pather Panchal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanta" },
];
// success component
const Success = ({ successText }) => {
  return <p className={styles["success"]}>{successText}</p>;
};
// userReducer component
function UseReducer() {
  const [books, setBooks] = useState(bookdData);
  const [newBook, setNewBook] = useState("");
  const [err, setErr] = useState(null);
  const [successStatus, setSuccessStatus] = useState(false);
  const [successText, setSuccessText] = useState("");
  // handler functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook) {
      setErr("Book name can't be empty.");
      setSuccessText("");
      return;
    }
    const newBookObj = { id: new Date().getTime().toString(), name: newBook };
    setBooks((prev) => {
      return [...prev, newBookObj];
    });
    setNewBook("");
    setSuccessText("Book name is added successfully.");
    setErr(null);
    setSuccessStatus(true);
  };
  return (
    <div>
      <h2 className={styles["text-center"]}>Books List</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookName">Book Name:</label>
        <input
          type="text"
          name="bookName"
          id="bookName"
          value={newBook}
          onChange={(e) => {
            setNewBook(e.target.value);
          }}
        />
        <button type="submit">Add Book Name</button>
      </form>
      {successStatus && <Success successText={successText} />}
      {err && <p className={styles["error"]}>{err}</p>}
      <ul>
        {books &&
          books.map((book) => {
            const { id, name } = book;
            return <li key={id}>{name}</li>;
          })}
      </ul>
    </div>
  );
}

export default UseReducer;
