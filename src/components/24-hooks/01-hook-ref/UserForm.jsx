import React, { useRef } from "react";

import styles from "./UserForm.module.css";

function UserForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  let username;
  // hander functions
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, " ", password);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" ref={usernameRef} />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default UserForm;
