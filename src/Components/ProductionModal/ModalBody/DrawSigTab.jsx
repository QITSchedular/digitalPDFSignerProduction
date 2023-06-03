import React, { useState, useRef, useEffect } from "react";
import { FcFullTrash } from "react-icons/fc";
import SignaturePad from "react-signature-canvas";
import './DrawSigTab.css';
import FullScreenLoader from "../../Loader/FullScreenLoader";

const DrawSigTab = () => {
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef(null);
  const containerRef = useRef({});
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const handleMouseEnter = () => {
    setShowDeleteIcon(true);
  };

  const handleMouseLeave = () => {
    setShowDeleteIcon(false);
  };

  const handleClear = () => {
    sigCanvas.current.clear();
  };

  const handleSave = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/svg+xml"));
  };

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a delay (simulating setup time)
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="container mt-4 signature-tab-content" ref={containerRef}>
      {isLoading === true ? ( // Show loader component if still loading
        <FullScreenLoader />
      ) : (
        <div
          className="drop-area border rounded text-center p-5 position-relative signature__canvas--holder"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Signature Pad */}
          <SignaturePad
            ref={sigCanvas}
            canvasProps={{
              className: "signature__canvas",
              width:576,
              height:170
            }}
          />

          {/* Delete Icon */}
          {showDeleteIcon && (
            <button className="delete-icon" onClick={handleClear}>
              <FcFullTrash size={36} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DrawSigTab;
