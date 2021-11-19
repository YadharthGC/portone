import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import "./booking.css";
import CollectionsBookmarkRoundedIcon from "@mui/icons-material/CollectionsBookmarkRounded";
import Section from "./booking_section";

const renderdata = (data, index) => {
  var e;
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
    if (d2 <= d1) {
      e = 1;
    } else {
      e = 0;
    }
    console.log(e);
  };

  let handleadd = (a, b, c) => {
    let totals = parseInt(a) + parseInt(b) + parseInt(c);
    return <>{totals}</>;
  };
  return (
    <tbody key={index}>
      {data.map((user) => {
        return (
          <tr>
            <td style={{ width: "14.285%" }}>
              <span className="unumber">{user.number}</span>
            </td>
            <td style={{ width: "14.285%" }}>
              <span className="udetails">{user.name}</span>
            </td>
            <td style={{ width: "14.285%" }}>
              <span className="udetails">{user.brand}</span>
            </td>
            <td style={{ width: "14.285%" }}>
              <span className="unumber">
                {handleadd(user.wash, user.modeone, user.modetwo)}
              </span>
            </td>
            <td style={{ width: "14.285%" }}>
              <span className="udetails">{user.repair}</span>
            </td>
            <td style={{ width: "14.285%" }}>
              <span className="unumber">
                {user.date}//
                {user.time}
              </span>
            </td>
            {handlee(user.date)}
            <td disabled={e === 1 ? true : false}>
              <button
                type="button"
                class="btn btn-warning"
                style={{ color: "white" }}
                disabled={e === 1 ? true : false}
              >
                <Link
                  to={`/edit/${user._id}`}
                  style={{ fontFamily: "'Noto Serif', serif" }}
                  id="spls"
                  disabled={e === 1 ? true : false}
                >
                  Edit
                </Link>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

function Bookings() {
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
  var today = new Date();
  let fetch = async () => {
    try {
      let lists = await axios.get(
        "https://yadharthcapstone.herokuapp.com/booking",
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
    <div className="container-fluid" style={{ color: "white" }} id="bookingz">
      <Header></Header>
      <Section></Section>
      <div className="bookingicon">
        <CollectionsBookmarkRoundedIcon className="bookingsicon" />
        Your Bookings
      </div>
      <div className="bklist">
        <u>Bookings:</u>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table className="table">
            <thead id="th">
              <tr>
                <td style={{ width: "14.285%" }}>Plate no.</td>
                <td style={{ width: "14.285%" }}>Name</td>
                <td style={{ width: "14.285%" }}>Brand</td>
                <td style={{ width: "14.285%" }}>Amount</td>
                <td style={{ width: "14.285%" }}>Extra Fees</td>
                <td style={{ width: "14.285%" }}> Date</td>
                <td style={{ width: "14.285%" }}>Action</td>
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
      <div className="bklistz">
        <u>
          (Timing may be altered according to the circumstances.Please check the
          timing before your allocated date)
        </u>
      </div>
      <div className="bklistz">
        <u>(To cancel a booking , please contact us)</u>
      </div>

      {/* <div className="bottom">
        <div className="book">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              window.localStorage.removeItem("app_token");
              history.push("/");
            }}
          >
            Logout
          </button>
        </div>
      </div> */}
      <div className="bookingcopyright">
        Copyright 2021&copy; Obito Motorcycle Services
      </div>
    </div>
  );
}

export default Bookings;
