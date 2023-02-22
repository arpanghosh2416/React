import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./feature/navbar/Navbar";
import Home from "./feature/home/Home";
import ToolkitDemo from "./feature/toolkit-demo/ToolkitDemo";
import RTKQuery from "./feature/rtk-query/RTKQuery";
import Page404 from "./feature/page-404/Page404";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/toolkit-demo" element={<ToolkitDemo />} />
        <Route path="/rtk-query" element={<RTKQuery />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
