import React, { Component } from "react";
export default class OnChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    };
  }
  handleValue = (e) => {
    this.setState(
      {
        inputVal: e.target.value,
      },
      () => console.log(this.state.inputVal)
    );
  };
  render() {
    const { inputVal } = this.state;
    return (
      <div>
        <h1>Your input is: {inputVal}</h1>
        <input type="text" name="" id="" onChange={this.handleValue} />
      </div>
    );
  }
}
