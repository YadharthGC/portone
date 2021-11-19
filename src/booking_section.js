import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./booking_section.css";

function Section() {
  const history = useNavigate();
  return (
    <div className="container-fluid" id="section">
      <div className="bs">
        <div className="parta">
          <Link to="/book" className="asection">
            <div>Book now</div>
          </Link>
          <Link to="/bookings" className="asection">
            <div>Bookings</div>
          </Link>
          <Link to="/feedback" className="asection">
            <div>Feedback</div>
          </Link>
        </div>
        <div
          className="partb"
          onClick={() => {
            window.localStorage.removeItem("app_token");
            history.push("/");
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
}

export default Section;
