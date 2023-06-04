import React from "react";
import { bidenParoleDocs } from "./documents/BidenParoleDoc";

const BidenParole = () => {
  return (
    <>
      <div className="vc-container">
        <div className="vc-section-container">
          <div className="vc-line"></div>
          <h1 className="vc-title">Biden Parole</h1>
          <div className="vc-line"></div>
          {bidenParoleDocs.map((section, index) => (
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

export default BidenParole;
