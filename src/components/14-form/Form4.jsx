import { useState } from "react";
import "./Form1.css";
function Form3() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = user;
  const handleChange = (e) => {
    const fieldName = e.target.name;
    {
      /* if (fieldName === "name") {
            setUser((prev) => ({ ...prev, username: e.target.value }));
          }
          if (fieldName === "email") {
            setUser((prev) => ({ ...prev, email: e.target.value }));
          }
          if (fieldName === "password") {
            setUser((prev) => ({ ...prev, password: e.target.value }));
          } */
    }
    /* if (fieldName === "name") {
      setUser({ username: e.target.value, email, password });
    }
    if (fieldName === "email") {
      setUser({ username, email: e.target.value, password });
    }
    if (fieldName === "password") {
      setUser({ username, email, password: e.target.value });
    } */
    setUser({ ...user, [e.target.name]: e.target.value });
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
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          className="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          className="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
        />
        <button type="submit" className="button my-4">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form3;
