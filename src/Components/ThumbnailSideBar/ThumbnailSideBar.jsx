import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ThumnailSideBar.css";
import img from "../../assets/react.svg";
const ThumbnailSideBar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>Display Images here</h3>
      </div>

      <ul className="list-unstyled components">
        <li>
          <div
            class="d-flex flex-column justify-content-center align-items-center preview__page file_o_1h09nd8g715r8gpu1405gk67r2b active"
            data-file="o_1h09nd8g715r8gpu1405gk67r2b"
            data-page="3"
          >
            <img
              className="img-fluid img-thumbnail mt-3 pdf__thumbnail"
              src={img}
            />
            <div className="mt-2">3</div>
          </div>
        </li>
        <li>
          <div
            class="d-flex flex-column justify-content-center align-items-center preview__page file_o_1h09nd8g715r8gpu1405gk67r2b active"
            data-file="o_1h09nd8g715r8gpu1405gk67r2b"
            data-page="3"
          >
            <img
              className="img-fluid img-thumbnail mt-3 pdf__thumbnail"
              src={img}
            />
            <div className="mt-2">3</div>
          </div>
        </li>
        <li>
          <div
            class="d-flex flex-column justify-content-center align-items-center preview__page file_o_1h09nd8g715r8gpu1405gk67r2b active"
            data-file="o_1h09nd8g715r8gpu1405gk67r2b"
            data-page="3"
          >
            <img
              className="img-fluid img-thumbnail mt-3 pdf__thumbnail"
              src={img}
            />
            <div className="mt-2">3</div>
          </div>
        </li>
        <li>
          <div
            class="d-flex flex-column justify-content-center align-items-center preview__page file_o_1h09nd8g715r8gpu1405gk67r2b active"
            data-file="o_1h09nd8g715r8gpu1405gk67r2b"
            data-page="3"
          >
            <img
              className="img-fluid img-thumbnail mt-3 pdf__thumbnail"
              src={img}
            />
            <div className="mt-2">3</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default ThumbnailSideBar;
