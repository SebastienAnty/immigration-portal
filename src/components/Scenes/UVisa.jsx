import React from "react";
import { uVisaDocs } from "./documents/UVisaDoc";

const UVisa = () => {
  return (
    <div className="asylum-container">
      <h1 className="asylum-title">U VISA</h1>
      <div className="asylum-line"></div>
      <ol>
        {uVisaDocs.map((item, index) => (
          <li className="asylum-list" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UVisa;
