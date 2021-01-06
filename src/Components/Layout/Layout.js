import React from "react";
import Navbar from "../Nav/Navbar";
import "../../css/bootstrap.min.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
