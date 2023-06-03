import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ModalHeader.css";
import ModalBody from "../ModalBody/ModalBody";
import ModalNavTabs from "../ModalBody/ModalNavTabs";

const SignerModal = () => {
  //open the modal on page load instea of having to click the button
  const modalRef = useRef(null);

  // useEffect(() => {
  //   const modalElement = modalRef.current;
  //   if (modalElement) {
  //     const bootstrapModal = new window.bootstrap.Modal(modalElement);
  //     bootstrapModal.show();
  //   }
  // }, []);
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* Modal */}
      <div
        className="modal fade modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
        id="exampleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#383e45", color: "white" }}
            >
              {/* Modal Header */}
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Set the signature details
              </h1>
              {/* this is the cross button which is not needed */}
              {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button> */}
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <ModalBody />
              <ModalNavTabs />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary btn-lg"
                data-bs-dismiss="modal"
                style={{ color: "rgb(56, 62, 69)" }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-lg"
                style={{ background: "#0d6efd", color: "white" }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignerModal;
