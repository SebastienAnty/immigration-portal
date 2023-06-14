import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

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
            <Link to="/comingsoon">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="legal-section">
          <h3>Legal</h3>
          <ul>
            <Link to="/comingsoon">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/comingsoon">
              <li>Terms of Service</li>
            </Link>
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
