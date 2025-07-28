import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, filterRecipes } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    filterRecipes: state.filterRecipes
  }));

  // Initial filtering when component mounts or recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Determine which recipes to display
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  if (recipesToDisplay.length === 0 && searchTerm) {
    return (
      <div>
        <p>No recipes found matching "{searchTerm}". Try a different search term.</p>
      </div>
    );
  }

  if (recipesToDisplay.length === 0) {
    return (
      <div>
        <p>No recipes available. Add some recipes to get started!</p>
      </div>
    );
  }

  return (
    <div>
      {recipesToDisplay.map(recipe => (
        <div key={recipe.id} style={{ 
          border: '1px solid #ddd', 
          margin: '10px 0', 
          padding: '15px', 
          borderRadius: '5px' 
        }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>
            <button style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
