import React, { useState } from "react";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const response = await fetch(`https://intelligent-law-backend-3xf5.onrender.com/search?q=${searchTerm}`);
        const data = await response.json();
        setResults(data.message ? [] : data);
    };

    return (
        <div>
            <h1>Intelligent Law Search</h1>
            <input
                type="text"
                placeholder="Search Ontario laws..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {results.length === 0 ? <p>No results found</p> : (
                    <ul>
                        {results.map((law, index) => (
                            <li key={index}>
                                <h2>{law.title}</h2>
                                <p>{law.content}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default App;
