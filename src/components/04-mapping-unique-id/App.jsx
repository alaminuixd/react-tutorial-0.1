import React from "react";
import "./App.css";
import Header from "./layout/Header";
import NestedMap from "./components/05-nested-obj-mapping/NestedMap";
// custom code
function App() {
  return (
    <>
      <Header/>
      <main>
        <NestedMap/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
