import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const linkStyle = (path) => ({
    textDecoration: 'none',
    color: isActive(path) ? '#007bff' : '#333',
    padding: '10px 15px',
    borderRadius: '4px',
    backgroundColor: isActive(path) ? '#f8f9fa' : 'transparent',
    border: isActive(path) ? '1px solid #007bff' : '1px solid transparent',
    transition: 'all 0.2s ease',
    display: 'inline-block'
  });

  return (
    <nav style={{
      backgroundColor: 'white',
      padding: '15px 20px',
      borderBottom: '2px solid #eee',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo/Brand */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 style={{ 
            margin: 0, 
            color: '#007bff',
            fontSize: '24px'
          }}>
            🚀 React Router Advanced
          </h2>
        </Link>

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Link to="/" style={linkStyle('/')}>
            Home
          </Link>
          <Link to="/about" style={linkStyle('/about')}>
            About
          </Link>
          <Link to="/blog" style={linkStyle('/blog')}>
            Blog
          </Link>
          
          {/* Protected Profile Link */}
          {isAuthenticated ? (
            <Link to="/profile" style={linkStyle('/profile')}>
              Profile
            </Link>
          ) : (
            <Link 
              to="/profile" 
              style={{
                ...linkStyle('/profile'),
                color: '#6c757d',
                position: 'relative'
              }}
              title="Login required to access Profile"
            >
              Profile 🔒
            </Link>
          )}

          {/* Authentication */}
          <div style={{ 
            marginLeft: '20px', 
            paddingLeft: '20px', 
            borderLeft: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            {isAuthenticated ? (
              <>
                <span style={{ 
                  color: '#666',
                  fontSize: '14px'
                }}>
                  Welcome, <strong>{user.name || user.username}</strong>
                </span>
                <button
                  onClick={logout}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Current Route Indicator */}
      <div style={{
        maxWidth: '1200px',
        margin: '10px auto 0',
        fontSize: '12px',
        color: '#666',
        padding: '5px 0'
      }}>
        Current Route: <code>{location.pathname}</code>
        {location.search && <span> | Query: <code>{location.search}</code></span>}
      </div>
    </nav>
  );
};

export default Navbar;
