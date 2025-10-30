import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../../context/TodoContext";

export default function TodoList({ todos }) {
  const {
    handleCancelEditTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleSaveTodo,
    editId,
    editInput,
    setEditInput,
  } = useContext(TodoContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editId !== null) {
      console.log(inputRef);
      inputRef.current?.focus();
    }
  }, [editId]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                ref={inputRef}
              />
              <button onClick={handleSaveTodo}>Save</button>
              <button onClick={handleCancelEditTodo}>Cancel</button>
            </>
          ) : (
            <>
              {todo.title}
              <button
                onClick={() => {
                  handleEditTodo(todo.id);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
