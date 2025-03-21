import { StrictMode } from "react";
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom"; // Import Router
import { Provider } from "./components/ui/provider";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      {/* <Router> Wrap the entire App with Router */}
        <App />
      {/* </Router> */}
    </Provider>
  </StrictMode>
);
