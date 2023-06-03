import React, { useContext, useState } from "react";
import "./styles.css";
import { AppContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import FullScreenLoader from "../Loader/FullScreenLoader";

const UploadPdfButton = () => {
  const { updateContextState } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleFileChange = async (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
    //console.log("Selected file:", file);
    await updateContextState({ selectedPdfFile: file });
    setIsLoading(false);
    navigate("/sign-pdf");
  };

  const handleClick = () => {
    const fileInput = document.getElementById("pdf-file-input");
    fileInput.click();
  };
  return (
    <>
      {isLoading && <FullScreenLoader />}
      <div
        className="upload__pdf col-sm-12 col-md-12 col-lg-12"
        style={{ marginTop: "120px" }}
      >
        <div className="tool__header mx-auto">
          <h1 className="tool__header__title">Sign PDF</h1>
          <h2 className="tool__header__subtitle">
            Your tool to eSign documents. Sign a document yourself or send a
            signature request to others.
          </h2>
        </div>
        <div className="upload_-section col-sm-12 d-flex justify-content-center">
          <button
            className="btn btn-danger btn-lg"
            id="uploader__btn"
            type="button"
            onClick={handleClick}
            style={{ textAlign: "center" }}
          >
            Select PDF File
          </button>
          <input
            id="pdf-file-input"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </>
  );
};

export default UploadPdfButton;
