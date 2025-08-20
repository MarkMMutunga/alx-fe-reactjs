import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the intended destination or default to home
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simple authentication check (in real app, this would be an API call)
      if (credentials.username === 'admin' && credentials.password === 'password') {
        login({
          id: 1,
          username: credentials.username,
          email: 'admin@example.com',
          name: 'Admin User'
        });
        
        // Redirect to intended page or home
        navigate(from, { replace: true });
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setCredentials({
      username: 'admin',
      password: 'password'
    });
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '400px', 
      margin: '50px auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: '1px solid #ddd'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Login
      </h1>

      {/* Demo Credentials Info */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '15px',
        borderRadius: '4px',
        marginBottom: '20px',
        border: '1px solid #2196f3'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>Demo Credentials:</h4>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
          <strong>Username:</strong> admin<br />
          <strong>Password:</strong> password
        </p>
        <button
          type="button"
          onClick={fillDemoCredentials}
          style={{
            padding: '6px 12px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Fill Demo Credentials
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px', 
            fontWeight: 'bold',
            color: '#333'
          }}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: `1px solid ${error ? '#dc3545' : '#ddd'}`,
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your username"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px', 
            fontWeight: 'bold',
            color: '#333'
          }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: `1px solid ${error ? '#dc3545' : '#ddd'}`,
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <div style={{
            backgroundColor: '#f8d7da',
            color: '#721c24',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            border: '1px solid #f5c6cb',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isLoading ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s ease'
          }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#666'
      }}>
        <p style={{ margin: 0, lineHeight: '1.5' }}>
          💡 <strong>Protected Route Demo:</strong> Try accessing the Profile page without logging in. 
          You'll be redirected here and then back to your intended destination after successful login.
        </p>
      </div>
    </div>
  );
};

export default Login;
