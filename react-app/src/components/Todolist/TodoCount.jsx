import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export default function TodoCount() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <p>There are {todos.length} todo items.</p>
    </div>
  );
}
