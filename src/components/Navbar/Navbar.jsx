import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./navbar.css";

const Navbar = ({ isLoggedIn, handleSignOut }) => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/login");
  };

  return (
    <>
      <div className="navbar_container">
        <h1 className="navbar_text">USA FILE PRO, INC.</h1>
        {isLoggedIn ? (
          <button className="navbar_button" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <button className="navbar_button" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
