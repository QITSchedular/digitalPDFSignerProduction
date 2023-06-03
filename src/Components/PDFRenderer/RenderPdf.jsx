import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import * as PDFJS from "pdfjs-dist/build/pdf";

PDFJS.GlobalWorkerOptions.workerSrc =
  window.location.origin + "/pdf.worker.min.js";
const RenderPdf = () => {
  const { contextState } = useContext(AppContext);
  const { selectedPdfFile } = contextState;

    useEffect(()=>{

    },[]);
  return (
    <div>
      <h2>Render PDF</h2>
      {selectedPdfFile && (
        <div style={{marginTop:"50%"}}>
          <p>Selected File: {selectedPdfFile.name}</p>
          {/* Render the PDF using the selected file */}
        </div>
      )}
    </div>
  );
};

export default RenderPdf;
