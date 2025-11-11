import React, { useCallback, useEffect, useState } from "react";

const debounce = (cb, delay) => {
  let timeout;
  // debounced version of the cb
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const InputDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");

  const debouncedSetText = useCallback(
    debounce((value) => {
      console.log("setText is called");
      console.log("input value in debounced fn", value);
      setText(value);
    }, 2000),
    []
  );

  useEffect(() => {
    debouncedSetText(inputValue);
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Input Value: {inputValue}</p>
      <p>Text Value: {text}</p>
    </div>
  );
};

export default InputDemo;
