import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import "./App.scss";

import MyBlog from "./Pages/MyBlog/MyBlog";
import Wrapper from "./Components/Wrapper/Wrapper";

function App({ none }) {
  return (
    <>
      <Router>
       <Wrapper/>
        <Routes>
          <Route path="/myblog" element={<MyBlog />} />
        </Routes>
       



      </Router>
    </>
  );
}

export default App;
