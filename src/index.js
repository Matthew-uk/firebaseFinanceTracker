import React from "react";
import ReactDOM from "react-dom/client";
import LectureFree from "./LectureFree";


const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <React.StrictMode>
      <LectureFree />
    </React.StrictMode>
  );
};
root.render(<App />);

