import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Mock recipe data
  const recipes = [
    { id: 1, name: 'Pasta Carbonara' },
    { id: 2, name: 'Chocolate Cake' },
    // Add more recipes here
  ];

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

