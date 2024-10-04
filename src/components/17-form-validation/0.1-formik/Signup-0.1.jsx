import React, { useState } from "react";
import styles from "./Signup.module.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [totalInput, setTotalInput] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation: Check if any field is empty
    if (!name || !email || !password) {
      alert("All input fields are required");
      return;
    }
    // I am inserting all fields "name, email, password" into an object and colsoling.
    console.log({ name, email, password });
    // If all fields are filled, update the totalInput state
    setTotalInput((prev) => [...prev, { name, email, password }]);

    // Clear the input fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles["home-container"]}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Your Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Your Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleInputChange}
        />
        <button className={styles.submit}>Signup Now</button>
      </form>
      <div>
        {totalInput.length > 0 &&
          totalInput.map((item, index) => (
            <div key={index}>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Password: {item.password}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Signup;
