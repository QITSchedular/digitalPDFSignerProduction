import React from "react";
import loaderImage from "../../assets/PVtR.gif";
import './FullScreanLoader.css'
const FullScreenLoader = () => {
  return (
    <div className="loader-overlay d-flex align-items-center justify-content-center">
      {/* <img src={loaderImage} alt="Loading..." className="loader" /> */}
      <div className="loader"></div>
    </div>
  );
};

export default FullScreenLoader;
