import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data from imported JSON file
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recipe Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover delicious recipes from around the world. Each recipe is carefully crafted 
            to bring amazing flavors to your kitchen.
          </p>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
            >
              {/* Recipe Image */}
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Recipe Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {recipe.summary}
                </p>
                
                {/* Action Button */}
                <Link 
                  to={`/recipe/${recipe.id}`}
                  className="w-full inline-block text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading delicious recipes...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
