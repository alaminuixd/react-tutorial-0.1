import React, { Component } from "react";
import Home from "./Home";
import LogedIn from "./LogedIn";

export default class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // using ternary operator
    const { isLoggedIn } = this.state;
    return <div>{isLoggedIn ? <Home /> : <LogedIn />}</div>;
    /* 
    Note: using short-circuit
    return(<div>
      {isLoggedIn && <Home/>}
      {!isLoggedIn && <LogedIn/>}
    </div>) */
  }
}
