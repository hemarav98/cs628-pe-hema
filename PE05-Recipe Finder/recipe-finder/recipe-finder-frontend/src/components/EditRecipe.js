import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditRecipe({ recipes, updateRecipe }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === id);

  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUpdatedRecipe(prevRecipe => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateRecipe(id, updatedRecipe);
    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={updatedRecipe.name} onChange={handleInputChange} />
        <label>Ingredients:</label>
        <textarea name="ingredients" value={updatedRecipe.ingredients} onChange={handleInputChange} />
        <label>Instructions:</label>
        <textarea name="instructions" value={updatedRecipe.instructions} onChange={handleInputChange} />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}

export default EditRecipe;

