import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Home from "./Pages/Home/Home";
import Grid from "@mui/material/Grid";
import "./App.scss";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={4}>
           <div className="fixed">
           <Profile />
           </div>
          </Grid>
          <Grid item xs={8}>
            <div className="overflow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </Grid>
        </Grid>
      </Router>
    </>
  );
}

export default App;
