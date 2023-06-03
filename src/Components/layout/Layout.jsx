import React from "react";
import Navbar from "../Navbar/Navbar";
import "./layout.css";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh" }} className="--pad">
        {children}
      </div>
    </>
  );
};

export default Layout;
