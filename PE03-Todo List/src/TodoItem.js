import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };

  return (
    <li className="todo-item">
      <div className="todo-title" onClick={handleToggleDescription}>
        {todo.title}
      </div>
      {showDescription && (
        <div className="todo-description-popup">
          <div className="todo-description-content">{todo.description}</div>
        </div>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;

