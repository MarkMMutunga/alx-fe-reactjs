import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">
            <h1>Recipe Sharing Application</h1>
          </Link>
          <div style={{ marginTop: '10px' }}>
            <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#007bff' }}>
              All Recipes
            </Link>
            <Link to="/favorites" style={{ marginRight: '20px', textDecoration: 'none', color: '#007bff' }}>
              My Favorites
            </Link>
            <Link to="/recommendations" style={{ textDecoration: 'none', color: '#007bff' }}>
              Recommendations
            </Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
            </div>
          } />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
