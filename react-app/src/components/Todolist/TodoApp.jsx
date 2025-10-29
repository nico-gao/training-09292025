import { useContext, useEffect, useState } from "react";
import TodoList from "./Todolist";
import TodoForm from "./TodoForm";
import { TodoContext } from "../../context/TodoContext";

export default function TodoApp() {
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    console.log("use effect in TodoApp");
  });

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <div>
        <div>
          <h2>Pending List</h2>
          <TodoList todos={pendingTodos} />
        </div>
        <div>
          <h2>Completed List</h2>
          <TodoList todos={completedTodos} />
        </div>
      </div>
    </div>
  );
}
