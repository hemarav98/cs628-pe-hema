import React from 'react';
import TodoList from './TodoList';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <h1>ToDo List Application</h1>
      <TodoList />
    </div>
  );
};

export default App;

