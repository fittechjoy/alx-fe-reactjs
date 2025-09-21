import axios from "axios";

// Basic user search (by username)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Advanced user search (with filters)
export const searchUsers = async (query, location, minRepos) => {
  try {
    
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};