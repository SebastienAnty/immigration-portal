import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import EmployeeDisclamer from "../assets/USAFILEPRO,INC.EMPLOYEEDISCLAIMER.pdf";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-section">
          <h3>Company</h3>
          <ul>
            <Link to="/comingsoon">
              <li>Our Team</li>
            </Link>
          </ul>
        </div>
        <div className="legal-section">
          <h3>Legal</h3>
          <ul>
            <a href={EmployeeDisclamer}>
              <li>Employee Disclaimer</li>
            </a>
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
