import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingScreen from "./components/Landing/LandingScreen";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { auth } from "./firebaseConfig";
import TPS from "./components/Scenes/TPS";
import AsylumScene from "./components/Scenes/Asylum";

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

  useEffect((e) => {
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
          {isLoggedIn ? (
            <>
              <Route path="/doc/asylum" element={<AsylumScene />} />
              <Route path="/doc/temporaryprotectivestatus" element={<TPS />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
