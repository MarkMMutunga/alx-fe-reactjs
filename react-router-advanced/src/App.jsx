import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';

// Components
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          
          <main style={{ minHeight: 'calc(100vh - 120px)' }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              
              {/* Blog Routes - Dynamic Routing */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              
              {/* Protected Routes - Nested Routing */}
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }>
                {/* Nested Routes */}
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={
                <div style={{ 
                  padding: '40px', 
                  textAlign: 'center',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                  <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>
                    ← Go back to Home
                  </a>
                </div>
              } />
            </Routes>
          </main>

          <footer style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            textAlign: 'center',
            borderTop: '1px solid #ddd',
            marginTop: '40px'
          }}>
            <p style={{ margin: 0, color: '#666' }}>
              React Router Advanced Demo - Showcasing Nested, Dynamic, and Protected Routes
            </p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
