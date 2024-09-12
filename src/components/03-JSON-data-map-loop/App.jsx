import React from "react";
import Card from "./components/Card";
import Data from "./data.json";
import "./App.css";
function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Todo App</h1>
        </div>
      </header>
      <main>
        {Data.map((item, index) => (
          <Card key={index} title={item.title} content={item.content} date={item.date} />
        ))}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
