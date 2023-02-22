// Import module yang dibuthkan
import React from "react";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom/client";
import App from "./component/App";

// Membuat root element
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// Render App
root.render(<App />);
