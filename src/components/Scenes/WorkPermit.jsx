import React from "react";
import { workPermit } from "./documents/WorkPermitDoc";

const WorkPermit = () => {
  return (
    <div className="asylum-container">
      <h1 className="asylum-title">Work Permit</h1>
      <div className="asylum-line"></div>
      <ol>
        {workPermit.map((item, index) => (
          <li className="asylum-list" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkPermit;
