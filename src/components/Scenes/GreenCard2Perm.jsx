import React from "react";
import { greenCard2Perm } from "./documents/GreenCard2PermDoc";

const GreenCard = () => {
  return (
    <>
      <div className="petition-container">
        <div className="section-container">
          <div className="petition-line"></div>
          <h1 className="petition-title">2 Year Green Card to Permanent</h1>
          <div className="petition-line"></div>
          {greenCard2Perm.map((section, index) => (
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

export default GreenCard;
