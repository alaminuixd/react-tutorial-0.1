import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
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
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <Button
          variant="primary"
          size="lg"
          onClick={this.handleInc}
          disabled={count >= 20 ? true : false}
        >
          +
        </Button>{" "}
        <Button
          variant="primary"
          size="lg"
          onClick={this.handleDec}
          disabled={count === 0 ? true : false}
        >
          -
        </Button>{" "}
      </div>
    );
  }
}
