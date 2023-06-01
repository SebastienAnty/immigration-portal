import React, { useState, useEffect } from "react";
import firebase, { auth } from "../../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation("/");
      }
    });
    const user = firebase.auth().currentUser;
    if (user) {
      navigation("/");
    }
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button className="google-login-button" onClick={handleGoogleLogin}>
        Login with Google
      </button>
      {error && <p className="error-message">{error}</p>}
      <p>
        Don't have an account yet? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
