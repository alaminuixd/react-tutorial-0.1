import React, { useState, useReducer } from "react";

import styles from "./UseReducer.module.css";

const bookdData = [
  { id: 1, name: "Pather Panchal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanta" },
];

// child component of "UserReducer"
const Model = ({ modelText }) => {
  return (
    <div>
      <p>{modelText}</p>
    </div>
  );
};

// Parent component
function UseReducer() {
  const [books, setBooks] = useState(bookdData);
  const [newBook, setNewBook] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [modelText, setModelText] = useState("");
  // handler functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBookObj = { id: new Date().getTime().toString(), name: newBook };
    setBooks((prev) => {
      return [...prev, newBookObj]; // Make sure to return the new array
    });
    setNewBook(""); // Clear the input after submission
    setIsModelOpen(true);
    setModelText("New book is added");
  };
  return (
    <div>
      <h2>Book Lists</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookName">Your Book Name:</label>
        <input
          type="text"
          name="newBook"
          id="newBook"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)} // Use 'value' instead of 'data'
        />
        <button type="submit">Add new book name</button>
      </form>
      {isModelOpen && <Model modelText={modelText} />}
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
