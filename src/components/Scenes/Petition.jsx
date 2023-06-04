import React from "react";
import { petitionSpouses, petitionParents } from "./documents/PetitionDoc";
import "./styles/petition.css";

const Petition = () => {
  return (
    <>
      <div className="petition-container">
        <div className="section-container">
          <div className="petition-line"></div>
          <h1 className="petition-title">Petition for Spouses in US</h1>
          <div className="petition-line"></div>
          {petitionSpouses.map((section, index) => (
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
          <div className="petition-line"></div>
          <h1 className="petition-title">Petition for Parents in US</h1>
          <div className="petition-line"></div>
          {petitionParents.map((section, index) => (
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

export default Petition;
