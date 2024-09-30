import React from "react";

function NewTodo(props) {
  props.onNewTodo({
    name: "Al Amin",
    age: 34,
    father: "Syed Ahmed",
    mother: "Mamataj Begum",
  });
  return <div>NewTodo</div>;
}

export default NewTodo;
