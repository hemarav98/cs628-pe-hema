import React, { useState } from 'react';


const MovieList = () => {
  // Array of movie objects
  const movies = [
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994 },
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999 },
    { title: 'Fight Club', genre: 'Drama', releaseYear: 1999 },
    { title: 'Goodfellas', genre: 'Crime', releaseYear: 1990 },
    { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
    { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
    { title: 'The Departed', genre: 'Crime', releaseYear: 2006 },
    { title: 'Gladiator', genre: 'Action', releaseYear: 2000 },
    { title: 'Eternal Sunshine of the Spotless Mind', genre: 'Romance', releaseYear: 2004 },
    { title: 'The Social Network', genre: 'Drama', releaseYear: 2010 },
    { title: 'Inglourious Basterds', genre: 'War', releaseYear: 2009 },
  ];
  
  // State for selected genre
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  
  // Array of available genres
  const genres = ['All Genres', 'Action', 'Sci-Fi', 'Crime', 'Drama', 'Romance', 'War'];

  // Function to handle genre change
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  // Function to handle movie click
  const handleMovieClick = (title) => {
    alert('You clicked on '+ title);
  };

  // Filtered movies based on selected genre
  const filteredMovies = selectedGenre === 'All Genres'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <h2>Movies</h2>
      <label htmlFor="genreFilter">Filter by Genre: </label>
      <select id="genreFilter" value={selectedGenre} onChange={handleGenreChange}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieClick(movie.title)}>
            <strong>Title:</strong> {movie.title}<br />
            <strong>Genre:</strong> {movie.genre}<br />
            <strong>Release Year:</strong> {movie.releaseYear}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

