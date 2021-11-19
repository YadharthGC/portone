import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminheader from "./adminheader";
import EventIcon from "@mui/icons-material/Event";

const renderdata = (data, index) => {
  let handleadd = (a, b, c) => {
    let totals = parseInt(a) + parseInt(b) + parseInt(c);
    return <>{totals}</>;
  };

  let handledelete = async (id) => {
    window.location.reload();
    let deletex = await axios.delete(
      `https://yadharthcapstone.herokuapp.com/delete/${id}`
    );
  };

  var e, d;
  let dates = new Date();
  let datea = ("0" + dates.getDate()).slice(-2);
  let montha = ("0" + (dates.getMonth() + 1)).slice(-2);
  let yeara = dates.getFullYear();
  var tda = yeara + "-" + montha + "-" + datea;

  let handlee = (dateb) => {
    console.log(tda);
    console.log(dateb);
    var d1 = Date.parse(tda);
    var d2 = Date.parse(dateb);
    console.log(d1);
    console.log(d2);
    if (d2 < d1) {
      e = 1;
    } else {
      e = 0;
    }
    if (d2 < d1) {
      d = 1;
    } else {
      d = 0;
    }
    console.log(e);
  };
  return (
    <tbody key={index}>
      {data.map((user) => {
        return (
          <tr>
            <td>
              <span className="unumber">{user.number}</span>
            </td>
            <td>
              <span className="udetails">{user.name}</span>
            </td>
            <td>
              <span className="udetails">{user.brand}</span>
            </td>
            <td>
              <span className="udetails">{user.model}</span>
            </td>
            <td>
              <span className="unumber">
                {handleadd(user.wash, user.modeone, user.modetwo)}
              </span>
            </td>
            <td>
              <span className="udetails">{user.repair}</span>
            </td>

            <td>
              <span className="unumber">
                {user.date}//
                {user.time}
              </span>
            </td>
            {handlee(user.date)}
            <td>
              <button
                type="button"
                class="btn btn-warning"
                style={{ color: "white" }}
                disabled={e === 1 ? true : false}
              >
                <Link
                  to={`/tadminedit/${user._id}`}
                  style={{ fontFamily: "'Noto Serif', serif" }}
                  id="spls"
                  disabled={e === 1 ? true : false}
                >
                  Edit
                </Link>
              </button>
              &nbsp;
              <span className="unumber">
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    handledelete(user._id);
                  }}
                  disabled={d === 1 ? true : false}
                >
                  Delete
                </button>
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

function Tmrw() {
  const history = useNavigate();
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
            className={
              currentpage === number ? "btn btn-light" : "btn btn-info"
            }
            disabled={true}
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
        "https://yadharthcapstone.herokuapp.com/tmrw",
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
    <div className="container-fluid" style={{ color: "white" }} id="tmrw">
      <Adminheader></Adminheader>
      <div className="fbicon">
        <EventIcon />
        &nbsp;&nbsp; <u>Tomorrow Bookings:</u>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table">
            <thead id="th">
              <tr>
                <td>Plate no.</td>
                <td>Name</td>
                <td>Brand</td>
                <td>Model</td>
                <td>Amount</td>
                <td>Extra Fees</td>
                <td>Allocated Date</td>
                <td>Actions</td>
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

export default Tmrw;
