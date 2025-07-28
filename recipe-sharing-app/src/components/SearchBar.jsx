import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, filterRecipes } = useRecipeStore(state => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    filterRecipes: state.filterRecipes
  }));

  // Trigger filtering whenever search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
};

export default SearchBar;
