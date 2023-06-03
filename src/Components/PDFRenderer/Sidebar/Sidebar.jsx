import React from "react";
import "./sidebar.css"; // Import the CSS file

const Sidebar = ({ children }) => {
  return (
  <aside className="sidebar">
    <div className="thumbnail-wrapper img-fluid">
        {children}
    </div>
  </aside>
  );
};

const PageCardStyle = ({ isActive, onClick, children }) => {
  const handleClick = () => {
    console.log("clicked:")
    onClick();
  };

  return (
    <div
      className={`page-card- ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Sidebar;
