import React, { Component } from "react";

import styles from "./LifeCycle.module.css";
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div className={styles["main-container"]}>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleInc}>+</button>
      </div>
    );
  }
}
