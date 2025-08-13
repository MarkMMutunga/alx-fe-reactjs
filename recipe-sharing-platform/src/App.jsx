import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo w-12 h-12" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react w-12 h-12" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Recipe Sharing Platform</h1>
        <div className="mb-6">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-gray-600 mt-4">
            Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-blue-500 text-sm">
          Welcome to your Recipe Sharing Platform - Built with React & Tailwind CSS!
        </p>
      </div>
    </div>
  )
}

export default App
