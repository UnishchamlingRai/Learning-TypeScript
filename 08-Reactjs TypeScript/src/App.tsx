import React, { useState } from "react";
interface TodoItem {
  id: string;
  name: string;
}
const intialItems: TodoItem[] = [
  {
    id: "2323",
    name: "book",
  },
];
const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>(intialItems);
  const [text, settext] = useState("");
  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const newTodo: TodoItem = { id: `${Date.now()}`, name: text };
    setTodos((todo) => [...todo, newTodo]);
  }

  function deleteTodo(id: string) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          settext(e.target.value)
        }
      />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />

      <button type="submit">Add</button>
    </form>
  );
};
function TodoList({
  todos,
  onDeleteTodo,
}: {
  todos: TodoItem[];
  onDeleteTodo: (id: string) => void;
}) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.name}{" "}
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
export default App;
