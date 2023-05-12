import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function ModalBody() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-3 col-3 align-self-center">
          <div className="signature-avatar">
            <img
              src="https://www.ilovepdf.com/img/avatar/default30.png"
              alt="avatar"
            />
          </div>
        </div>
        <div className="col-lg-10 col-md-9 col-sm-9 col-8">
          <div className="row">
            <div className="col-md-12 align-end">
              <div className="form-group">
                <label htmlFor="signName">Full name:</label>
                <input
                  type="text"
                  id="signName"
                  className="form-control input"
                  placeholder="Your name"
                  defaultValue="Qitschedular"
                  maxLength="45"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
