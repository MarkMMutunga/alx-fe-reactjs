import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore(state => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite
  }));

  // Get full recipe objects for favorited recipe IDs
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Filter out any undefined recipes

  const handleRemoveFavorite = (recipeId) => {
    removeFavorite(recipeId);
  };

  if (favoriteRecipes.length === 0) {
    return (
      <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h2>My Favorites</h2>
        <p>You haven't added any favorites yet. Start exploring recipes and click the heart icon to add them to your favorites!</p>
      </div>
    );
  }

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>My Favorites ({favoriteRecipes.length})</h2>
      <div style={{ display: 'grid', gap: '15px' }}>
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '5px',
            backgroundColor: '#fff8dc'
          }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
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
              <button 
                onClick={() => handleRemoveFavorite(recipe.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
