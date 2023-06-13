import React, { useState, useEffect } from "react";
import { questions, routeMapping } from "./questions";
import { useNavigate } from "react-router-dom";
import firebase from "../../firebaseConfig";
import "./landingscreen.css";
import { Button } from "@mui/material";

const LandingScreen = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [displayStatusChangeButtons, setDisplayStatusChangeButtons] =
    useState(false);
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
      if (selectedQuestion === "Family Petition") {
        // Display buttons for status change options
        setDisplayStatusChangeButtons(true);
      } else {
        const route = routeMapping[selectedQuestion];
        if (route) {
          navigation(route);
        }
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
        localStorage.setItem("userFirstName", firstName);
      }
    } else {
      const storedUserFirstName = localStorage.getItem("userFirstName");
      if (storedUserFirstName) {
        setUserFirstName(storedUserFirstName);
      }
    }
  }, []);

  return (
    <>
      {userFirstName && (
        <h2 className="welcome-title">
          Welcome back, <span className="user-name">{userFirstName}</span>!
        </h2>
      )}

      {displayStatusChangeButtons ? (
        <>
          <div className="status-change-container">
            <div
              style={{
                height: 300,
                width: 800,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: 8,
                marginTop: 50,
                marginBottom: 85,
                padding: 20,
              }}
            >
              <div className="status-change-title">Family Petition</div>
              <Button
                variant="contained"
                onClick={() => navigation("/doc/family-petition-with-cos")}
              >
                With Status Change
              </Button>
              <Button
                variant="contained"
                onClick={() => navigation("/doc/family-petition-without-cos")}
              >
                No Status Change
              </Button>
            </div>
          </div>
        </>
      ) : (
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
      )}

      {!displayStatusChangeButtons && (
        <button
          className={`next-button ${nextButtonEnabled ? "enabled" : ""}`}
          onClick={handleNextButtonClick}
          disabled={!nextButtonEnabled}
        >
          Next
        </button>
      )}
    </>
  );
};

export default LandingScreen;
