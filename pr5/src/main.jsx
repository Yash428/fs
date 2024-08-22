import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex flex-col items-center justify-center">
      <div className="mt-6 font-bold p-2 text-3xl flex items-center justify-center text-white">Calculator using React App [22DCS085]</div>
      <App />
    </div>
  </React.StrictMode>
);
