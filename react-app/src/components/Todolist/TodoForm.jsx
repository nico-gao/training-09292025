export default function TodoForm({ input, setInput, handleAddTodo }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}
