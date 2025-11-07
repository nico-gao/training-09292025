import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
// import store from "./store/store.js";

import { createContext } from "react";
import { store } from "./store/rtkStore.js";

export const MyStoreContext = createContext(null);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <MyStoreContext value={store}> */}
    <App />
    {/* </MyStoreContext> */}
  </Provider>
);
