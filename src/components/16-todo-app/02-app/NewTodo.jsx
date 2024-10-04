import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./NewTodo.module.css";

function NewTodo(props) {
  const [newTodo, setNewTodo] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const titleInputRef = useRef(null); // Ref for focusing title input

  const handleInputChange = (e) => {
    setNewTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.title.trim() || !newTodo.body.trim()) {
      setError("Please fill both fields up.");
      setSuccess(false);
      return;
    }
    const newTodoWithId = { ...newTodo, id: uuidv4() };
    props.onNewTodo(newTodoWithId);
    setNewTodo({
      title: "",
      body: "",
    });
    setSuccess(true);
    titleInputRef.current.focus(); // Focus back to title input
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Add a Todo title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={newTodo.title}
        onChange={handleInputChange}
        ref={titleInputRef} // Attach ref to title input
      />
      <label htmlFor="body">Add a Todo body:</label>
      <textarea
        name="body"
        id="body"
        value={newTodo.body}
        onChange={handleInputChange}
      />
      <button className={styles.submit}>Add Todo</button>
      {error && <p className={styles.error}>{error}</p>}
      {success && (
        <p className={styles.success}>Your new Todo is created successfully</p>
      )}
    </form>
  );
}

export default NewTodo;
