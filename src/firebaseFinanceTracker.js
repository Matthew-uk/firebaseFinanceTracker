// THIS FOLDER WILL ACT AS OUR APP.JS

import React from "react";
// React packages
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { Loading } from "./components/loading/loading";
// General Styles
import "./GeneralStyles.css";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/dashboard/dashboard";
import LandingPage from "./pages/landing/landingPage";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";
// Pages

export default function FirebaseFinanceTracker() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div>
      {authIsReady ? (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={!user ? <LandingPage /> : <Dashboard />}
            />
            <Route
              path="/signup"
              exact
              element={!user ? <SignUp /> : <Dashboard />}
            />
            <Route
              path="/login"
              exact
              element={!user ? <Login /> : <Dashboard />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </div>
  );
}
