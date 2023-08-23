import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipe({ addRecipe }) {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    id: Math.random().toString(36).substr(2, 9),
    name: '',
    ingredients: '',
    instructions: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setRecipe(prevRecipe => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addRecipe(recipe);
    navigate('/');
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={recipe.name} onChange={handleInputChange} />
        <label>Ingredients:</label>
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleInputChange} />
        <label>Instructions:</label>
        <textarea name="instructions" value={recipe.instructions} onChange={handleInputChange} />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;

