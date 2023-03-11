import React from "react";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Username: ${email}\nPassowrd: ${password}`);
    setPassword('');
    setEmail('');
  }
  return (
    <form onSubmit={handleLogin}>
      <div className="login">
        <div className="login-card">
          <div className="username">
            <label>Email</label>
            <input
              type="text"
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
          <button>LOGIN</button>
        </div>
      </div>
    </form>
  );
}
