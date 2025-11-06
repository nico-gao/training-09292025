import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return class NewComponent extends Component {
    state = {
      counter: 0,
    };

    handleIncrement = () => {
      this.setState((prev) => ({
        counter: prev.counter + 1,
      }));
    };

    handleDecrement = () => {
      this.setState((prev) => ({
        counter: prev.counter - 1,
      }));
    };

    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      );
    }
  };
};

export default withCounter;
