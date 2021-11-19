import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./header.js";
import "./about.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function About() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="aboutmain">
        <div className="withicon">
          <InfoOutlinedIcon className="abouticon" />
          About us
        </div>
        {/* <div className="aboutus">
          <div className="bikeximg">
            <img src="./images/bikex.jpg" className="bikex" />
          </div>
          <div className="abouttext">
            <div>
              For most people, their bike is one of the most prized possessions.
              It is your best friend on that long ride, or your companion on
              your way to work and back. We know how difficult it is to find
              time, out of your busy schedules, to wait in long queues, and pay
              exorbitant charges to simply get your bike serviced. We, at
              BookAMech, persevere to make your life easier by providing the
              services that your bike needs right at your doorsteps, at
              affordable prices, and in just a few easy steps.
            </div>
            <div>
              <b>
                <u>Vision:</u>
              </b>
              Bring affordable and quality bike servicing facilities to every
              doorstep.
            </div>
            <div>
              <b>
                <u> Mission:</u>
              </b>
              In a world where time is money, our aim is to save the precious
              time and effort people spend in obtaining bike related services.
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-lg-6" id="bikeximg">
            <img src="./images/bikex.jpg" className="bikex" />
          </div>
          <div className="col-lg-6" id="abouttext">
            <div>
              For most people, their bike is one of the most prized possessions.
              It is your best friend on that long ride, or your companion on
              your way to work and back. We know how difficult it is to find
              time, out of your busy schedules, to wait in long queues, and pay
              exorbitant charges to simply get your bike serviced. We, at
              BookAMech, persevere to make your life easier by providing the
              services that your bike needs right at your doorsteps, at
              affordable prices, and in just a few easy steps.
            </div>
            <div>
              <b>
                <u>Vision:</u>
              </b>
              Bring affordable and quality bike servicing facilities to every
              doorstep.
            </div>
            <div>
              <b>
                <u> Mission:</u>
              </b>
              In a world where time is money, our aim is to save the precious
              time and effort people spend in obtaining bike related services.
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright 2021&copy; Obito Motorcycle Services
      </div>
    </div>
  );
}

export default About;
