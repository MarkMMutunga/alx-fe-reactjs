import Search from './components/Search'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-8 text-center">
          <h1 className="text-4xl font-bold mb-2">GitHub User Search</h1>
          <p className="text-gray-300 text-lg">
            Search for GitHub users and explore their profiles with advanced filters
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <Search />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="text-gray-400">
            GitHub User Search Application - Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
