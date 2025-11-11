import { Link } from "react-router";
import MyLink from "../MyRouter/MyLink";

function Layout({ children }) {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        {/* <Link to="/">Home</Link>
        <Link to="/class-demo">Class Demo</Link>
        <Link to="/car-app">Car App</Link>
        <Link to="/timer">Timer</Link> */}
        <MyLink to="/">Home</MyLink>
        <MyLink to="/class-demo">Class Demo</MyLink>
        <MyLink to="/car-app">Car App</MyLink>
        <MyLink to="/timer">Timer</MyLink>
        <MyLink to="/input-demo">Input Demo</MyLink>
      </nav>
      <div style={{ marginTop: "50px" }}>{children}</div>
    </>
  );
}

export default Layout;
