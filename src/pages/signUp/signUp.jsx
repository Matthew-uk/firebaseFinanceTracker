import React from "react";
import "./signUp.css";

export default function SignUp() {
  return (
    <div className="login">
      <div className="login-card">
        <div className="username">
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div className="username">
          <label>Email</label>
          <input type="email" />
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
