import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("test");
  return (
    // jsx -> js, babel (complier)
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {a}
      {foo()}
      <Profile />
    </>
  );
}

function Profile() {
  return (
    <>
      <img src={{ src: "123123", link: "qweqweqwe" }} alt="Katherine Johnson" />
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </>
  );
}

// export default App;

export const a = 1;
export const foo = () => {
  console.log("foo function");
  return "output from foo function";
};
