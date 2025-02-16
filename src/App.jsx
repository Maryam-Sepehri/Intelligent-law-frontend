import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://intelligent-law-backend-3xf5.onrender.com/search?q=${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Search Common Laws</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a law keyword..."
        style={{ padding: "8px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px", padding: "8px" }}>
        Search
      </button>
      <div style={{ marginTop: "20px" }}>
        {results.length > 0 ? (
          <ul>
            {results.map((law) => (
              <li key={law.id}>
                <strong>{law.title}</strong>: {law.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
