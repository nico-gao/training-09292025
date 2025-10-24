import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0); // hook

  const handleAddToCounter = () => {
    setCounter(counter + 1);
    // counter = counter + 1; // never do this
  };

  console.log(counter);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleAddToCounter}>Add 1</button>
    </div>
  );
}
