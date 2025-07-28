import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.searchTerm.trim() === '' 
      ? state.recipes 
      : state.recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
  })),
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites and similarity
    const recommended = state.recipes.filter(recipe => {
      // Don't recommend recipes that are already favorited
      if (state.favorites.includes(recipe.id)) return false;
      
      // If user has favorites, recommend similar recipes based on title keywords
      if (state.favorites.length > 0) {
        const favoriteRecipes = state.favorites.map(id => 
          state.recipes.find(r => r.id === id)
        ).filter(Boolean);
        
        // Simple similarity check based on common words in titles
        return favoriteRecipes.some(favRecipe => {
          const favWords = favRecipe.title.toLowerCase().split(' ');
          const recipeWords = recipe.title.toLowerCase().split(' ');
          return favWords.some(word => recipeWords.includes(word) && word.length > 3);
        });
      }
      
      // If no favorites, recommend random recipes (mock implementation)
      return Math.random() > 0.7;
    });
    
    return { recommendations: recommended.slice(0, 3) }; // Limit to 3 recommendations
  })
}));

export default useRecipeStore;
