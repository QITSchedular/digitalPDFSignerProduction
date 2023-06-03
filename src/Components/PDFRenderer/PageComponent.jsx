import React from "react";
import { Page } from "react-pdf";

const PageComponent = ({
  pageNumber,
  children,
  index,
  content,
  onOpen,
  onContent,
}) => {
  const handleClick = (e) => {};

  return (
    <div className="page-component-main" onClick={handleClick}>
      <Page
        scale={1.5}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        pageNumber={pageNumber}
      ></Page>
    </div>
  );
};

export default PageComponent;
