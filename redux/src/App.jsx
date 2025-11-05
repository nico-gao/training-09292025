import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarApp from "./components/CarApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CarApp />
    </>
  );
}

export default App;
