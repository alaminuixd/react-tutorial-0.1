import { useState } from "react";
import "./Form1.css";
function Form3() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = user;
  const handleName = (e) => {
    setUser({ username: e.target.value, email, password });
  };
  const handleEmail = (e) => {
    setUser({ username, email: e.target.value, password });
  };
  const handlePassword = (e) => {
    setUser({ username, email, password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
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
        <label htmlFor="password">Password: </label>
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
export default Form3;
