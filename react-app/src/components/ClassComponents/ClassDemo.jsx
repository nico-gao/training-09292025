import { Component } from "react";

class ClassDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      name: this.props.name,
    };
    console.log("ClassDemo constructor");
    // this.handleAdd = this.handleAdd.bind(this);
  }

  // syntax sugar, shorthand way to initialize component state
  // state = {
  //   counter: 0,
  //   name: this.props.name,
  // };

  // arrow functions automatically bind this context
  handleAdd = () => {
    console.log(this);
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };

  render() {
    console.log("ClassDemo render");
    return (
      <div>
        <h1>This is a class component</h1>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleAdd}>Add 1</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("ClassDemo component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ClassDemo component did update");
    console.log("prev", prevProps, prevState);
    console.log("current", this.props, this.state);
    if (prevState.counter !== this.state.counter) {
      console.log("counter updated");
    }
    if (prevState.name !== this.state.name) {
      console.log("name updated");
    }
  }

  componentWillUnmount() {
    console.log("ClassDemo component will unmount");
  }
}

export default ClassDemo;

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greeting() {
//     console.log("My name is", this.name);
//   }
// }

// const p1 = new Person("alice");
// p1.greeting();

// console.log(this);
// const hello = p1.greeting;
// hello();
