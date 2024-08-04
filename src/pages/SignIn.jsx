import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig"; // Import Firestore database
import { getFirestore,collection, addDoc, Timestamp } from "firebase/firestore"; // Import Firestore functions
import '../signin.css';
import Nav from '../Nav.jsx'

const db = getFirestore(app);
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);

      // Add sign-in details to Firestore
      await addDoc(collection(db, "User details"), {
        email: email,
        signInTime: Timestamp.now(),
        uid: user.uid
      });

      nav("/products"); // Navigate to the desired page after sign-in
    } catch (error) {
      console.error("Error signing in: ", error);
      setError(error.message);
    }
  };

  return (
    <div className="maindiv" >
    
      <div className="login-box">
        <h2 style={{  marginLeft: "", fontFamily: "revert" }}>
          Login
        </h2>
        <div className="inside">
          <form onSubmit={handleSubmit}>
            <label className="text-red-500">Email:</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Password:</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit" style={{color: "white", borderRadius: "25px" }}>
              Submit
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;