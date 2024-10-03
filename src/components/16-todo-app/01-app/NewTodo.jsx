import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodo.style.css";

function NewTodo(props) {
  const [newTodo, setNewTodo] = useState({
    id: uuidv4(),
    title: "",
    desc: "",
  });
  const handleInput = (e) => {
    setNewTodo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTodo(newTodo);
    setNewTodo({
      id: uuidv4(),
      title: "",
      desc: "",
    });
  };
  return (
    <form className="new-todo" onSubmit={handleSubmit}>
      <label htmlFor="title">Todo Title:</label>
      <input
        type="text"
        name="title"
        value={newTodo.title}
        onChange={handleInput}
      />
      <label htmlFor="desc">Todo Description:</label>
      <textarea name="desc" value={newTodo.desc} onChange={handleInput} />
      <button type="submit" className="btn btn-primary">
        Add Item
      </button>
    </form>
  );
}
export default NewTodo;
