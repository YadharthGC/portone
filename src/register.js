import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import "./register.css";

function Userregis() {
  const [mail, setmail] = useState([]);
  const [password, setpassword] = useState([]);
  const [cpassword, setcpasssword] = useState([]);
  const navigate = useNavigate();

  let handlesubmit = async (e) => {
    e.preventDefault();
    if (password === cpassword) {
      try {
        navigate("/login");
        let post = await axios.post(
          "https://yadharthcapstone.herokuapp.com/register",
          {
            mail,
            password,
          }
        );
        navigate("/login", { replace: true });
      } catch (error) {}
    } else {
      alert("Password is not matching");
    }
  };

  return (
    <div className="container-fluid" id="register">
      <Header></Header>
      <div className="details">
        <div className="row" id="vehicle">
          <div className="col-lg-12" id="name" style={{ textAlign: "center" }}>
            <div>
              <u>Register</u>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <div
              className="col-lg-12"
              id="name"
              style={{ textAlign: "center" }}
            >
              <div>Gmail</div>
              <input
                type="text"
                id="owner"
                value={mail}
                onChange={(e) => setmail(e.target.value)}
                required
              ></input>
            </div>
            <div
              className="col-lg-12"
              id="type"
              style={{ textAlign: "center" }}
            >
              <div>Password</div>
              <input
                type="text"
                id="model"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              ></input>
            </div>
            <div
              className="col-lg-12"
              id="type"
              style={{ textAlign: "center" }}
            >
              <div>Confirm Password</div>
              <input
                type="text"
                id="model"
                value={cpassword}
                onChange={(e) => setcpasssword(e.target.value)}
                required
              ></input>
            </div>
            <div
              className="col-lg-12"
              id="type"
              style={{ textAlign: "center" }}
            >
              <div className="submitpass">
                <input
                  type="submit"
                  value="Submit"
                  class="btn btn-light"
                  id="submit"
                />
              </div>
            </div>
          </form>
          <div className="col-lg-12" id="type" style={{ textAlign: "center" }}>
            <div>
              <Link to="/login" className="nu">
                Already an User?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="regiscopyright">
        Copyright 2021&copy; Obito Motorcycle Services
      </div>
    </div>
  );
}

export default Userregis;
