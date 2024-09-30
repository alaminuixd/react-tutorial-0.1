import React, { useState } from "react";
import "./NewTodo.css";

function NewTodo(props) {
  const [newTodo, setNewTodo] = useState("");
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newTodos">Add a new todo</label>
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit">Add now</button>
    </form>
  );
}

export default NewTodo;
