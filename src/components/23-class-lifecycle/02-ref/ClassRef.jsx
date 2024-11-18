import React, { Component, createRef } from "react";

import styles from "./ClassRef.module.css";

export default class ClassRef extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = createRef();
    this.passwordRef = createRef();
    this.state = {};
  }
  handleInputChange = (e) => {
    e.preventDefault();
    console.log(this.usernameRef.current.value);
    console.log(this.passwordRef.current.value);
    this.usernameRef.current.style.backgroundColor = "green";
    this.usernameRef.current.style.color = "white";
  };
  render() {
    return (
      <div className={styles["main-container"]}>
        <form onSubmit={this.handleInputChange}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            ref={this.usernameRef}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={this.passwordRef}
          />
          <button type="submit">Create User</button>
        </form>
      </div>
    );
  }
}
