import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import "./App.scss";

import MyBlog from "./Pages/MyBlog/MyBlog";
import Wrapper from "./Components/Wrapper/Wrapper";
function App({ none }) {
  let location = window.location.pathname;
  console.log(location)
  useEffect(() => {
     }, [location]);
    
  return (
    <>
      {location === "/myblog" ? (
        <div>
          <Router>
            <div style={{ display: "none" }}>
              <Wrapper />
            </div>
            <Routes>
              <Route path="/myblog" element={<MyBlog />} />
            </Routes>
          </Router>
        </div>
      ) : (
        <div>
          <Router>
            <div style={{ display: "block" }}>
              <Wrapper />
            </div>
            <Routes>
              <Route path="/myblog" element={<MyBlog />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
