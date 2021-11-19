import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./feedback.css";
import Header from "./header";
import Section from "./booking_section";
import FeedbackIcon from "@mui/icons-material/Feedback";

function Feedback() {
  const [number, setnumber] = useState([]);
  const [feed, setfeed] = useState([]);
  const history = useNavigate();

  let handlecreate = async (event) => {
    event.preventDefault();
    try {
      let post = await axios.post(
        "https://yadharthcapstone.herokuapp.com/feed",
        {
          number,
          feed,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      alert(post.data.message);
      history.push("/home");
    } catch (error) {}
  };
  return (
    <div
      className="container-fluid"
      style={{ color: "white" }}
      id="userfeedback"
    >
      <Header></Header>
      <Section></Section>
      <div className="fbicon">
        <FeedbackIcon />
        Your Feedback is much appreciated.
      </div>
      <div className="feed">
        <form
          onSubmit={(e) => {
            handlecreate(e);
          }}
        >
          <div className="bklist" style={{ textAlign: "center" }}>
            <u>FeedBack:</u>
          </div>
          <div id="namevy">
            <label for="owner">Plate no.</label>
            <br></br>
            <input
              type="text"
              id="owner"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              required
            ></input>
          </div>
          <div className="givepw">
            <label for="tps">Feedback</label>
            <br></br>
            <input
              type="text"
              id="tps"
              value={feed}
              onChange={(e) => setfeed(e.target.value)}
              required
            ></input>
          </div>
          <div className="sm" style={{ textAlign: "center" }}>
            <input
              type="submit"
              value="Submit"
              class="btn btn-light"
              id="submit"
            />
          </div>
        </form>
        <div className="fbcopyright">
          Copyright 2021&copy; Obito Motorcycle Services
        </div>
      </div>
    </div>
  );
}

export default Feedback;
