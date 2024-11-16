import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styles from "./NewTodo.module.css";

function NewTodo(props) {
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: "",
    body: "",
  });
  const titleRef = useRef(null);
  useEffect(() => {
    const successTime = setTimeout(() => setSuccess(false), 2000);
    return () => clearTimeout(successTime);
  }, [success]);
  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name.length >= 0 && setErr("");
    setSuccess(false);
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
      setErr("Title and Details both fields are required");
      setSuccess(false);
      return;
    }
    const todoWithId = {
      id: uuidv4(),
      ...newTodo,
    };
    props.onNewTodo(todoWithId);
    setSuccess(true);
    setErr("");
    setNewTodo({
      title: "",
      body: "",
    });
    titleRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Todo Title:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={newTodo.title}
        ref={titleRef}
        onChange={handleInputChange}
      />
      <label htmlFor="body">Todo Details:</label>
      <textarea
        name="body"
        id="body"
        value={newTodo.body}
        onChange={handleInputChange}
      />
      <button className={styles["submit"]}>Add Todo</button>
      {success && (
        <p className={styles["success"]}>New Todod added successfully.</p>
      )}
      {err && <p className={styles["error"]}>{err}</p>}
    </form>
  );
}

export default NewTodo;
