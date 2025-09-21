import { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await searchUsers(username, location, minRepos);
      setUsers(data.items);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {users.length > 0 && (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center gap-4 p-4 border rounded shadow-sm"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="font-bold">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}