import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import TodoApp from "./components/Todolist/TodoApp";
import TodoCount from "./components/Todolist/TodoCount";
import Timer from "./components/Timer";
import { TodoContext } from "./context/TodoContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ClassDemo from "./components/ClassComponents/ClassDemo";
import CarApp from "./components/ClassComponents/CarApp";
import { Link, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import MyRoutes from "./MyRouter/MyRoutes";
import MyRoute from "./MyRouter/MyRoute";
import InputDemo from "./components/InputDemo";

export const a = 1;
export const foo = () => {
  console.log("foo function");
  return "output from foo function";
};

const mockTodoData = [
  {
    id: 1,
    title: "my first todo",
    completed: false,
  },
  {
    id: 2,
    title: "my second todo",
    completed: true,
  },
  {
    id: 3,
    title: "my third todo",
    completed: false,
  },
];

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(mockTodoData);

  const [toggle, setToggle] = useLocalStorage("toggle", false);

  const handleAddToCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // const listItems = people.map((person) => <li>{person}</li>);

  // console.log("listItems", listItems);
  // console.log(<Profile />);
  // console.log(Profile);

  // no dependency array
  // run the setup function during mounting/updating
  // useEffect(() => {
  //   console.log("use effect with no [] in App");

  //   return () => {
  //     console.log("clean up in App");
  //   };
  // });

  // empty dependency array
  // run the setup function during mounting
  useEffect(() => {
    console.log("use effect with [] in App");
  }, []);

  // non-empty dependency array
  // run the setup function during mounting/updating, but during updating, it listens to changes to the variables in dep array
  // useEffect(() => {
  //   console.log("use effect with [todos] in App");
  // }, [todos]);

  /**
   * mounting -> 1st setup function call
   * updating -> cleanup function call (for 1st render) -> 2nd setup function call
   * updating -> cleanup (for the 2nd render) -> 3rd setup fn
   * unmounting -> cleanup (for the 3rd render)
   */

  const handleToggleOnclick = useCallback(() => setToggle((prev) => !prev), []);
  const callbackRef = useRef(handleToggleOnclick);

  useEffect(() => {
    console.log(
      "callback reference",
      callbackRef.current === handleToggleOnclick
    );
  });

  return (
    // jsx -> js, babel (complier)
    <div style={{ height: "200vh" }}>
      <Layout>
        <MyRoutes>
          <MyRoute path="/" element={<h1>Home Page</h1>} />
          <MyRoute path="/class-demo" element={<ClassDemo name={"alice"} />} />
          <MyRoute path="/timer" element={<Timer />} />
          <MyRoute path="/car-app" element={<CarApp />} />
          <MyRoute path="/input-demo" element={<InputDemo />} />
        </MyRoutes>
        {/* <Routes>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="class-demo" element={<ClassDemo name={"alice"} />} />
          <Route path="timer" element={<Timer />} />
          <Route path="car-app" element={<p>car app</p>} />
          <Route path="car-app" element={<CarApp />} />
        </Routes> */}

        {/* <button id="toggle-btn" onClick={handleToggleOnclick}>
        Toggle
      </button> */}
        {/* <TodoCount todos={todos} /> */}
        {/* <TodoApp todos={todos} setTodos={setTodos} /> */}
        {/* <Input /> */}
        {/* <Counter counter={count} handleAddToCount={handleAddToCount} /> */}
        {/* <Counter /> */}
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
      </Layout>
    </div>
  );
}

console.log(<App />);

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
