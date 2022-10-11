import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Home from "./Pages/Home/Home";
import Grid from "@mui/material/Grid";
import "./App.scss";
import About from "./Pages/About/About";
import MyResume from "./Pages/MyResume/MyResume";
import ContactMe from "./Pages/ContactMe/ContactMe";
import MyBlog from "./Pages/MyBlog/MyBlog";

function App({ none }) {
  return (
    <>
      <Router>
        <Grid container spacing={2}>
          <Grid item xl={3.8} lg={4}>
            <div className="fixed">
              <Profile none={"none"} />
            </div>
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
        <Routes>
          <Route path="/myblog" element={<MyBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
