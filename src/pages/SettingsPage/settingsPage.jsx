import React, { useState } from "react";
import "./settingsPage.css";

export default function SettingsPage() {
  const [password, setPassword] = useState("");
  return (
    <div className="page settings">
      <h2>Make Changes to your Data</h2>
      <div className="changeData">
        <div className="inputs">
        <input
          type="text"
          placeholder="Change Username"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        <input
          type="text"
          placeholder="Change Password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        <input
          type="text"
          placeholder="Change Institute"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
        </div>
        <button>Update Settings</button>
      </div>
    </div>
  );
}
