import logo from './logo.svg';
import React from 'react';
import MovieList from './MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List Application</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
}

export default App;

