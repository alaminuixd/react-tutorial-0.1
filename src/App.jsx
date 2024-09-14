import React from "react";
import CardClass from "./components/07-class-component/CardClass";
import "./App.css";
// custom component 1
function Welcome1() {
  // This happens under the hood
  return React.createElement(
    "h1",
    {},
    "Welcome brother and sister from Welcome1"
  );
}
// custom component 2
function Welcome2() {
  return <h1>I would like to have a warm welcome!</h1>;
}
// custom component 3
function Todos() {
  return (
    <div>
      <h2>Welcome to the Todos area.</h2>
      <h3>Todos Title</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}
// custom component 4 [Behind the scene]
function Todos2() {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Welcome to the Todos2 area"),
    React.createElement("h3", {}, "Todos2 Title"),
    React.createElement(
      "p",
      {},
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    )
  );
}

function App() {
  return (
    <div className="container">
      <h1 className="title">BD Store</h1>
      <CardClass str={"Hello world"} />
      <Welcome1 />
      <Welcome2 />
      <Todos />
      <Todos2 />
    </div>
  );
}

export default App;
