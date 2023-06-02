import React from "react";
import { asylum } from "./documents/AsylumDoc";
import "./styles/asylum.css";

const AsylumScene = () => {
  return (
    <div className="asylum-container">
      <h1 className="asylum-title">Asylum</h1>
      <div className="asylum-line"></div>
      <ol>
        {asylum.map((item, index) => (
          <li className="asylum-list" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AsylumScene;
