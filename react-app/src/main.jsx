import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { a, foo } from "./App";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);

console.log(a);
foo();

/**
 * CSR vs SSR
 * SPA vs MPA
 */
