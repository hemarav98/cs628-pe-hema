import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function RecipeDetails({ recipes, deleteRecipe }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === id);

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
      <button onClick={handleDelete}>Delete Recipe</button>
      <Link to={`/edit/${id}`}>Edit Recipe</Link>
    </div>
  );
}

export default RecipeDetails;

