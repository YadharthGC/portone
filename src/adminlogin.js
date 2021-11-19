import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";
import LoginIcon from "@mui/icons-material/Login";

function Adminlogin() {
  const [mail, setmail] = useState([]);
  const [password, setpassword] = useState([]);
  const history = useNavigate();

  let handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let post = await axios.post(
        "https://yadharthcapstone.herokuapp.com/adminlogin",
        {
          mail,
          password,
        }
      );
      window.localStorage.setItem("app_token", post.data.token);
      history.push("/tbooks");
    } catch (error) {}
  };

  return (
    <form
      onSubmit={(e) => {
        handlesubmit(e);
      }}
    >
      <div className="container-fluid" id="adminlogin">
        <div className="details">
          <div className="row" id="vehicle">
            <div
              className="col-lg-12"
              id="name"
              style={{ textAlign: "center" }}
            >
              <div className="fbicon">
                <LoginIcon />
                &nbsp;&nbsp; <u>Admin Login</u>
              </div>
            </div>
            <div
              className="col-lg-12"
              id="name"
              style={{ textAlign: "center" }}
            >
              <div>Admin_name</div>
              <input
                type="text"
                id="owner"
                value={mail}
                placeholder="admin"
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
                type="password"
                id="model"
                placeholder="admin"
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
              <div className="submitpass">
                <input
                  type="submit"
                  value="Submit"
                  class="btn btn-light"
                  id="submit"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="fbcopyright">
          Copyright 2021&copy; Obito Motorcycle Services
        </div>
      </div>
    </form>
  );
}

export default Adminlogin;
