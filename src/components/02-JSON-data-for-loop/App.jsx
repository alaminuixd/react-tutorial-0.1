import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import "./App.css";
function App() {
  const cardItems = [];
  for (let i = 0; i < Data.length; i++) {
    cardItems.push(
      <Card
        key={i}
        title={Data[i].title}
        content={Data[i].content}
        date={Data[i].date}
      />
    );
  }
  console.log(Array.isArray(cardItems));
  return (
    <>
      <header>
        <div className="container">
          <h1>Todo App</h1>
        </div>
      </header>
      <main>{cardItems}</main>
      <footer></footer>
    </>
  );
}

export default App;
