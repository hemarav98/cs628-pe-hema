import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function AddCity({ cities, setCities }) {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const [details, setDetails] = useState('');

  const handleAddCity = () => {
    const newCity = {
      id: cities.length + 1,
      name: cityName,
      country: country,
      population: parseInt(population),
      details: details,
    };

    setCities([...cities, newCity]);

    navigate('/');
  };

  return (
    <div>
      <h1>Add City</h1>
      <form className="add-city-form">
        <input
          type="text"
          placeholder="City Name"
          value={cityName}
          onChange={e => setCityName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <input
          type="number"
          placeholder="Population"
          value={population}
          onChange={e => setPopulation(e.target.value)}
        />
        <textarea
          placeholder="Other Details"
          value={details}
          onChange={e => setDetails(e.target.value)}
        ></textarea>
        <button onClick={handleAddCity}>Add City</button>
      </form>
    </div>
  );
}

export default AddCity;

