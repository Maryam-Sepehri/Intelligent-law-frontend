import React from "react";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return; // Don't search if input is empty

    try {
      const response = await fetch(
        `https://intelligent-law-backend-3xf5.onrender.com/search?q=${query}`
      );

      const data = await response.json();
      setResults(data.laws);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <h1>Search Common Laws</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter law keyword..."
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.length > 0 ? (
          results.map((law) => (
            <li key={law.id}>
              <strong>{law.title}</strong>: {law.description}
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
