import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://intelligent-law-backend-3xf5.onrender.com")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Intelligent Law App</h1>
      <p>Backend Response: {message}</p>
    </div>
  );
}

export default App;