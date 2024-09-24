import { useState } from "react";
import "./Form1.css";
function Form1() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleName = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="container">
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          className="name"
          name="name"
          id="name"
          required
          onChange={handleName}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          className="email"
          name="email"
          id="email"
          required
          onChange={handleEmail}
        />
        <label htmlFor="password">Email: </label>
        <input
          type="password"
          className="password"
          name="password"
          id="password"
          required
          onChange={handlePassword}
        />
        <button type="submit" className="button my-4">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form1;
