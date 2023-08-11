import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

function CityDetails({ cities }) {
  const { id } = useParams();
  const city = cities.find(city => city.id === parseInt(id));

  if (!city) {
    return <div>City not found.</div>;
  }

  return (
    <div>
      <h1>City Details</h1>
      <div className="city-details">
        <h2>{city.name}</h2>
        <p>Country: {city.country}</p>
        <p>Population: {city.population}</p>
        <p>Details: {city.details}</p>
      </div>
    </div>
  );
}

export default CityDetails;

