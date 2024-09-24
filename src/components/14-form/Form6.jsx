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
