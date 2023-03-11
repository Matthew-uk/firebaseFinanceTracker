import React, { useState } from "react";
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
    <form onSubmit={handleSignUp}>
      <div className="login">
        <div className="login-card">
          <div className="fullName">
            <label>Full Name</label>
            <input
              type="text"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              value={fullName}
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
            />
          </div>
          <div className="forgot">
            <p>Forgot Password?</p>
          </div>
          <button disabled={isPending}>{isPending ? "Loading..." : "LOGIN"}</button>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
      </div>
    </form>
  );
}
