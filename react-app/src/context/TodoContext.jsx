import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();

const mockTodoData = [
  {
    id: 1,
    title: "my first todo",
    completed: false,
  },
  {
    id: 2,
    title: "my second todo",
    completed: true,
  },
  {
    id: 3,
    title: "my third todo",
    completed: false,
  },
];

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", mockTodoData);
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleAddTodo = (input) => {
    const newTodo = { id: Date.now(), title: input, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleSaveTodo = () => {
    const newTodos = todos.map((t) =>
      t.id === editId ? { ...t, title: editInput } : t
    );
    setTodos(newTodos);
    setEditId(null);
  };

  const handleCancelEditTodo = () => {
    setEditId(null);
  };

  const handleEditTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (todo === undefined) return;
    setEditId(id);
    setEditInput(todo.title);
  };
  return (
    <TodoContext
      value={{
        todos,
        setTodos,
        handleAddTodo,
        handleCancelEditTodo,
        handleDeleteTodo,
        handleEditTodo,
        handleSaveTodo,
        editId,
        editInput,
        setEditId,
        setEditInput,
      }}
    >
      {children}
    </TodoContext>
  );
}
