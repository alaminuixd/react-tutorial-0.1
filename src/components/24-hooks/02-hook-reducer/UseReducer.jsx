import React, { useReducer, useState } from "react";

import styles from "./UseReducer.module.css";
const bookData = [
  { id: 1, name: "Pather Panchal" },
  { id: 2, name: "Padma Nadir Majhi" },
  { id: 3, name: "Srikanta" },
];
function ModalText({ modalText }) {
  return <p className={styles["modal-text"]}>{modalText}</p>;
}
const reducer = (currState, action) => {
  //   console.log(currState);
  if (action.type === "ADD") {
    const totalBook = [...currState.books, action.payload];
    return {
      ...currState,
      books: totalBook,
      isModalOpen: true,
      modalText: "New book is added",
    };
  }
  if (action.type === "REMOVE") {
    const filteredBooks = [...currState.books].filter(
      (book) => book.id !== action.payload
    );
    console.log(filteredBooks);
    return {
      ...currState,
      books: filteredBooks,
      isModalOpen: true,
      modalText: "The book item removed",
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
  // hander functions
  const handleInputChange = (e) => {
    setNewBook(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newBook.trim()) return;
    const newBookObj = { id: new Date().getTime().toString(), name: newBook };
    dispatch({ type: "ADD", payload: newBookObj });
    setNewBook("");
  };
  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <div className={styles["container"]}>
      <h1>Book List</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newBook">New Book Name: </label>
        <input
          type="text"
          name="newBook"
          placeholder="Type your book name"
          value={newBook}
          onChange={handleInputChange}
        />
        <button>Add the book</button>
      </form>
      {bookState.isModalOpen && <ModalText modalText={bookState.modalText} />}
      <div className={styles["book-container"]}>
        <ul>
          {bookState.books.length === 0 ? (
            <h2>No Item found</h2>
          ) : (
            bookState.books.map((book) => {
              const { id, name } = book;
              return (
                <li key={id}>
                  {name}{" "}
                  <button
                    className={styles["deleteBook"]}
                    onClick={() => removeBook(id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default UseReducer;
