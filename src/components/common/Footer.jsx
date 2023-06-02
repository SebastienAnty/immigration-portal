import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-section">
          <h3>Company</h3>
          <ul>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="legal-section">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} USA File Pro, Inc. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
