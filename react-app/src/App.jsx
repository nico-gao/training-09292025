import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function App() {
  const [count, setCount] = useState(0);

  // const listItems = people.map((person) => <li>{person}</li>);

  // console.log("listItems", listItems);
  // console.log(<Profile />);
  // console.log(Profile);
  return (
    // jsx -> js, babel (complier)
    <>
      <Counter />
      <Counter />

      {/* <ul>
        {listItems}
        {people.map((person) => (
          <li>{person}</li>
        ))}
        {people.map((person, index) => (
          <Profile name={person} id={index} key={index}></Profile>
        ))}
      </ul>
      <ul>
        {people.map((person, index) => (
          <Profile name={person} id={index} key={index}></Profile>
        ))}
      </ul> */}
    </>
  );
}

// props change -> re-render
function Profile({ name, id, children }) {
  // console.log(props);
  console.log(id);

  const onClickHandler = () => {
    console.log("inside button on click handler");
  };

  return (
    <>
      {children}
      <img src={"https://i.imgur.com/MK3eW3As.jpg"} alt="Katherine Johnson" />
      <p>{name}</p>
      <button onClick={onClickHandler}>this is a button</button>
    </>
  );
}

// img src
// App -> Profile -> Avatar
// unidirection data flow, parent -> child

// export default App;

/**
 * Layout component
 *
 * <div classname="app">
 *  <nav></nav>
 *  {children}
 * </div>
 *
 *
 * App component
 *
 * <Layout>
 *  <main>
 * </Layout>
 */

/**
 * Virtual DOM
 * trigger update (state update)
 *
 * components return new jsx -> generate the virtual dom
 *
 * reconciliation:
 * previous virtual dom, new virtual dom (diffing algorithm) to find the minimal changes
 *
 * react only updates real DOM the parts that changed
 */
export const a = 1;
export const foo = () => {
  console.log("foo function");
  return "output from foo function";
};
