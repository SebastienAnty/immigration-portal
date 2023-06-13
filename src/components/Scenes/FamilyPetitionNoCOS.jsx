import React from "react";
import {
  familyPetition,
  familyPetitionParentsChild,
} from "./documents/PetitionNoCOS";

const FamilyPetitionNoCOS = () => {
  return (
    <>
      <div className="petition-container">
        <div className="section-container">
          <div className="petition-line"></div>
          <h1 className="petition-title">Petition for Spouses in US</h1>
          <div className="petition-line"></div>
          {familyPetition.map((section, index) => (
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
        <div className="section-container">
          <div className="petition-line"></div>
          <h1 className="petition-title">Petition for Parents in US</h1>
          <div className="petition-line"></div>
          {familyPetitionParentsChild.map((section, index) => (
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

export default FamilyPetitionNoCOS;
