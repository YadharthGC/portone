import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./engine.css";

function Engine() {
  return (
    <div className="container-fluid" id="engine">
      <div className="title">Engine Reboring</div>
      <table className="table">
        <thead>
          <tr>
            <td className="head" style={{ textAlign: "center" }}>
              Bike Reboring
            </td>
            <td style={{ textAlign: "center" }}>General Service</td>
            <td style={{ textAlign: "center" }}>Royal Service</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Engine Reboring</td>
            <td className="yes">YES</td>
            <td className="no">NO</td>
          </tr>
          <tr>
            <td>Piston Head Change</td>
            <td className="yes">YES</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Piston Pin Change</td>
            <td className="yes">YES</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Piston Ring Change</td>
            <td className="yes">YES</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Timing Chain Adjustment</td>
            <td className="yes">YES</td>
            <td className="no">NO</td>
          </tr>
          <tr>
            <td>Bore Change</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Rocker Arm Change</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Timing Chain Change</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Valves Change</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Clutch Hub Change</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Clutch Bell Change</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Clutch Housing Chain</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Warranted Service</td>
            <td className="yes">YES</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Amount</td>
            <td style={{ textAlign: "center" }}>₹ 4500</td>
            <td style={{ textAlign: "center" }}>₹ 6500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Engine;
