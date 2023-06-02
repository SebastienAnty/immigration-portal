import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

import "./navbar.css";

const Navbar = ({ isLoggedIn, handleSignOut }) => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/login");
  };

  const handleSignOutClick = () => {
    auth
      .signOut()
      .then(() => {
        handleSignOut();
        navigation("/login");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <>
      <div className="navbar_container">
        <h1 className="navbar_text">USA FILE PRO, INC.</h1>
        {isLoggedIn ? (
          <button className="navbar_button" onClick={handleSignOutClick}>
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
