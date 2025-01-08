import { addTodo, deleteTodo, toggleTodo } from "@/store/slices/todoSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function Todos() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAddTodo = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Todo
        </button>
      </div>

      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            <div
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
