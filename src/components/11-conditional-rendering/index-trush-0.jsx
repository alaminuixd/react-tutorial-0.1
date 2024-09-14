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
    const { isLoggedIn } = this.state;
    let element;
    if (isLoggedIn) {
      element = <Home />;
    } else {
      element = <LogedIn />;
    }
    return <div>{element}</div>;
  }
}
