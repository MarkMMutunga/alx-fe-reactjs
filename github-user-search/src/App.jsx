import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub users and explore their profiles</p>
      </header>
      
      <main className="App-main">
        <div className="search-container">
          <h2>Welcome to GitHub User Search</h2>
          <p>This application will help you find GitHub users and their repositories.</p>
          
          {/* Search functionality will be added in future tasks */}
          <div className="placeholder-search">
            <input 
              type="text" 
              placeholder="Search for GitHub users..." 
              disabled 
              style={{ 
                padding: '10px', 
                width: '300px', 
                marginRight: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <button 
              disabled 
              style={{ 
                padding: '10px 20px', 
                backgroundColor: '#0366d6', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px',
                cursor: 'not-allowed',
                opacity: 0.6
              }}
            >
              Search
            </button>
          </div>
          
          <p style={{ color: '#666', marginTop: '20px' }}>
            Search functionality will be implemented in the next development phase.
          </p>
        </div>
      </main>
      
      <footer className="App-footer">
        <p>GitHub User Search Application - Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
