// THIS FOLDER WILL ACT AS OUR APP.JS

import React from "react";
// React packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
// General Styles
import "./GeneralStyles.css";
import LandingPage from "./pages/landing/landingPage";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
// Pages

export default function FirebaseFinanceTracker() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
