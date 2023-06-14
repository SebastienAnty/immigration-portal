import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { questions, routeMapping } from "./questions";
import firebase from "../../firebaseConfig";
import "./landingscreen.css";
import { Button, Modal, Box } from "@mui/material";

const LandingScreen = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [displayStatusChangeModal, setDisplayStatusChangeModal] =
    useState(false);
  const [displayStatusChangeButtons, setDisplayStatusChangeButtons] =
    useState(false);
  const navigation = useNavigate();

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    if (question === "Family Petition") {
      setDisplayStatusChangeModal(true);
    } else {
      const route = routeMapping[question];
      if (route) {
        navigation(route);
      }
    }
  };

  const handleStatusChangeOptionClick = (route) => {
    setDisplayStatusChangeModal(false);
    if (route) {
      navigation(route);
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

      {displayStatusChangeModal && (
        <Modal
          open={displayStatusChangeModal}
          onClose={() => setDisplayStatusChangeModal(false)}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <h2 id="modal-title">Family Petition Options</h2>
            <Button
              variant="contained"
              onClick={() =>
                handleStatusChangeOptionClick("/doc/family-petition-with-cos")
              }
              sx={{ mr: 2 }}
            >
              With Status Change
            </Button>
            <Button
              variant="contained"
              onClick={() =>
                handleStatusChangeOptionClick(
                  "/doc/family-petition-without-cos"
                )
              }
            >
              No Status Change
            </Button>
          </Box>
        </Modal>
      )}

      <div className="landing-container">
        {questions.map((question, i) => (
          <Link
            key={i}
            to={routeMapping[question]}
            className={`question-container ${
              selectedQuestion === question ? "selected" : ""
            }`}
            onClick={() => handleQuestionClick(question)}
          >
            <h1>{question}</h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LandingScreen;
