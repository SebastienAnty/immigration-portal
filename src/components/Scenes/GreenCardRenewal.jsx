import React from "react";
import { greenCardRenewal } from "./documents/RenewGreenCardDoc";

const GreenCardRenewal = () => {
  return (
    <>
      <div className="petition-container">
        <div className="section-container">
          <div className="petition-line"></div>
          <h1 className="petition-title">Renew 10 Year Green Card</h1>
          <div className="petition-line"></div>
          {greenCardRenewal.map((section, index) => (
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
    </>
  );
};

export default GreenCardRenewal;
