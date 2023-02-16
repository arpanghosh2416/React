import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Page404 from "./components/Page404";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<Protected component={<About />} />} />
          <Route path="/contact/" element={<Protected component={<Contact />} />}>
            <Route path="twitter" element={
              <>
                <h3 style={{ marginTop: "10px" }}>Welcome to U in our Twitter-Contact page</h3>
              </>
            } />
            <Route path="yt" element={
              <>
                <h3 style={{ marginTop: "10px" }}>Welcome to U in our YouTube-Contact page</h3>
              </>
            } />
            <Route path="insta" element={
              <>
                <h3 style={{ marginTop: "10px" }}>Welcome to U in our Instagram-Contact page</h3>
              </>
            } />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
