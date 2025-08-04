import axios from 'axios';

// GitHub API configuration
const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

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

// Service functions for GitHub API calls
export const githubService = {
  /**
   * Search for GitHub users
   * @param {string} username - The username to search for
   * @returns {Promise} - Promise resolving to user search results
   */
  searchUsers: async (username) => {
    try {
      const response = await githubAPI.get(`/search/users?q=${encodeURIComponent(username)}`);
      return response.data;
    } catch (error) {
      console.error('Error searching users:', error);
      throw error;
    }
  },

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
