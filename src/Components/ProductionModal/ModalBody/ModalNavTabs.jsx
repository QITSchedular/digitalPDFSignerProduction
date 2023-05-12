import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import TypeSigTab from "./TypeSigTab";
import DrawSigTab from "./DrawSigTab";
import UploadSigTab from "./UploadSigTab";
import { RiPenNibFill } from "react-icons/ri";
import { FaSignature,FaKeyboard } from "react-icons/fa";
import { FaStamp } from "react-icons/fa";
import './ModalBodyTabs.css';

export default function ModalNavTabs() {
  return(
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist" style={{margin:"32px 0 0 40px"}}>
  <li className="nav-item " role="presentation">
    <button className="nav-link active write-tab" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><FaKeyboard className="tab-icon"/> &nbsp;Type</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link draw-tab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><FaSignature className="tab-icon"/> &nbsp;Draw</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link upload-tab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><FaStamp className="tab-icon"/> &nbsp; Upload</button>
  </li>
</ul>

      {/* tabpanes */}
    <div className="tab-content" id="myTabContent" style={{background:"white", marginLeft:"40px"}}>
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0"><TypeSigTab/></div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0"><DrawSigTab/></div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0"><UploadSigTab/></div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">...</div>
</div>
    </>
  );
}
