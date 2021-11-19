import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminheader from "./adminheader";
import "./App.css";

function Adminfind() {
  const [feed, setfeed] = useState([]);
  const [found, setfound] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch();
  }, []);

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
    if (d2 < d1) {
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

  let fetch = async () => {
    let get = await axios.get("https://yadharthcapstone.herokuapp.com/fvs", {
      headers: {
        Authorization: window.localStorage.getItem("app_token"),
      },
    });
    setfound([...get.data]);
  };

  let handlesubmit = async () => {
    try {
      let post = await axios.post(
        "https://yadharthcapstone.herokuapp.com/fv",
        {
          feed,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      fetch();
    } catch (error) {}
  };

  let handledelete = async (id) => {
    let deletex = await axios.delete(
      `https://yadharthcapstone.herokuapp.com/delete/${id}`
    );
  };

  return (
    <div className="container-fluid" style={{ color: "white" }} id="find">
      <Adminheader></Adminheader>
      <div className="givepw" style={{ fontSize: "25px" }}>
        <u>Find a Booking</u>
      </div>

      <div className="feed">
        <form
          onSubmit={(g) => {
            handlesubmit(g);
          }}
        >
          <div className="givepw">
            <label for="fv">Vehicle Plate no.</label>
            <br></br>
            <input
              type="text"
              id="fv"
              value={feed}
              onChange={(g) => setfeed(g.target.value)}
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
      </div>

      <div className="row">
        <div className="col-lg-12">
          <table className="table" id="vt">
            <tbody>
              {found.map((user) => {
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
                      <span className="unumber">
                        <button
                          type="button"
                          class="btn btn-danger"
                          onClick={() => {
                            handledelete(user._id);
                          }}
                          disabled={e === 1 ? true : false}
                        >
                          Delete
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="fbcopyright">
        Copyright 2021&copy; Obito Motorcycle Services
      </div>
    </div>
  );
}

export default Adminfind;
