import React, { useState, useEffect } from "react";
import firebase, { auth } from "../../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
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

  const mergeAccounts = async (currentUser, newProviderCredential) => {
    try {
      // Link the new provider credential to the current user
      await currentUser.linkWithCredential(newProviderCredential);

      // After the accounts are successfully linked, you can retrieve the merged user
      const mergedUser = await auth.currentUser;

      // Return the merged user if needed
      return mergedUser;
    } catch (error) {
      // Handle the error if the accounts cannot be merged
      console.error("Account merge error:", error);
      // Return null or throw an error to indicate the merge failure
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset validation errors
    setEmailError(false);
    setPasswordError(false);

    // Validate email and password
    if (!email) {
      setEmailError(true);
      return;
    }
    if (!password) {
      setPasswordError(true);
      return;
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation("/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setIncorrectPassword(true);
      } else {
        console.log(error);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { user, additionalUserInfo } = result;

      const emailExists = await firebase
        .auth()
        .fetchSignInMethodsForEmail(user.email);

      if (emailExists.length > 0) {
        const currentUserId = firebase.auth().currentUser.uid;
        const currentUser = firebase.auth().currentUser;

        if (currentUserId !== user.uid) {
          await mergeAccounts(currentUser, result.credential);

          navigation("/");
        } else {
          console.log("Google account is already linked to this email.");
        }

        return;
      }

      if (additionalUserInfo.isNewUser) {
        const displayName = user.displayName;
        const [firstName, lastName] = displayName.split(" ");

        // Update the user's profile with first name and last name
        await user.updateProfile({
          displayName: user.displayName,
        });

        await firebase.firestore().collection("users").doc(user.uid).set({
          firstName: firstName,
          lastName: lastName,
          email: user.email,
        });
      }

      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && (
            <p className="error-message">Please enter your email</p>
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={incorrectPassword ? "incorrect-password" : ""}
          />
          {passwordError && (
            <p className="error-message">Please enter your password</p>
          )}
          {incorrectPassword && (
            <p className="error-message">
              Incorrect password. Please try again.
            </p>
          )}
          <button type="submit">Login</button>
        </form>
        <button className="google-login-button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <p>
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <footer className="footer">{/* Footer content */}</footer>
    </div>
  );
};

export default Login;
