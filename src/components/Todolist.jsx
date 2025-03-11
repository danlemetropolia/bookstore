import { useState } from 'react';

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, { text: newTodo }]);
    setNewTodo('');
  };

  const clearTodos = () => {
    setTodos([]); // Clears all todos
  };

  return (
    <div>
      <h1>My Todolist</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodos}>Clear</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
