import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

/**
 * Search component for GitHub User Search Application
 * Handles user input, API calls, and displays search results
 */
const Search = () => {
  // State management
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate input
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    // Reset states
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username.trim());
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
      console.error('Error fetching user data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  return (
    <div className="search-component">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username (e.g., octocat)"
            className="search-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={loading || !username.trim()}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="loading-message">
          <p>Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {/* Success State - Display User Data */}
      {userData && !loading && !error && (
        <div className="user-result">
          <div className="user-card">
            <img 
              src={userData.avatar_url} 
              alt={`${userData.login}'s avatar`}
              className="user-avatar"
            />
            <div className="user-info">
              <h3 className="user-name">
                {userData.name || userData.login}
              </h3>
              <p className="user-login">@{userData.login}</p>
              
              {userData.bio && (
                <p className="user-bio">{userData.bio}</p>
              )}
              
              <div className="user-stats">
                <span className="stat">
                  <strong>{userData.public_repos}</strong> repositories
                </span>
                <span className="stat">
                  <strong>{userData.followers}</strong> followers
                </span>
                <span className="stat">
                  <strong>{userData.following}</strong> following
                </span>
              </div>
              
              {userData.location && (
                <p className="user-location">📍 {userData.location}</p>
              )}
              
              <a 
                href={userData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
