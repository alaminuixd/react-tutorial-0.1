import React, { useState } from "react";
import "./newTodo.css";

function NewTodo(props) {
  const [todo, setTodo] = useState("");
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTodo(todo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Add new todo: </label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewTodo;
