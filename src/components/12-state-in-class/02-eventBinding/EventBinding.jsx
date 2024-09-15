import React, { Component } from "react";
import Button from "react-bootstrap/Button";
export default class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    //* Note: We can bind here
    this.handleClick = this.handleClick.bind(this);
  }
  /* 
  //* Note: ES6 Arrow function doesn't need event bindings
  handleClick = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log(this.state.count)
    );
  };
  */
  //* Note: Event binding is used for regular functions to bind(this)
  handleClick() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log(this.state.count)
    );
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Your Count is: {count}</h1>
        <Button variant="primary" size="md" onClick={this.handleClick}>
          Increase
        </Button>{" "}
      </div>
    );
    /* 
    //* Note: We can also bind like this.
    <Button variant="primary" size="md" onClick={this.handleClick.bind(this)}>Increase</Button> 
    */
  }
}
