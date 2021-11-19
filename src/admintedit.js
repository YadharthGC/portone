import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admintedit(props) {
  const [name, setname] = useState([]);
  const [brand, setbrand] = useState([]);
  const [model, setmodel] = useState([]);
  const [number, setnumber] = useState([]);
  const [wash, setwash] = useState([]);
  const [repair, setrepair] = useState([]);
  const [modeone, setmodeone] = useState([]);
  const [modetwo, setmodetwo] = useState([]);
  const [time, settime] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch();
  }, []);

  let fetch = async () => {
    try {
      console.log(params.id);
      let did = params.id;
      console.log(did);
      let get = await axios.get(
        `https://yadharthcapstone.herokuapp.com/admineditdetails/${did}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      console.log(get);

      let a = [...get.data[0].name];
      let b = a.join("");
      setname(b);
      let ax = [...get.data[0].brand];
      let bx = ax.join("");
      setbrand(bx);
      let az = [...get.data[0].model];
      let bz = az.join("");
      setmodel(bz);
      let an = [...get.data[0].number];
      let bn = an.join("");
      setnumber(bn);
      console.log(name, brand, model, number);
    } catch (error) {}
  };

  let handlechange = async () => {
    try {
      console.log(
        name,
        brand,
        model,
        number,
        wash,
        repair,
        modeone,
        modetwo,
        time
      );
      navigate("/today", { replace: true });
      let put = await axios.put(
        `https://yadharthcapstone.herokuapp.com/adminedit/${params.id}`,
        {
          name,
          brand,
          model,
          number,
          wash,
          repair,
          modeone,
          modetwo,
          time,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem("app_token"),
          },
        }
      );
      navigate("/today", { replace: true });
      fetch();
    } catch (error) {}
  };

  return (
    <div className="container-fluid" id="booknow" style={{ marginTop: "-2%" }}>
      <form
        onSubmit={(e) => {
          handlechange(e);
        }}
      >
        <div className="details">
          <div className="fbicon">
            &nbsp;&nbsp; <u>Edit</u>
          </div>
          <div className="row" id="vehicle">
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

export default Admintedit;
