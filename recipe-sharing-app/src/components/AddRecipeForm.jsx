import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const { addRecipe, filterRecipes } = useRecipeStore(state => ({
    addRecipe: state.addRecipe,
    filterRecipes: state.filterRecipes
  }));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && description.trim()) {
      addRecipe({ id: Date.now(), title: title.trim(), description: description.trim() });
      setTitle('');
      setDescription('');
      // Trigger filtering after adding new recipe
      filterRecipes();
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            required
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '14px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            required
            rows="3"
            style={{
              width: '100%',
              padding: '8px',
              fontSize: '14px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>
        <button 
          type="submit"
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
