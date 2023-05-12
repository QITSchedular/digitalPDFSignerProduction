import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCloudUpload, BsX } from "react-icons/bs";
import { FcFullTrash } from "react-icons/fc";
import "./FileInput.css";

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDelete = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null; // Reset the input value
  };

  const handleUploaderClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  return (
    <div className="container mt-4">
      <div
        className="drop-area border rounded text-center p-5 position-relative"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <div className="preview-container">
            {/* <img
              src={selectedFile}
              alt="Preview"
              className="img-fluid img-thumbnail"
              id="img__preview"
            /> */}
            {/* If div is used to display the image */}
            <div style={{
            backgroundImage: `url(${selectedFile})`,
            backgroundSize: "contain",
            width:"100%",
            height:"170px",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
          }}></div>
            <button className="delete-icon" onClick={handleDelete}>
              <FcFullTrash size={36} />
            </button>
          </div>
        ) : (
          <div className="uploader-container" onClick={handleUploaderClick}>
            <div className="uploader-icon">
              <button className="btn btn-outline-info btn-md">
                <BsCloudUpload size={48} /> 
                &nbsp;Upload Image or company Stamp
              </button>
            </div>
            <p className="mb-0 mt-3">Drag and drop an image file here or click to browse.</p>
          </div>
        )}
        <input
          type="file"
          className="form-control-file mt-3 d-none"
          accept="image/*"
          onChange={handleFileInputChange}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

export default FileInput;
