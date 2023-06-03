import React, { useContext, useEffect, useState } from "react";
import { Document } from "react-pdf";
import "./styles.css";
import LocalPdfDoc from "../../assets/sample.pdf";
import PageComponent from "./PageComponent";
import { pdfjs } from "react-pdf";
import SidebarComponent from "./Sidebar/SidebarComponent";
import { AppContext } from "../../context/ContextProvider";
import FullScreenLoader from "../Loader/FullScreenLoader";

// set up pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const MainPdfRenderer = () => {
  const [choosenPdf, setChoosenPdf] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { contextState, updateContextState } = useContext(AppContext);
  const [numPages, setNumPages] = useState(null);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  // check if there is pdf or not
  useEffect(() => {
    // if (
    //   !contextState.selectedPdfFile === null ||
    //   !contextState.selectedPdfFile === undefined
    // ) {
    //   setChoosenPdf(contextState.selectedPdfFile);
    //   setIsLoading(false);
    // }
    console.log(contextState.selectedPdfFile);
    setChoosenPdf(contextState.selectedPdfFile);
  }, [contextState.selectedPdfFile]);

  return (
    <>
      {/* {isLoading && <FullScreenLoader />} */}
      <div className="custom-pdf-wrapper d-flex">
        {/* sidebar */}
        <SidebarComponent />
        {/* pdf-pages-displayer */}
        <div className="pdf-wrapper container-fluid">
          <Document file={choosenPdf} onLoadSuccess={handleDocumentLoadSuccess}>
            {Array.from(new Array(numPages || 0), (_, index) => (
              <div
                className="page-wrapper col-lg-12 col-sm-12 col-md-12"
                key={`page_${index + 1}`}
              >
                <PageComponent pageNumber={index + 1} index={index} />
              </div>
            ))}
          </Document>
        </div>
      </div>
    </>
  );
};

export default MainPdfRenderer;
