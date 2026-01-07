import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
// Main application component
// Displays current weather based on user location
function App() {
  return (
    <React.Fragment>
      <div className="container">
    <h1>Weather App ( Learning Version) </h1>
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Gaurav Ghai
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
