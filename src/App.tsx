import React, { useState } from "react";
import { Todo } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text.trim() === "") return;
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
