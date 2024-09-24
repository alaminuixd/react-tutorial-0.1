import React, { useState } from "react";
import "./Form6.css";

function Form6() {
  const [val, setVal] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const { fName, lName, email, password } = val;
  const handleFields = (e) => {
    setVal((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  };
  return (
    <div className="container">
      <form action="" className="users" onSubmit={handleSubmit}>
        <label htmlFor="fName">First Name: </label>
        <input
          type="text"
          name="fName"
          placeholder="First name"
          onChange={handleFields}
        />
        <label htmlFor="lName">Last Name:</label>
        <input
          type="text"
          name="lName"
          id="lName"
          placeholder="Last name"
          onChange={handleFields}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleFields}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleFields}
        />
        <button className="my-4">Submit</button>
      </form>
    </div>
  );
}

export default Form6;
/* 
1) In useState, there are two array elements: val (the current state) and setVal (the function to update the state).
2) Initially, val contains an object with default properties: { fName: "", lName: "", email: "", password: "" }.
3) The handleFields function is responsible for updating specific fields in the val object when input changes: 
  a) It calls setVal with a callback function that returns a new object. 
  b) The callback function takes prev, which represents the previous state. 
  c) The ...prev spreads the previous state (keeping all current values), and then [e.target.name] dynamically updates the field based on the input’s name attribute, with e.target.value as its new value. 
  d) When another field is updated, the previous values remain unchanged, and only the updated field is modified. e) All these changes are stored in val, reflecting the most recent form state.
4) When the form is submitted, handleSubmit prevents the default behavior and logs the val object, which contains the latest values of all fields.
*/
