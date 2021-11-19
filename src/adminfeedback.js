import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminheader from "./adminheader";
import FeedbackIcon from "@mui/icons-material/Feedback";

const renderdata = (data, index) => {
  return (
    <tbody key={index}>
      {data.map((user) => {
        return (
          <tr>
            <td>
              <span className="unumber">{user.number}</span>
            </td>
            <td>
              <span className="udetails">{user.feed}</span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

function Adminfeed() {
  const history = useNavigate();
  const [list, setlist] = useState([]);
  const [users, setusers] = useState([]);
  /////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////PAGINATION
  const [currentpage, setcurrentpage] = useState(1);
  const [itemsperpage, setitemsperpage] = useState(5);

  const [limit, setlimit] = useState(3);
  const [mxm, setmxm] = useState(3);
  const [min, setmin] = useState(0);

  const handleclick = (event) => {
    setcurrentpage(Number(event.target.id));
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsperpage); i++) {
    pages.push(i);
  }

  const indexoflastitem = currentpage * itemsperpage;
  const indexoffirstitem = indexoflastitem - itemsperpage;
  const currentitems = users.slice(indexoffirstitem, indexoflastitem);

  const renderpagenumbers = pages.map((number) => {
    if (number < mxm + 1 && number > min) {
      return (
        <li key={number} id={number} onClick={handleclick}>
          <button
            disabled={true}
            className={
              currentpage === number ? "btn btn-light" : "btn btn-info"
            }
          >
            {number}
          </button>
        </li>
      );
    } else {
      return null;
    }
  });
  /////////////////////////////////////////////////////
  ///////////////////
  useEffect(async () => {
    fetch();
  }, []);

  let fetch = async () => {
    try {
      let lists = await axios.get(
        "https://yadharthcapstone.herokuapp.com/adminfeed",
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      setusers([...lists.data]);
    } catch (error) {}
  };

  users.reverse();
  let handlenxt = () => {
    setcurrentpage(currentpage + 1);
    if (currentpage + 1 > mxm) {
      setmxm(mxm + limit);
      setmin(min + limit);
    }
  };

  let handleprev = () => {
    setcurrentpage(currentpage - 1);
    if ((currentpage - 1) % limit == 0) {
      setmxm(mxm - limit);
      setmin(min - limit);
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ color: "white" }}
      id="adminfeedback"
    >
      <Adminheader></Adminheader>
      <div className="fbicon">
        <FeedbackIcon></FeedbackIcon> &nbsp;&nbsp; <u>Feedbacks:</u>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table">
            <thead id="th">
              <tr>
                <td>Plate no.</td>
                <td>Feedbacks</td>
              </tr>
            </thead>
            {renderdata(currentitems)}
          </table>
        </div>
      </div>
      <div className="pn">
        <ul className="pagenumbers">
          <li>
            <button
              className="btn btn-info"
              onClick={handleprev}
              disabled={currentpage == pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {renderpagenumbers}
          <li>
            <button
              className="btn btn-info"
              onClick={handlenxt}
              disabled={currentpage == pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
      <hr />
      <div className="fbcopyright">
        Copyright 2021&copy; Obito Motorcycle Services
      </div>
    </div>
  );
}

export default Adminfeed;
