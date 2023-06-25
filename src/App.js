import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingScreen from "./components/Landing/LandingScreen";
import Navbar from "./components/common/Navbar";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Footer from "./components/common/Footer";
import { auth } from "./firebaseConfig";
import TPS from "./components/Scenes/TPS";
import AsylumScene from "./components/Scenes/Asylum";
import FamilyPetition from "./components/Scenes/FamilyPetitionCOS";
import FianceVisa from "./components/Scenes/FianceVisa";
import VisaCenter from "./components/Scenes/VisaCenter";
import WorkPermit from "./components/Scenes/WorkPermit";
import GreenCard from "./components/Scenes/GreenCard2Perm";
import GreenCardRenewal from "./components/Scenes/GreenCardRenewal";
import Citizenship from "./components/Scenes/Citizenship";
import BidenParole from "./components/Scenes/BidenParole";
import UVisa from "./components/Scenes/UVisa";
import WidowVawa from "./components/Scenes/WidowVawa";
import Travel from "./components/Scenes/Travel";
import Questionnaire from "./components/Questionnaires/portal/Questionnaire";
import FamilyPetitionNoCOS from "./components/Scenes/FamilyPetitionNoCOS";
import FamilyPetitionQuestionnaire from "./components/Questionnaires/familyPetition/FamilyPetitionQuestionnaire";
import ComingSoon from "./components/common/ComingSoon";
import SpouseChangeStatus from "./components/Scenes/SpouseChangeStatus";
import ChildChangeStatus from "./components/Scenes/ChangeOfStatus";

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
        <Navbar
          handleSignOut={handleSignOut}
          isLoggedIn={isLoggedIn}
          displayName={auth.currentUser?.displayName}
        />
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {isLoggedIn ? (
            <>
              <Route path="/doc/temporaryprotectivestatus" element={<TPS />} />
              <Route path="/doc/asylum" element={<AsylumScene />} />
              <Route
                path="/doc/family-petition-with-cos"
                element={<FamilyPetition />}
              />
              <Route
                path="/doc/family-petition-without-cos"
                element={<FamilyPetitionNoCOS />}
              />
              <Route path="/doc/fiancevisa" element={<FianceVisa />} />
              <Route
                path="/doc/changeofstatus/spouse"
                element={<SpouseChangeStatus />}
              />
              <Route
                path="/doc/changeofstatus/child"
                element={<ChildChangeStatus />}
              />
              <Route path="/doc/visacenter" element={<VisaCenter />} />
              <Route path="/doc/workpermit" element={<WorkPermit />} />
              <Route path="/doc/greencardtopermanent" element={<GreenCard />} />
              <Route
                path="/doc/renew10yeargreencard"
                element={<GreenCardRenewal />}
              />
              <Route path="/doc/citizenship" element={<Citizenship />} />
              <Route path="/doc/bidenparole" element={<BidenParole />} />
              <Route path="/doc/uvisa" element={<UVisa />} />
              <Route path="/doc/widowervawa" element={<WidowVawa />} />
              <Route path="/doc/traveldocument" element={<Travel />} />
              <Route path="/questionnaire" element={<Questionnaire />} />
              <Route
                path="/family-petition-questionnaire"
                element={<FamilyPetitionQuestionnaire />}
              />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
