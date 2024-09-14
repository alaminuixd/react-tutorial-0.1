import React, { Component } from "react";

class CardClass extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.str}</h1>
      </div>
    );
  }
}

export default CardClass;
