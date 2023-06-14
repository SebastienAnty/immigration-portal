import React from "react";
import comingSoon from "../assets/coming-soon.avif";
import "./comingSoon.css";

const ComingSoon = () => {
  return (
    <>
      <div className="coming-soon-container">
        <img src={comingSoon} alt="coming soon" className="coming-soon-image" />
      </div>
    </>
  );
};

export default ComingSoon;
