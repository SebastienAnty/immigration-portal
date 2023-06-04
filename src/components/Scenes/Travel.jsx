import React from "react";
import { travelDocs } from "./documents/TravelDoc";

const Travel = () => {
  return (
    <div className="asylum-container">
      <h1 className="asylum-title">Travel Document</h1>
      <div className="asylum-line"></div>
      <ol>
        {travelDocs.map((item, index) => (
          <li className="asylum-list" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Travel;
