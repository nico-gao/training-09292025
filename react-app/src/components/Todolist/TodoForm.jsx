import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const { handleAddTodo } = useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleAddTodo(input)}>Add</button>
    </div>
  );
}
