import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Layout.css";
import ThumbnailSideBar from "../ThumbnailSideBar/ThumbnailSideBar";

const Layout = () => {
  return (
    <div className="container-fluid d-flex" style={{ marginTop: "60px", padding: "20px 0" }}>
      {/* Other Main sections container */}
      <div className="col-lg-9 col-md-12 col-12">
        {/* Tool Bar container */}
        <div className="row">
          <div className="toolbar" style={{ background: "red", height: "50px", position: "fixed", marginBottom: "20px" }}></div>
        </div>

        <div className="row">
          <div className="col-lg-2 d-lg-block d-none">
            <ThumbnailSideBar />
          </div>
          <div className="col-lg-10 col-12 col-md-12" style={{ background: "yellow", height: "100vh" }}></div>
        </div>
      </div>

      {/* Right Sidebar Container */}
      <div className="col-lg-3 col-md-3 green_div" style={{ background: "green", height: "100vh" }}>

      </div>
    </div>
  );
};

export default Layout;
