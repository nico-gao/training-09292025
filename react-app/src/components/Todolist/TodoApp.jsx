import { useContext, useEffect, useState, useRef, useMemo } from "react";
import TodoList from "./Todolist";
import TodoForm from "./TodoForm";
import { TodoContext } from "../../context/TodoContext";

export default function TodoApp() {
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    console.log("use effect in TodoApp");
  });

  const pendingTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );
  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodosRef = useRef(pendingTodos);

  useEffect(() => {
    console.log(
      "pendingtodo reference",
      pendingTodos === pendingTodosRef.current
    );
  });

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
