import { useState } from "react";
import "./Form1.css";
function Form1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formVal = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(
      `Name: ${formVal.name} - Email ${formVal.email} - Password: ${formVal.password}`
    );
    console.log(`Name: ${name} | Email: ${email} | Password: ${password}`);
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
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form1;
