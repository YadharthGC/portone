import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <div className="main_a">
        <Link to="/adminlogin">
          <AdminPanelSettingsIcon id="main_icon_a" title="Admin" />
        </Link>
        <Link to="/userhome">
          <AccountCircleIcon id="main_icon_b" title="User" />
        </Link>
      </div>
      <div className="main_b">
        <div>
          <span className="welcome">welcome to</span>
        </div>
        <div>
          <span className="obito">OBITO</span>
          <span className="motor"> motorcycle</span>
        </div>
        <div>
          <span className="services">SERVICES</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
