import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClickUp = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleButtonClickDown = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    let color = this.state.counter >= 0 ? "positive" : "negative";

    return (
      <div id="counter">
        <div id="number">
          <h4 className={color}>{this.state.counter}</h4>
        </div>
        <div class="buttons">
          <a href="" onClick={this.handleButtonClickUp}>
            Click Me Up
          </a>
        </div>
        <div class="buttons">
          <a href="" onClick={this.handleButtonClickDown}>
            Click Me Down
          </a>
        </div>
      </div>
    );
  }
}

export default Counter;
