import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, firestore } from "../../firebaseConfig";
import "./signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const emailExists = await firestore
        .collection("users")
        .where("email", "==", email)
        .get();

      if (!emailExists.empty) {
        setError("Email already in use. Please use a different email.");
        return;
      }
      await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;

      await user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });

      await firestore.collection("users").doc(user.uid).set({
        firstName,
        lastName,
        email,
      });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
