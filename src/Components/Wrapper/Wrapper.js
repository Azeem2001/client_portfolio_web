import React from "react";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import MyResume from "../../Pages/MyResume/MyResume";
import ContactMe from "../../Pages/ContactMe/ContactMe";
import Profile from "../Profile/Profile";
const Wrapper = ({ hide, none }) => {
  //   const [first, setfirst] = useState(second);
  return (
    <div style={{ display: hide }}>
      <Grid container spacing={2}>
        <Grid item xl={3.8} lg={4}>
          {window?.location?.pathname === "/myblog" ? (
            <div className="fixed">
              <Profile none={"none"} />
            </div>
          ) : (
            <div className="fixed">
              <Profile none={"block"} />
            </div>
          )}
        </Grid>
        <Grid item xl={8.2} lg={8} md={12} wrap={"wrap"}>
          <div className="overflow">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />
              <Route path="/myResume" element={<MyResume />} />
              <Route path="/contactme" element={<ContactMe />} />
            </Routes>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Wrapper;
