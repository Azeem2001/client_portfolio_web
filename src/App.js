import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Home from "./Pages/Home/Home";
import Grid from "@mui/material/Grid";
import "./App.scss";
import About from "./Pages/About/About";
import MyResume from "./Pages/MyResume/MyResume";

function App() {
  return (
    <>
      <Router>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4}>
            <div className="fixed">
              <Profile />
            </div>
          </Grid>
          <Grid item xl={8} lg={8} md={12} wrap={"wrap"}>
            <div className="overflow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/myResume" element={<MyResume />} />
              </Routes>
            </div>
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
