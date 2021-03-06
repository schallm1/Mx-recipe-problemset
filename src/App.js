import React from 'react';
import './App.css';
import RecipeMeta from './Components/RecipeMeta';
import RecipeIngredients from './Components/Ingredients/RecipeIngredients';
import RecipeSteps from './Components/RecipeSteps';
import recipeData from './recipeData'

function App() {

  const recipe = recipeData()

  return (
    <div className="App">
      <RecipeMeta
        title={recipe.title}
        time={recipe.timeToMake}
        ingredients={recipe.ingredients}
      />
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipeSteps steps={recipe.steps} />
    </div>
  );
}

export default App;
