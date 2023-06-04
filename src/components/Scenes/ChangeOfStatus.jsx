import React from "react";
import { spouseCitizen, childCitizen } from "./documents/ChangeOfStatusDoc";
import "./styles/changeofStatus.css";

const ChangeOfStatus = () => {
  return (
    <>
      <div className="cos-container">
        <div className="section-container">
          <div className="cos-line"></div>
          <h1 className="cos-title">Spouse of US Citizen</h1>
          <div className="cos-line"></div>
          {spouseCitizen.map((section, index) => (
            <React.Fragment key={index}>
              <h2>{`${index + 1}. ${section.title}`}</h2>
              {console.log(section.title)}
              {section.items && (
                <ol>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>- {item}</li>
                  ))}
                </ol>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="section-container">
          <div className="cos-line"></div>
          <h1 className="cos-title">
            Child of US Citizen or Permanent Resident
          </h1>
          <div className="cos-line"></div>
          {childCitizen.map((section, index) => (
            <React.Fragment key={index}>
              <h2>{`${index + 1}. ${section.title}`}</h2>
              {console.log(section.title)}
              {section.items && (
                <ol>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>- {item}</li>
                  ))}
                </ol>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default ChangeOfStatus;
