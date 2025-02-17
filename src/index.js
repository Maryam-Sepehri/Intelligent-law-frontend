import React from "react";
import ReactDOM from "react-dom/client"; // ? Use "react-dom/client" for React 18+
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root")); // ? Correct method
root.render(<App />);
