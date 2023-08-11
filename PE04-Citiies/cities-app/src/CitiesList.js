import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function CitiesList({ cities }) {
  return (
    <div>
      <h1>Cities List</h1>
      <ul className="cities-list">
        {cities.map(city => (
          <li key={city.id} className="city-card">
            <Link to={`/city/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesList;

