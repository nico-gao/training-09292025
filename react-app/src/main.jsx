import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { a, foo } from "./App";
import TodoProvider from "./context/TodoContext.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <TodoProvider>
      <App />
    </TodoProvider>
  </BrowserRouter>

  // </StrictMode>,
);

// console.log(a);
// foo();

/**
 * CSR vs SSR
 * SPA vs MPA
 */
