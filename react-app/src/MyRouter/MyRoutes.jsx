import React, { Children, useContext } from "react";
import { MyRouterContext } from "./MyBrowserRouter";

const MyRoutes = ({ children }) => {
  const { currentPath } = useContext(MyRouterContext);

  let element;
  Children.forEach(children, (child) => {
    console.log(currentPath, child.props.path);
    if (currentPath === child.props.path) {
      // render element
      element = child;
    }
  });
  return element;
};

export default MyRoutes;
