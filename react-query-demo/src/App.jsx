import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PostsComponent from './components/PostsComponent'
import './App.css'

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed requests once
      refetchOnWindowFocus: false, // Don't refetch on window focus
    },
  },
})

function App() {
  const [currentView, setCurrentView] = useState('posts')

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header style={{ 
          textAlign: 'center', 
          padding: '20px', 
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #dee2e6'
        }}>
          <h1>React Query Demo</h1>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Advanced Data Handling with React Query - JSONPlaceholder API Integration
          </p>
          
          {/* Navigation to test caching */}
          <div>
            <button
              onClick={() => setCurrentView('posts')}
              style={{
                margin: '0 10px',
                padding: '10px 20px',
                backgroundColor: currentView === 'posts' ? '#007bff' : '#f8f9fa',
                color: currentView === 'posts' ? 'white' : 'black',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              📄 Posts
            </button>
            <button
              onClick={() => setCurrentView('about')}
              style={{
                margin: '0 10px',
                padding: '10px 20px',
                backgroundColor: currentView === 'about' ? '#28a745' : '#f8f9fa',
                color: currentView === 'about' ? 'white' : 'black',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ℹ️ About
            </button>
          </div>
        </header>

        <main style={{ minHeight: '80vh' }}>
          {currentView === 'posts' ? (
            <PostsComponent />
          ) : (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h2>About React Query Demo</h2>
              <div style={{ 
                textAlign: 'left', 
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                lineHeight: '1.6'
              }}>
                <h3>🚀 Features Demonstrated:</h3>
                <ul>
                  <li><strong>Data Fetching:</strong> Using useQuery hook to fetch posts from JSONPlaceholder API</li>
                  <li><strong>Caching:</strong> Intelligent caching with configurable stale time and cache time</li>
                  <li><strong>Loading States:</strong> Proper handling of loading, error, and success states</li>
                  <li><strong>Manual Refetch:</strong> Ability to trigger data refresh on demand</li>
                  <li><strong>Background Updates:</strong> Seamless data updates without blocking UI</li>
                  <li><strong>Developer Tools:</strong> React Query DevTools for debugging (check bottom right)</li>
                </ul>
                
                <h3>🧪 How to Test Cache:</h3>
                <ol>
                  <li>Click "Posts" to load data from API</li>
                  <li>Switch to "About" tab</li>
                  <li>Switch back to "Posts" - notice instant loading from cache!</li>
                  <li>Open Network tab in browser dev tools to see reduced API calls</li>
                </ol>
              </div>
              
              <button
                onClick={() => setCurrentView('posts')}
                style={{
                  marginTop: '20px',
                  padding: '12px 24px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                ← Back to Posts
              </button>
            </div>
          )}
        </main>

        <footer style={{ 
          textAlign: 'center', 
          padding: '20px', 
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #dee2e6',
          marginTop: '40px'
        }}>
          <p style={{ color: '#666', margin: 0 }}>
            React Query Demo - Advanced Data Handling & Caching
          </p>
        </footer>
      </div>
      
      {/* React Query DevTools - only in development */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
