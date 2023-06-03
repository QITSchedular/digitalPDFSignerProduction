import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import SignerModal from "./Components/ProductionModal/MainModal/SignerModal";
import { AppContext, AppContextProvider } from "./context/ContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import UploadPdfButton from "./Components/UploadPdfButton/UploadPdfButton";
import ThumbnailSideBar from "./Components/ThumbnailSideBar/ThumbnailSideBar";
import Layout from "./Components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderPdf from "./Components/PDFRenderer/RenderPdf";
import MainPdfRenderer from "./Components/PDFRenderer";
import SidebarComponent from "./Components/PDFRenderer/Sidebar/SidebarComponent";
import FullScreenLoader from "./Components/Loader/FullScreenLoader";

function App() {
  // // const { contextState, updateContextState } = useContext(AppContext);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   // if (contextState.isLoading === true) {
  //   //   setIsLoading(true);
  //   // } else {
  //   //   setIsLoading(true);
  //   // }
  //   console.log(contextState);
  // }, []);
  return (
    <BrowserRouter>
      <AppContextProvider>
        {/* <Navbar /> */}
        {/* <Navbar /> */}
        <div className="App">
          {/* < SidebarComponent/> */}
          {/* <MainPdfRenderer /> */}
          {/* {isLoading && <FullScreenLoader />} */}
          <Routes>
            {/* <Route exact path='/' element={<UploadPdfButton />}></Route> */}
            {/* <Route exact path='/pdf-editor' element={<Layout />}></Route> */}
            {/* <Route exact path='/' element={<SignerModal />}></Route> */}
            <Route
              path="/sign-pdf"
              element={
                <Layout>
                  <MainPdfRenderer />
                </Layout>
              }
            />
            <Route
              path="/"
              element={
                <Layout>
                  <UploadPdfButton />
                </Layout>
              }
            />
          </Routes>
          {/* <UploadPdfButton /> */}
          {/* <SignerModal /> */}
          {/* <ThumbnailSideBar/> */}
          {/* <Layout /> */}
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
