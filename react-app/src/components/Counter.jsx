import { useState, useReducer, useContext, memo } from "react";
import { TodoContext } from "../context/TodoContext";

// useReducer, reducer is a pure function
// centralize state update logic
// action object {type: "ADD", payload: 1}
const counterReducer = (state, action) => {
  // if (action.type === "ADD"){

  // }else if (action.type === "MINUS"){

  // }
  // else if (action.type === "RESET"){

  // }
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "MINUS": {
      return state - action.payload;
    }
    case "RESET": {
      return 0;
    }
    default: {
      return state;
    }
  }
};

function Counter(props) {
  // const [counter, setCounter] = useState(0); // hook
  // const [counter, dispatch] = useReducer(counterReducer, 0);
  const { editInput } = useContext(TodoContext);
  // console.log("editInput in counter", editInput);

  console.log("counter component render");

  const handleAddToCounter = () => {
    // setCounter(counter + 1);
    console.log("counter value after clicking the button: ", counter);
    // counter = counter + 1; // never do this
  };

  // console.log(counter);
  return (
    <div>
      <p>{props.counter}</p>
      <button onClick={props.handleAddToCount}>Add 1</button>
      {/* <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>
        Add 1
      </button> */}
      {/* <button onClick={() => dispatch({ type: "MINUS", payload: 1 })}>
        Minus 1
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button> */}
    </div>
  );
}
const MemoizedCounter = memo(Counter);
export default MemoizedCounter;
