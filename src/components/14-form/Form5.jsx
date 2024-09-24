import React from "react";
import { useState } from "react";

function Form4() {
  const [name, setName] = useState({
    uname: "Al Amin",
    age: 34,
    father: "Syed Ahmed",
    mother: "Mamataz Begum",
  });
  const { uname, age, father, mother } = name;
  const handleInfo = (e) => {
    const clickedText = e.target.innerText;
    if (clickedText === uname) {
      setName((perv) => {
        return { ...perv, uname: uname + " clicked" };
      });
    }
    if (clickedText === age.toString()) {
      setName((perv) => ({ ...perv, age: age + " clicked" }));
    }
    if (clickedText === father) {
      setName((perv) => ({ ...perv, father: father + " clicked" }));
    }
    if (clickedText === mother) {
      setName((perv) => ({ ...perv, mother: mother + " clicked" }));
    }
  };
  return (
    <div onClick={handleInfo}>
      <ul>
        <li>{uname}</li>
        <li>{age}</li>
        <li>{father}</li>
        <li>{mother}</li>
      </ul>
    </div>
  );
}

export default Form4;
