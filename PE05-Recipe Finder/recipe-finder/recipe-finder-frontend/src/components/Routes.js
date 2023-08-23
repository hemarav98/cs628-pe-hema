import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddRecipe from './AddRecipe';
import RecipeDetails from './RecipeDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddRecipe />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default AppRoutes;

