import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./userhome.css";

function Adminheader() {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="OS">Obito Services</span>
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/today" id="about">
                  <span className="about">Today</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/tmrw" id="about">
                  <span className="about">Tomorrow</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/all" id="about">
                  <span className="about">All</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/find" id="about">
                  <span className="about">Search</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/adminfeedback" id="about">
                  <span className="about">Feedbacks</span>
                </Link>
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <button
              class="btn btn-outline-success"
              type="submit"
              onClick={() => {
                window.localStorage.removeItem("app_token");
                navigate("/", { replace: true });
              }}
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Adminheader;
