import React, { useState, useEffect } from "react";
import { questions, routeMapping } from "./questions";
import { useNavigate } from "react-router-dom";
import firebase from "../../firebaseConfig";
import "./landingscreen.css";

const LandingScreen = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const navigation = useNavigate();

  const handleCheckboxChange = (question) => {
    if (selectedQuestion === question) {
      setSelectedQuestion("");
      setNextButtonEnabled(false);
    } else {
      setSelectedQuestion(question);
      setNextButtonEnabled(true);
    }
  };

  const handleNextButtonClick = () => {
    if (selectedQuestion !== "") {
      const route = routeMapping[selectedQuestion];
      if (route) {
        navigation(route);
      }
    }
  };

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userDisplayName = currentUser.displayName;
      if (userDisplayName) {
        const firstName = userDisplayName.split(" ")[0];
        setUserFirstName(firstName);
      }
    }
  }, []);

  return (
    <>
      <h2 className="welcome-title">
        Welcome back, <span className="user-name">{userFirstName}</span>!
      </h2>

      <div className="landing-container">
        {questions.map((question, i) => (
          <div
            key={i}
            className="question-container"
            onClick={() => handleCheckboxChange(question)}
          >
            <input
              type="checkbox"
              checked={selectedQuestion === question}
              onChange={() => handleCheckboxChange(question)}
            />
            <h1>{question}</h1>
          </div>
        ))}
      </div>
      <button
        className={`next-button ${nextButtonEnabled ? "enabled" : ""}`}
        onClick={handleNextButtonClick}
        disabled={!nextButtonEnabled}
      >
        Next
      </button>
    </>
  );
};

export default LandingScreen;
