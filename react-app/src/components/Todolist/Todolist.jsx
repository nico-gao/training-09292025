export default function TodoList({
  todos,
  editId,
  editInput,
  setEditInput,
  handleCancelEditTodo,
  handleDeleteTodo,
  handleEditTodo,
  handleSaveTodo,
}) {
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
              />
              <button onClick={handleSaveTodo}>Save</button>
              <button onClick={handleCancelEditTodo}>Cancel</button>
            </>
          ) : (
            <>
              {todo.title}
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
