import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { favorites, addFavorite, removeFavorite, generateRecommendations } = useRecipeStore(state => ({
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    generateRecommendations: state.generateRecommendations
  }));

  const isFavorite = favorites.includes(recipeId);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
    // Regenerate recommendations after toggling favorite
    setTimeout(() => generateRecommendations(), 100);
  };

  return (
    <button 
      onClick={handleToggleFavorite}
      style={{
        backgroundColor: isFavorite ? '#dc3545' : '#28a745',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '10px'
      }}
    >
      {isFavorite ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
