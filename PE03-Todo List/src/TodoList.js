import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTodoDescription(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoTitle.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: todoTitle, description: todoDescription }]);
      setTodoTitle('');
      setTodoDescription('');
    }
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="todo-list-container">
      <div className="input-container">
        <input type="text" placeholder="Title" value={todoTitle} onChange={handleTitleChange} />
        <input type="text" placeholder="Description" value={todoDescription} onChange={handleDescriptionChange} />
      </div>
      <div>
      <button onClick={handleAddTodo}>Add Task</button>

      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

