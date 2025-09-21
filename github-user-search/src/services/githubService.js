import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export async function searchUsers(username, location, minRepos) {
  try {
    let query = "";

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${query}&per_page=10`);
    return response.data; // returns { total_count, items: [...] }
  } catch (error) {
    throw new Error("Search failed");
  }
}