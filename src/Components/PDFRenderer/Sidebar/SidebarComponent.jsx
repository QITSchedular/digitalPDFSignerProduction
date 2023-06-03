import React, { useContext, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./sidebar.css";
import Sidebar from "./Sidebar";
import docPath from "../../../assets/sample.pdf";
import Navbar from "../../Navbar/Navbar";
import { AppContext } from "../../../context/ContextProvider";
import FullScreenLoader from "../../Loader/FullScreenLoader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const SidebarComponent = () => {
  const [choosenPdf, setChoosenPdf] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { contextState, updateContextState } = useContext(AppContext);
  // console.log(contextState);

  const [numPages, setNumPages] = useState(null);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleScrollTo = (index) => {
    onScrollTo(index);
  };
  useEffect(() => {
    async function setup() {
      await updateContextState({ isLoading: true });
      await setChoosenPdf(contextState.selectedPdfFile);
      await updateContextState({ isLoading: false });
    }
    setup();
  }, [choosenPdf]);
  const pageCards = [];
  for (let index = 0; index < numPages; index++) {
    const isActive = index;
    pageCards.push(
      <div
        key={`page_${index + 1}`}
        className={`page-card ${isActive ? "active" : ""}`}
        onClick={() => handleScrollTo(index)}
      >
        <Page
          scale={0.25}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          pageNumber={index + 1}
        />
      </div>
    );
  }

  return (
    <>
      <Sidebar>
        <Document file={choosenPdf} onLoadSuccess={handleDocumentLoadSuccess}>
          <div className="document">{pageCards}</div>
        </Document>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;
