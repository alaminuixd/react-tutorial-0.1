import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styles from "./NewTodo.module.css";

function NewTodo(props) {
  const [isErr, setIsErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: "",
    body: "",
  });
  const focusRef = useRef(null);

  useEffect(() => {
    const successTimer = setTimeout(() => setSuccess(false), 5000);
    return () => clearTimeout(successTimer);
  }, [success]);
  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSuccess(false);
    setIsErr("");
    setNewTodo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.title.trim() || !newTodo.body.trim()) {
      setIsErr("Title and Details both fields are required.");
      setSuccess(false);
      return;
    }
    const newTodoWithId = { id: uuidv4(), ...newTodo };
    props.onNewTodo(newTodoWithId);
    setIsErr("");
    setSuccess(true);
    setNewTodo({
      title: "",
      body: "",
    });
    focusRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Todo Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        ref={focusRef}
        value={newTodo.title}
        onChange={handleInputChange}
      />
      <label htmlFor="body">Todo Details:</label>
      <textarea
        name="body"
        id="body"
        value={newTodo.body}
        onChange={handleInputChange}
      />
      {isErr && <p className={styles["error"]}>{isErr}</p>}
      {success && (
        <p className={styles["success"]}>New Todo is added successfully.</p>
      )}
      <button className={styles["submit"]}>Add new todo</button>
    </form>
  );
}

export default NewTodo;
