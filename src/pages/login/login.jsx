import React from "react";
import "./login.css";
import { useState } from "react";
import Nav from "../../components/navbar/nav";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="login-container">
      <Nav />
      <form onSubmit={handleLogin}>
        <div className="login">
          <div className="login-card">
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
            <button>{isPending ? "Loading..." : "Login"}</button>
            <p>{error && error}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
