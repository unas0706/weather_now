import React from "react";

const AppLogo = ({ onStart }) => {
  return (
    <div className="app-logo-screen">
      <div className="logo-container">
        <div className="logo-icon">
          <i className="fas fa-sun"></i>
        </div>
        <h1 className="logo-text">WEATHER NOW</h1>
        <p className="logo-subtitle">PREMIUM FORECASTING</p>
      </div>
      <button className="start-button" onClick={onStart}>
        <i className="fas fa-map-marked-alt"></i>
        Get Started
      </button>
    </div>
  );
};

export default AppLogo;
