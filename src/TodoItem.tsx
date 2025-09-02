import React from "react";
import { Todo } from "./types";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
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
  );
};

export default TodoItem;
