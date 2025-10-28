/**
 *
 * uncontrolled component: handled by DOM
 * controlled component: handled by React
 */

import { useState } from "react";

export default function Input() {
  const [inputText, setInputText] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => handleOnChange(e)}
      />
      <button>Submit</button>
    </div>
  );
}
