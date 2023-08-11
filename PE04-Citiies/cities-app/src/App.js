import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';

function App() {
  const [cities, setCities] = useState([]);

  return (
    <Router>
      <header>
        <h1>Cities App</h1>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/add">Add City</a>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<CitiesList cities={cities} />} />
          <Route path="/add" element={<AddCity cities={cities} setCities={setCities} />} />
          <Route path="/city/:id" element={<CityDetails cities={cities} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

