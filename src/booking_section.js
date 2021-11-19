import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./booking_section.css";

function Section() {
  const navigate = useNavigate();
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
        <div className="partb">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              window.localStorage.removeItem("app_token");
              navigate("/userhome");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section;
