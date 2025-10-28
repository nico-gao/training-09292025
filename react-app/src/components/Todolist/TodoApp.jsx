import { useEffect, useState } from "react";
import TodoList from "./Todolist";
import TodoForm from "./TodoForm";

export default function TodoApp({ todos, setTodos }) {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  useEffect(() => {
    console.log("use effect in TodoApp");
  });

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const handleAddTodo = () => {
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
    <div>
      <h1>Todo List</h1>
      <TodoForm
        input={input}
        setInput={setInput}
        handleAddTodo={handleAddTodo}
      />
      <div>
        <div>
          <h2>Pending List</h2>
          <TodoList
            todos={pendingTodos}
            handleCancelEditTodo={handleCancelEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            handleSaveTodo={handleSaveTodo}
            editId={editId}
            editInput={editInput}
            setEditInput={setEditInput}
          />
        </div>
        <div>
          <h2>Completed List</h2>
          <TodoList
            todos={completedTodos}
            handleCancelEditTodo={handleCancelEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            handleSaveTodo={handleSaveTodo}
            editId={editId}
            editInput={editInput}
            setEditInput={setEditInput}
          />
        </div>
      </div>
    </div>
  );
}
