import React, { Component } from "react";
import Button from "react-bootstrap/Button";
export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
    this.handleInc = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    this.handleDec = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };
    this.handleName = (e) => {
      this.setState({
        name: e.target.value,
      });
    };
  }
  render() {
    const { count, name } = this.state;
    return (
      <div>
        <h1>The number is {count}</h1>
        <Button
          variant="primary"
          size="lg"
          onClick={this.handleDec}
          disabled={count === 0 ? true : false}
        >
          -
        </Button>{" "}
        <Button
          variant="primary"
          size="lg"
          onClick={this.handleInc}
          disabled={count === 10 ? true : false}
        >
          +
        </Button>{" "}
        <h1>Your name is {name || "default name"}</h1>
        <input
          type="text"
          name="myName"
          placeholder="default name"
          onChange={this.handleName}
        />
      </div>
    );
  }
}
