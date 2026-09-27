import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration =
    "manual";
}

const rootElement =
  document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'The root element "#root" was not found.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);