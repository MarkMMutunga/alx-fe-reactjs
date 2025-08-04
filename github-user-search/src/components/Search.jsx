import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

/**
 * Advanced Search component for GitHub User Search Application
 * Handles multiple search criteria, API calls, and displays paginated results
 */
const Search = () => {
  // State management
  const [searchType, setSearchType] = useState('basic'); // 'basic' or 'advanced'
  const [basicUsername, setBasicUsername] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState({
    query: '',
    location: '',
    minRepos: ''
  });
  
  // Results state
  const [basicUserData, setBasicUserData] = useState(null);
  const [advancedResults, setAdvancedResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  // Handle basic search form submission
  const handleBasicSubmit = async (e) => {
    e.preventDefault();
    
    if (!basicUsername.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError(null);
    setBasicUserData(null);
    setAdvancedResults(null);

    try {
      const data = await fetchUserData(basicUsername.trim());
      setBasicUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
      console.error('Error fetching user data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle advanced search form submission
  const handleAdvancedSubmit = async (e) => {
    e.preventDefault();
    
    const { query, location, minRepos } = advancedSearch;
    
    if (!query.trim() && !location.trim() && !minRepos) {
      setError('Please provide at least one search criteria');
      return;
    }

    setLoading(true);
    setError(null);
    setBasicUserData(null);
    setAdvancedResults(null);
    setCurrentPage(1);

    try {
      const results = await searchUsers({
        query: query.trim(),
        location: location.trim(),
        minRepos: minRepos ? parseInt(minRepos) : 0,
        page: 1,
        perPage: 10
      });
      
      setAdvancedResults(results);
      setHasNextPage(results.hasNextPage);
    } catch (err) {
      setError(err.message || 'Failed to search users');
      console.error('Error searching users:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load more results for pagination
  const loadMoreResults = async () => {
    if (!hasNextPage || loading) return;

    const { query, location, minRepos } = advancedSearch;
    const nextPage = currentPage + 1;

    setLoading(true);

    try {
      const results = await searchUsers({
        query: query.trim(),
        location: location.trim(),
        minRepos: minRepos ? parseInt(minRepos) : 0,
        page: nextPage,
        perPage: 10
      });
      
      // Append new results to existing ones
      setAdvancedResults(prev => ({
        ...results,
        users: [...prev.users, ...results.users]
      }));
      
      setCurrentPage(nextPage);
      setHasNextPage(results.hasNextPage);
    } catch (err) {
      setError(err.message || 'Failed to load more results');
      console.error('Error loading more results:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleBasicInputChange = (e) => {
    setBasicUsername(e.target.value);
    if (error) setError(null);
  };

  const handleAdvancedInputChange = (field, value) => {
    setAdvancedSearch(prev => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  // Switch between search types
  const switchSearchType = (type) => {
    setSearchType(type);
    setError(null);
    setBasicUserData(null);
    setAdvancedResults(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Search Type Toggle */}
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => switchSearchType('basic')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            searchType === 'basic'
              ? 'bg-white shadow-sm text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Basic Search
        </button>
        <button
          onClick={() => switchSearchType('advanced')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            searchType === 'advanced'
              ? 'bg-white shadow-sm text-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Advanced Search
        </button>
      </div>

      {/* Basic Search Form */}
      {searchType === 'basic' && (
        <form onSubmit={handleBasicSubmit} className="mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={basicUsername}
              onChange={handleBasicInputChange}
              placeholder="Enter GitHub username (e.g., octocat)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !basicUsername.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
      )}

      {/* Advanced Search Form */}
      {searchType === 'advanced' && (
        <form onSubmit={handleAdvancedSubmit} className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username/Name
              </label>
              <input
                type="text"
                value={advancedSearch.query}
                onChange={(e) => handleAdvancedInputChange('query', e.target.value)}
                placeholder="Search by username or name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                disabled={loading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={advancedSearch.location}
                onChange={(e) => handleAdvancedInputChange('location', e.target.value)}
                placeholder="e.g., San Francisco, London"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                disabled={loading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min. Repositories
              </label>
              <input
                type="number"
                value={advancedSearch.minRepos}
                onChange={(e) => handleAdvancedInputChange('minRepos', e.target.value)}
                placeholder="e.g., 10"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                disabled={loading}
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {loading ? 'Searching...' : 'Search Users'}
          </button>
        </form>
      )}

      {/* Loading State */}
      {loading && !advancedResults && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800 font-medium">{error}</p>
        </div>
      )}

      {/* Basic Search Results */}
      {basicUserData && !loading && !error && (
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <img
              src={basicUserData.avatar_url}
              alt={`${basicUserData.login}'s avatar`}
              className="w-20 h-20 rounded-full border-2 border-gray-200"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">
                {basicUserData.name || basicUserData.login}
              </h3>
              <p className="text-gray-600 mb-2">@{basicUserData.login}</p>
              
              {basicUserData.bio && (
                <p className="text-gray-700 mb-3">{basicUserData.bio}</p>
              )}
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                <span>📚 <strong>{basicUserData.public_repos}</strong> repositories</span>
                <span>👥 <strong>{basicUserData.followers}</strong> followers</span>
                <span>➡️ <strong>{basicUserData.following}</strong> following</span>
              </div>
              
              {basicUserData.location && (
                <p className="text-gray-600 mb-3">📍 {basicUserData.location}</p>
              )}
              
              <a
                href={basicUserData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Advanced Search Results */}
      {advancedResults && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Search Results ({advancedResults.totalCount.toLocaleString()} total)
            </h3>
          </div>
          
          <div className="grid gap-4">
            {advancedResults.users.map((user) => (
              <div key={user.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-start space-x-3">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="w-12 h-12 rounded-full border border-gray-200"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-medium text-gray-900 truncate">
                        {user.login}
                      </h4>
                      <span className="text-sm text-gray-500">#{user.id}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Score: {user.score?.toFixed(1) || 'N/A'}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span>Type: {user.type}</span>
                      {user.site_admin && <span className="text-orange-600">Site Admin</span>}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasNextPage && (
            <div className="text-center pt-4">
              <button
                onClick={loadMoreResults}
                disabled={loading}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? 'Loading...' : 'Load More Results'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
