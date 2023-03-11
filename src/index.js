import React from "react";
import ReactDOM from "react-dom/client";
import LectureFree from "./LectureFree";
import { AuthContextProvider } from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <React.StrictMode>
      <AuthContextProvider>
        <LectureFree />
      </AuthContextProvider>
    </React.StrictMode>
  );
};
root.render(<App />);

