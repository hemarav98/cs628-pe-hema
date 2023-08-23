import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const updateRecipe = (id, updatedRecipe) => {
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    setRecipes(updatedRecipes);
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Recipe List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} deleteRecipe={deleteRecipe} />} />
        <Route path="/add" element={<AddRecipe addRecipe={addRecipe} />} />
        <Route path="/edit/:id" element={<EditRecipe recipes={recipes} updateRecipe={updateRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;

