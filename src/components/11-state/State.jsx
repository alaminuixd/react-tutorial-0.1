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
      let namVal = e.target.value;
      this.setState({
        name: (this.state.name = namVal),
      });
    };
  }
  render() {
    const { count, name } = this.state;
    console.log(count);
    return (
      <div>
        <h1>The count value is {count}</h1>
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
        {/* Form Area */}
        <h1>Your name is {name}</h1>
        <input
          type="text"
          name="theName"
          placeholder="Your Name"
          onChange={this.handleName}
        />
      </div>
    );
  }
}
