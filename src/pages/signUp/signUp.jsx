import React, { useState } from "react";
import Nav from "../../components/navbar/nav";
import { useSignUp } from "../../hooks/useSignUp";
import "./signUp.css";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, isPending, error } = useSignUp();

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(email, password, fullName);
  };

  return (
    <div className="signUpContainer">
      <Nav />
      <form onSubmit={handleSignUp}>
        <div className="signUp">
          <div className="signUp-card">
            <div className="fullName">
              <label>Full Name</label>
              <input
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                value={fullName}
                placeholder="Enter Full name..."
              />
            </div>
            <div className="username">
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Enter Email..."
              />
            </div>
            <div className="password">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                placeholder="Enter Password..."
              />
            </div>
            <div className="forgot">
              <p>Forgot Password?</p>
            </div>
            <button disabled={isPending}>
              {isPending ? "Loading..." : "Sign Up"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}
