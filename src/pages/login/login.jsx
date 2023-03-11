import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-card">
        <div className="username">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="forgot">
          <p>Forgot Password?</p>
        </div>
        <button>LOGIN</button>
      </div>
    </div>
  );
}
