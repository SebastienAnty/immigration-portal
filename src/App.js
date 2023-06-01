import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from "./components/Landing/LandingScreen";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Navbar from "./components/Navbar/Navbar";
import { auth } from "./firebaseConfig";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
