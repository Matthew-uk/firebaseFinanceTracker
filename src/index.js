import React from "react";
import ReactDOM from "react-dom/client";
import FirebaseFinanceTracker from "./firebaseFinanceTracker";


const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <React.StrictMode>
      <FirebaseFinanceTracker />
    </React.StrictMode>
  );
};
root.render(<App />);

