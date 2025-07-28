import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">
            <h1>Recipe Sharing Application</h1>
          </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div>
              <AddRecipeForm />
              <RecipeList />
            </div>
          } />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
