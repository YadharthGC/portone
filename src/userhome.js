import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./userhome.css";
import Header from "./header.js";

function Home() {
  // const history = useNavigate();
  return (
    <div className="container-fluid">
      <Header></Header>
      <div className="main_c">
        <div className="main_welcome">
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
      <div className="col-lg-12" id="solutions">
        <div id="solution">Bike Service Solutions</div>
        <div className="row">
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <Link to="/general" target="_blank">
              <img src="./images/service.png" class="solutionsimg"></img>
            </Link>
            <div>General Service</div>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <Link to="/engine" target="_blank">
              <img src="./images/rebor.png" class="solutionsimg"></img>
            </Link>
            <div>Engine Reboring</div>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img src="./images/wash.png" class="solutionsimg"></img>
            <div>Wash and Polish</div>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img src="./images/breakdown.png" class="solutionsimg"></img>
            <div>Vehicle breakdown</div>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img src="./images/major repairs.png" class="solutionsimg"></img>
            <div>Major Repairs</div>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <img src="./images/24.png" class="solutionsimg"></img>
            <div>24 hours service</div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright 2021&copy; Obito Motorcycle Services
      </div>
    </div>
  );
}

export default Home;
