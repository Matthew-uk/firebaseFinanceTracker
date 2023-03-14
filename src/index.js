import React from "react";
import ReactDOM from "react-dom/client";
import FirebaseFinanceTracker from "./firebaseFinanceTracker";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <React.StrictMode>
      <AuthContextProvider>
        <FirebaseFinanceTracker />
      </AuthContextProvider>
    </React.StrictMode>
  );
};
root.render(<App />);
