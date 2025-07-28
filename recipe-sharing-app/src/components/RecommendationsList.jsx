import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const { recommendations, favorites, generateRecommendations, addFavorite } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    favorites: state.favorites,
    generateRecommendations: state.generateRecommendations,
    addFavorite: state.addFavorite
  }));

  // Generate recommendations when component mounts or favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  const handleAddToFavorites = (recipeId) => {
    addFavorite(recipeId);
  };

  if (recommendations.length === 0) {
    return (
      <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h2>Recommended for You</h2>
        <p>
          {favorites.length === 0 
            ? "Add some recipes to your favorites to get personalized recommendations!" 
            : "No new recommendations available right now. Check back after adding more recipes!"}
        </p>
      </div>
    );
  }

  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Recommended for You</h2>
      <p style={{ color: '#666', marginBottom: '15px' }}>
        Based on your favorites, here are some recipes you might enjoy:
      </p>
      <div style={{ display: 'grid', gap: '15px' }}>
        {recommendations.map(recipe => (
          <div key={recipe.id} style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '5px',
            backgroundColor: '#f0f8ff'
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
                onClick={() => handleAddToFavorites(recipe.id)}
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                ❤️ Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
