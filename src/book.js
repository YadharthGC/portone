import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import "./book.css";
import Section from "./booking_section";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

function Book() {
  const [name, setname] = useState([]);
  const [brand, setbrand] = useState([]);
  const [model, setmodel] = useState([]);
  const [number, setnumber] = useState([]);
  const [date, setdate] = useState([]);
  const [time, settime] = useState([]);
  const [wash, setwash] = useState([]);
  const [repair, setrepair] = useState([]);
  const [modeone, setmodeone] = useState([]);
  const [modetwo, setmodetwo] = useState([]);
  const [day, setday] = useState([]);
  const navigate = useNavigate();
  //dates
  //tmrw
  var dates = new Date();
  var tomorrow = new Date(dates);
  tomorrow.setDate(tomorrow.getDate() + 1);
  var tomorrowdate = ("0" + tomorrow.getDate()).slice(-2);
  var tomorrowmonth = ("0" + (tomorrow.getMonth() + 1)).slice(-2);
  let tomorrowyear = tomorrow.getFullYear();
  console.log(tomorrowdate);
  //day after tmrw
  var theyone = new Date(tomorrow);
  theyone.setDate(theyone.getDate() + 1);
  var theyonedate = ("0" + theyone.getDate()).slice(-2);
  var theyonemonth = ("0" + (theyone.getMonth() + 1)).slice(-2);
  let theyoneyear = theyone.getFullYear();
  console.log(theyonedate);
  //day day after tmrw
  var theytwo = new Date(theyone);
  theytwo.setDate(theytwo.getDate() + 1);
  var theytwodate = ("0" + theytwo.getDate()).slice(-2);
  var theytwomonth = ("0" + (theytwo.getMonth() + 1)).slice(-2);
  let theytwoyear = theytwo.getFullYear();
  console.log(theytwodate);
  /////////////////
  var finals = [{ a: tomorrowdate }, { a: theyonedate }, { a: theytwodate }];
  console.log(finals);
  let handlecreate = async (e) => {
    var dname = name;
    var sname = dname.split("");
    var x = 0,
      y = 0;
    for (let i = 0; i < sname.length; i++) {
      if (
        sname[i] === 1 ||
        sname[i] === 2 ||
        sname[i] === 3 ||
        sname[i] === 4 ||
        sname[i] === 5 ||
        sname[i] === 6 ||
        sname[i] === 7 ||
        sname[i] === 8 ||
        sname[i] === 9
      ) {
        x++;
      } else {
        y++;
      }
    }
    var dnumber = number;
    var snumber = dnumber.split("");
    if (snumber.length <= 6) {
      var y = 0;
    } else {
      var y = 1;
    }
    console.log(x);
    if (x == 0) {
      if (y == 1) {
        try {
          console.log(dname);
          navigate("/bookings");
          let post = await axios.post(
            "https://yadharthcapstone.herokuapp.com/bookings",
            {
              name,
              brand,
              model,
              number,
              date,
              time,
              wash,
              repair,
              modeone,
              modetwo,
              day,
            },
            {
              headers: {
                Authorization: window.localStorage.getItem("app_token"),
              },
            }
          );
          navigate("/bookings", { replace: true });
        } catch (error) {}
      } else {
        alert("Registration no. not valid");
        e.preventDefault();
      }
    } else {
      alert("Name not Valid");
    }
  };
  return (
    <div className="container-fluid" id="booknow">
      <Header></Header>
      <Section></Section>
      <div className="booknowicon">
        <BookmarkAddedIcon className="bookingsicon" />
        Book now
      </div>
      <form
        onSubmit={(e) => {
          handlecreate(e);
        }}
      >
        <div className="details">
          <div className="fillup">
            <span style={{ color: "red" }}>***</span>Please kindly fill in the
            required details
          </div>
          <div className="row" id="vehicle">
            <div className="col-lg-12" id="name">
              <label for="owner">Owner of the Vehicle</label>
              <input
                type="text"
                id="owner"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              ></input>
            </div>
            <div className="col-lg-12" id="brands">
              <label for="brand">Vehicle Brand</label>
              <select
                id="brand"
                value={brand}
                onChange={(e) => setbrand(e.target.value)}
                required
              >
                <option value="">None</option>
                <option value="TVS">TVS</option>
                <option value="Royal Enfield">Royal Enfield</option>
                <option value="Piaggio">Piaggio</option>
                <option value="Mahindra">Mahindra</option>
                <option value="KTM">KTM</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Kawasaki">Kawasaki</option>
                <option value="Honda">Honda</option>
                <option value="Hero">Hero</option>
                <option value="Hyosung">Hyosung</option>
                <option value="Bajaj">Bajaj</option>
                <option value="Aprilia">Aprilia</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Beneli">Beneli</option>
                <option value="UM Motorcycles">UM Motorcycles</option>
              </select>
            </div>
            <div className="col-lg-12" id="type">
              <label for="model">Vehicle Model</label>
              <input
                type="text"
                id="model"
                value={model}
                onChange={(e) => setmodel(e.target.value)}
                required
              ></input>
            </div>
            <div className="col-lg-12" id="no">
              <label for="number">Vehicle Number</label>
              <input
                type="text"
                id="number"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
                required
              ></input>
            </div>

            {/* ////////////////////////////////////////////////// */}
            <div className="col-lg-12" id="password">
              <div>Set Date</div>
              <input
                type="radio"
                id="standard"
                name="srx"
                value={(date, day)}
                onChange={() => {
                  setdate(
                    tomorrowyear + "-" + tomorrowmonth + "-" + tomorrowdate
                  );
                  setday(tomorrow);
                }}
                required
              />
              <label for="standard">
                {tomorrowdate}/{tomorrowmonth}
              </label>
              <input
                type="radio"
                id="standard"
                name="srx"
                value={(date, day)}
                onChange={() => {
                  setdate(theyoneyear + "-" + theyonemonth + "-" + theyonedate);
                  setday(theyone);
                }}
                required
              />
              <label for="standard">
                {theyonedate}/{theyonemonth}
              </label>
              <input
                type="radio"
                id="standard"
                name="srx"
                value={(date, day)}
                onChange={() => {
                  setdate(theytwoyear + "-" + theytwomonth + "-" + theytwodate);
                  setday(theytwo);
                }}
                required
              />
              <label for="standard">
                {theytwodate}/{theytwomonth}
              </label>
            </div>
            {/* ////////////////////////////////////////////////// */}
            <div className="col-lg-12" id="password">
              <label for="pw">Set Time</label>
              <input
                type="time"
                id="pw"
                value={time}
                onChange={(e) => settime(e.target.value)}
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="jobs">
          <div className="row" id="jobs">
            <div className="col-lg-12" id="basic">
              <div>
                <Link to="/service" target="_blank" className="apple">
                  General Service
                </Link>
              </div>
              <input
                type="radio"
                id="standard"
                name="sr"
                value={modeone}
                onChange={() => setmodeone(1099)}
                required
              />
              <label for="standard"> Standard-1099Rs/-</label>
              <input
                type="radio"
                id="royal"
                name="sr"
                value={modeone}
                onChange={() => setmodeone(1599)}
              />
              <label for="royal">Royal-1599Rs/-</label>
              <input
                type="radio"
                id="nobasic"
                name="sr"
                value={modeone}
                onChange={() => setmodeone(0)}
              />
              <label for="nobasic">No</label>
            </div>
            <div className="col-lg-12" id="next">
              <div>
                <Link to="/engine" target="_blank" className="apple">
                  Engine Reboring
                </Link>
              </div>
              <input
                type="radio"
                id="ser"
                name="er"
                value={modetwo}
                onChange={() => setmodetwo(4500)}
                required
              />
              <label for="ser"> Standard-4500Rs/-</label>
              <input
                type="radio"
                id="rer"
                name="er"
                value={modetwo}
                onChange={() => setmodetwo(6500)}
              />
              <label for="rer">Royal-6500Rs/-</label>
              <input
                type="radio"
                id="nonext"
                name="er"
                value={modetwo}
                onChange={() => setmodetwo(0)}
              />
              <label for="nonext">No</label>
            </div>
            <div className="col-lg-12" id="last">
              <div>Wash and Polish-1000Rs/-</div>
              <input
                type="radio"
                value={wash}
                id="yesswash"
                name="wp"
                onChange={() => setwash(1000)}
                required
              />
              <label for="yesswash"> Yes</label>
              <input
                type="radio"
                value={wash}
                id="noswash"
                name="wp"
                onChange={() => setwash(0)}
              />
              <label for="noswash">No</label>
            </div>
            <div className="col-lg-12" id="extra">
              <div>Major Repairs</div>
              <input
                type="radio"
                value={repair}
                id="yess"
                name="mr"
                onChange={() => setrepair("yes")}
                required
              />
              <label for="yess"> Yes</label>
              <input
                type="radio"
                value={repair}
                id="nos"
                name="mr"
                onChange={() => setrepair("no")}
              />
              <label for="nos">No</label>
              <div>
                <span className="xtracharge" style={{ color: "red" }}>
                  (Extra charges will be applied if yes)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="submit">
          <input
            type="submit"
            value="Submit"
            class="btn btn-light"
            id="submit"
          />
        </div>
      </form>
      <div className="bookcopyright">
        Copyright 2021&copy; Obito Motorcycle Services
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
    </div>
  );
}

export default Book;
