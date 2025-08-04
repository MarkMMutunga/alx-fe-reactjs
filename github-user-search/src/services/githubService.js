import axios from 'axios';

// GitHub API configuration
const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// GitHub Search API endpoint: https://api.github.com/search/users?q
const SEARCH_USERS_ENDPOINT = '/search/users';

// Create axios instance with default configuration
const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    // Add authorization header if API key is provided
    ...(API_KEY && { 'Authorization': `token ${API_KEY}` })
  }
});

/**
 * Fetch user data from GitHub API based on username
 * @param {string} username - The username to search for
 * @returns {Promise} - Promise resolving to user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    
    // Handle different error types
    if (error.response?.status === 404) {
      throw new Error('User not found');
    } else if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded');
    } else {
      throw new Error('Failed to fetch user data');
    }
  }
};

/**
 * Advanced search for GitHub users with multiple criteria
 * Uses GitHub Search API endpoint: https://api.github.com/search/users?q={query}
 * @param {Object} searchParams - Search parameters object
 * @param {string} searchParams.query - Main search query (username, name, etc.)
 * @param {string} searchParams.location - Location filter
 * @param {number} searchParams.minRepos - Minimum repository count
 * @param {number} searchParams.page - Page number for pagination (default: 1)
 * @param {number} searchParams.perPage - Results per page (default: 10, max: 100)
 * @returns {Promise} - Promise resolving to search results
 */
export const searchUsers = async ({ 
  query = '', 
  location = '', 
  minRepos = 0, 
  page = 1, 
  perPage = 10 
}) => {
  try {
    // Build the search query string
    let searchQuery = '';
    
    // Add main query (username, name, email)
    if (query.trim()) {
      searchQuery += query.trim();
    }
    
    // Add location filter
    if (location.trim()) {
      searchQuery += ` location:${location.trim()}`;
    }
    
    // Add minimum repositories filter
    if (minRepos > 0) {
      searchQuery += ` repos:>=${minRepos}`;
    }
    
    // Add type filter to only search users
    searchQuery += ' type:user';
    
    // Make the API request to https://api.github.com/search/users?q={searchQuery}
    const response = await githubAPI.get(SEARCH_USERS_ENDPOINT, {
      params: {
        q: searchQuery.trim(),
        page,
        per_page: Math.min(perPage, 100) // GitHub API max is 100
      }
    });
    
    return {
      users: response.data.items,
      totalCount: response.data.total_count,
      hasNextPage: response.data.items.length === perPage,
      currentPage: page
    };
  } catch (error) {
    console.error('Error searching users:', error);
    
    // Handle different error types
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    } else if (error.response?.status === 422) {
      throw new Error('Invalid search query. Please check your search criteria.');
    } else {
      throw new Error('Failed to search users. Please try again.');
    }
  }
};

// Service functions for GitHub API calls
export const githubService = {
  /**
   * Search for GitHub users (legacy method - kept for compatibility)
   * @param {string} username - The username to search for
   * @returns {Promise} - Promise resolving to user search results
   */
  searchUsers: async (username) => {
    return searchUsers({ query: username });
  },

  /**
   * Advanced search for GitHub users
   * @param {Object} searchParams - Search parameters
   * @returns {Promise} - Promise resolving to search results
   */
  advancedSearch: searchUsers,

  /**
   * Get a specific GitHub user
   * @param {string} username - The username to fetch
   * @returns {Promise} - Promise resolving to user data
   */
  getUser: async (username) => {
    return fetchUserData(username);
  },

  /**
   * Get repositories for a specific user
   * @param {string} username - The username whose repos to fetch
   * @returns {Promise} - Promise resolving to repositories data
   */
  getUserRepos: async (username) => {
    try {
      const response = await githubAPI.get(`/users/${username}/repos?sort=updated&per_page=10`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user repositories:', error);
      throw error;
    }
  }
};

export default githubService;
