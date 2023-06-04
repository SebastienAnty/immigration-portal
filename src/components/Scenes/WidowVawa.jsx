import React from "react";
import { widowVawaDocs } from "./documents/WidowVawaDoc";

const WidowVawa = () => {
  return (
    <>
      <div className="vc-container">
        <div className="vc-section-container">
          <div className="vc-line"></div>
          <h1 className="vc-title">Petition for Spouse Outside of US</h1>
          <div className="vc-line"></div>
          {widowVawaDocs.map((section, index) => (
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

export default WidowVawa;
