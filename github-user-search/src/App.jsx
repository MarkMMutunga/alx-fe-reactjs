import './App.css'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub users and explore their profiles</p>
      </header>
      
      <main className="App-main">
        <div className="search-container">
          <Search />
        </div>
      </main>
      
      <footer className="App-footer">
        <p>GitHub User Search Application - Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
