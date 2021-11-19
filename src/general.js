import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./engine.css";
function General() {
  return (
    <div className="container-fluid" id="engine">
      <div className="title">Motorcycle Service</div>
      <table className="table">
        <thead>
          <tr>
            <td className="head" style={{ textAlign: "center" }}>
              Bike Service
            </td>
            <td style={{ textAlign: "center" }}>General Service</td>
            <td style={{ textAlign: "center" }}>Royal Service</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Air Filter Cleaning</td>
            <td className="yes">YES</td>
            <td className="no">YES</td>
          </tr>
          <tr>
            <td>Brakes Cleaning</td>
            <td className="yes">YES</td>
            <td className="no">NO</td>
          </tr>
          <tr>
            <td>Chain Lubrication</td>
            <td className="yes">YES</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Clutch Checkup</td>
            <td className="yes">YES</td>
            <td className="no">NO</td>
          </tr>
          <tr>
            <td>Engine Oil Replacement</td>
            <td className="yes">YES</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Sprocket Adjustment</td>
            <td className="yes">YES</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Chain Adjustment</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Engine Tuneup</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Oil Filter Cleaning</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Electrical Wiring Check</td>
            <td className="no">NO</td>
            <td className="yes">YES</td>
          </tr>
          <tr>
            <td>Amount</td>
            <td style={{ textAlign: "center" }}>₹ 1099</td>
            <td style={{ textAlign: "center" }}>₹ 1599</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default General;
