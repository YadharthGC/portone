import { RouterSharp } from "@mui/icons-material";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./main";
import Home from "./userhome";
import Engine from "./engine";
import About from "./about";
import Book from "./book";
import Bookings from "./bookings";
import Feedback from "./feedback";
import Userlogin from "./login";
import Userregis from "./register";
import General from "./general";
import Adminlogin from "./adminlogin";
import Tbookings from "./today";
import Tmrw from "./tmrw";
import All from "./all";
import "./App.css";
import Edit from "./edit";
import Adminfeed from "./adminfeedback";
import Adminfind from "./find";
import Adminedit from "./adminedit";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} exact={true} />
          {/* User//////////////////////// */}
          <Route path="/userhome" element={<Home />} exact={true} />
          <Route path="/engine" element={<Engine />} exact={true} />
          <Route path="/service" element={<General />} exact={true} />
          <Route path="/about" element={<About />} exact={true} />
          <Route path="/book" element={<Book />} exact={true} />
          <Route path="/bookings" element={<Bookings />} exact={true} />
          <Route path="/feedback" element={<Feedback />} exact={true} />
          <Route path="/login" element={<Userlogin />} exact={true} />
          <Route path="/register" element={<Userregis />} exact={true} />
          <Route path="/edit/:id" element={<Edit />} exact={true}></Route>
          {/* Admin////////////////////////// */}
          <Route path="/adminlogin" element={<Adminlogin />} exact={true} />
          <Route path="/today" element={<Tbookings />} exact={true} />
          <Route path="/tmrw" element={<Tmrw />} exact={true} />
          <Route path="/all" element={<All />} exact={true} />
          <Route path="/adminfeedback" element={<Adminfeed />} exact={true} />
          <Route path="/find" element={<Adminfind />} exact={true} />
          <Route
            path="/adminedit/:id"
            element={<Adminedit />}
            exact={true}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
