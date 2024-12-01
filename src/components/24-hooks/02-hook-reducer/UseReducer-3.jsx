import React, { useReducer, useState } from "react";

import styles from "./UseReducer.module.css";

const bookData = [
  { id: 1, name: "Pather Panchal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanta" },
];

function Modal({ modalText }) {
  // this is a component
  return <p className={styles["modal-text"]}>{modalText}</p>;
}

const reducer = (currState, action) => {
  console.log(currState);
  if (action.type === "ADD") {
    const allBooks = [...currState.books, action.payload];
    return {
      ...currState,
      books: allBooks,
      isModalOpen: true,
      modalText: "New book added",
    };
  }
};

function UseReducer() {
  const [bookState, dispatch] = useReducer(reducer, {
    books: bookData,
    isModalOpen: false,
    modalText: "",
  });
  const [newBook, setNewBook] = useState("");
  // handler functions
  const handleInputChange = (e) => {
    setNewBook(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.trim()) return;
    const bookObj = { id: new Date().getTime().toString(), name: newBook };
    dispatch({ type: "ADD", payload: bookObj });
    setNewBook("");
  };

  return (
    <div className={styles["container"]}>
      <h1>Book List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newBook">New Book Name: </label>
        <input
          type="text"
          name="newBook"
          placeholder="Type a book name"
          value={newBook}
          onChange={handleInputChange}
        />
        <button>Add the book</button>
      </form>
      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
      <div className={styles["book-container"]}>
        <ul>
          {bookState.books &&
            bookState.books.map((book) => {
              const { id, name } = book;
              return <li key={book.id}>Book Name: {name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default UseReducer;
