import React from "react";
import { fianceVisa } from "./documents/FianceVisaDoc";

const FianceVisa = () => {
  return (
    <>
      <div className="cos-container">
        <div className="section-container">
          <div className="cos-line"></div>
          <h1 className="cos-title">Fiance Visa</h1>
          <div className="cos-line"></div>
          {fianceVisa.map((section, index) => (
            <React.Fragment key={index}>
              <h2>{`${index + 1}. ${section.title}`}</h2>
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
    </>
  );
};

export default FianceVisa;
