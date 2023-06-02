import React from "react";
import { TPSInitial, TPSRenewal } from "./documents/TPSDoc";
import "./styles/tps.css";

const TPS = () => {
  return (
    <>
      {/* <h1 className="tps-title">Temporary Protective Status</h1> */}
      <div className="tps-wrapper">
        <div className="tps-container">
          <div className="tps-section">
            <div className="tps-line"></div>
            <h2 className="tps-subtitle">TPS Initial</h2>
            <div className="tps-line"></div>
            <ol className="tps-list-item">
              {TPSInitial.map((item, index) => (
                <li key={`initial-${index}`} className="tps-list">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="tps-container">
          <div className="tps-section">
            <div className="tps-line"></div>
            <h2 className="tps-subtitle">TPS Renewal</h2>
            <div className="tps-line"></div>
            <ol className="tps-list-item">
              {TPSRenewal.map((item, index) => (
                <li key={`renewal-${index}`} className="tps-list">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default TPS;
