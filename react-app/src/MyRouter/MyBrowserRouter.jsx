import { createContext, useEffect, useState } from "react";

export const MyRouterContext = createContext(null);

const MyBrowserRouter = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <MyRouterContext value={{ navigate, currentPath }}>
      {children}
    </MyRouterContext>
  );
};

export default MyBrowserRouter;
