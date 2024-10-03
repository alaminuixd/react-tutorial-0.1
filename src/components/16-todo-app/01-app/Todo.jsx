import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Todo.style.css";

function Todo(props) {
  const { id, title, desc } = props.todo;

  const handleDelete = () => {
    props.onDeleteTodo(id);
  };

  return (
    <>
      <article className="single-todo">
        <div className="todo-text">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <button className="trush-can" onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </article>
    </>
  );
}

export default Todo;
