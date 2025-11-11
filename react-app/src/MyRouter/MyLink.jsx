import React, { useContext } from "react";
import { MyRouterContext } from "./MyBrowserRouter";

const MyLink = ({ children, to }) => {
  const { navigate } = useContext(MyRouterContext);
  return (
    <a
      onClick={() => {
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};

export default MyLink;
